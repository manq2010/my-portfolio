import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import keyCode from '../../utils/keyCode';
import links from '../../data/navlinksData';

const NenuWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? '0.12s' : '0s')};
    transform: rotate(${(props) => (props.menuOpen ? '225deg' : '0deg')});
    transition-timing-function: cubic-bezier(
      ${(props) => (props.menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19')}
    );
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.menuOpen ? '100%' : '120%')};
      top: ${(props) => (props.menuOpen ? '0' : '-10px')};
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)')};
    }
    &:after {
      width: ${(props) => (props.menuOpen ? '100%' : '80%')};
      bottom: ${(props) => (props.menuOpen ? '0' : '-10px')};
      transform: rotate(${(props) => (props.menuOpen ? '-90deg' : '0')});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const MenuSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      // padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from(navRef.current.querySelectorAll('a')),
    ];

    // eslint-disable-next-line prefer-destructuring
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case keyCode.ESCAPE:
      case keyCode.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case keyCode.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const useOnClickOutside = (ref, handler) => {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler],
    );
  };

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <NenuWrapper>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <HamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
          aria-label="Menu"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </HamburgerButton>

        <MenuSidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {links && (
              <ol>
                {links.slice(0, 8).map(({ url, name, id }) => (
                  <li key={id}>
                    <Link to={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            <Link to="/resume" className="resume-link">
              Resume
            </Link>
          </nav>
        </MenuSidebar>
      </div>
    </NenuWrapper>
  );
};

export default MenuToggle;
