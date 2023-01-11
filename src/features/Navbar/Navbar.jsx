import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
// import Brightness2Icon from '@mui/icons-material/Brightness2';
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import IconLogo from '../Logo/IconLogo';
import links from '../../data/navlinksData';

// import { loaderDelay } from '../Hero/Hero';

const Header = styled.header`
${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blimport IconLogo from '../Logo/IconLogo';
ur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const NavWrapper = styled.nav`
${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const NavLinks = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
  display: none;
}

ol {
  ${({ theme }) => theme.mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 0 5px;
    position: relative;
    counter-increment: item 1;
    font-size: var(--fz-xs);

    a {
      padding: 10px;

      &:before {
        content: '0' counter(item) '.';
        margin-right: 5px;
        color: var(--green);
        font-size: var(--fz-xxs);
        text-align: right;
      }
    }
  }
}

.resume-button {
  ${({ theme }) => theme.mixins.smallButton};
  margin-left: 15px;
  font-size: var(--fz-xs);
}
`;

const Navbar = ({
  handleSkillScroll, handleAboutScroll, handleProjectScroll, handleEducationScroll,
  handleAchievementsScroll, handleExperienceScroll, handleContactScroll,
}) => {
  const isHome = true;
  const [isMounted, setIsMounted] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const timeout = 2000;
  const fadeDownClass = isHome ? 'fadedown' : '';

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  const items = [
    handleAboutScroll,
    handleExperienceScroll,
    handleProjectScroll,
    handleSkillScroll,
    handleAchievementsScroll,
    handleEducationScroll,
    handleContactScroll,
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const shortname = (name) => {
  //   if (name.length > 12) {
  //     return name.split(' ')[0];
  //   }
  //   return name;
  // };

  // const timeout = loaderDelay;

  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <IconLogo />
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a className="resume-button" href="/resume" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <Header scrolledToTop={scrolledToTop}>
      <NavWrapper>

        <TransitionGroup component={null}>
          {isMounted
          && (
          <CSSTransition classNames="fade" timeout={timeout}>
            <>{Logo}</>
          </CSSTransition>
          )}
        </TransitionGroup>

        <NavLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted
                    && links
                    && links.map(({ url, name, id }) => (
                      <CSSTransition key={id} classNames={fadeDownClass} timeout={timeout}>
                        <li key={IDBCursorWithValue} style={{ transitionDelay: `${isHome ? id * 100 : 0}ms` }}>
                          <Link to={url} onClick={items[id - 1]}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
            </TransitionGroup>
          </ol>
          <TransitionGroup component={null}>
            {isMounted && (
            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
              <div style={{ transitionDelay: `${isHome ? links.length * 100 : 0}ms` }}>
                {ResumeLink}
              </div>
            </CSSTransition>
            )}
          </TransitionGroup>
        </NavLinks>
      </NavWrapper>
    </Header>
  );
};

Navbar.propTypes = {
  handleSkillScroll: PropTypes.node.isRequired,
  handleAboutScroll: PropTypes.node.isRequired,
  handleProjectScroll: PropTypes.node.isRequired,
  handleEducationScroll: PropTypes.node.isRequired,
  handleAchievementsScroll: PropTypes.node.isRequired,
  handleExperienceScroll: PropTypes.node.isRequired,
  handleContactScroll: PropTypes.node.isRequired,
};

export default Navbar;
