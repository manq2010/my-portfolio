import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  projects, skills, testimonies, experiencies,
} from '../../data/portfolio';
import { ThemeContext } from '../../contexts/theme';

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
`;

const NavMenu = styled.ul`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    width: 100%;
    // height: 100vh;

    @media (min-width: 600px) {
        margin-right: 1.5rem;
        display: flex;
        flex-direction: row;
        position: static;
        height: 100%;
    }
`;

const NavItem = styled.li`
    margin: 0.5rem 0;

    @media (min-width: 600px) {
        margin-left: 1.5rem;
    }
`;

const NavThemeButton = styled.button`
    margin-top: 0.4rem;
`;

const NavHumbugerButton = styled.button`
    display: flex;
    z-index: 2;
    margin-left: 0.8rem;

    @media (min-width: 600px) {
       display: none;
    }
`;

const NavLink = styled.a`
    color: #555;
    text-transform: lowercase;
    font-weight: 500;

    // color: var(--clr-primary);
  padding: 0 0 0.3em 0;
  position: relative;

  &:hover { 
    color: #2978b5;
  }

  &::before {
    content: '';
    display: inline;
    width: 0%;
    height: 0.2em;
    position: absolute;
    bottom: 0;
    background-color: #2978b5;
    transition: width 0.2s ease-in;
  }

    &:hover::before,
    &:focus::before {
    width: 100%;
}
`;

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <NavWrapper>
      <NavMenu
        style={{ display: showNavMenu ? 'flex' : null }}
      >
        { projects.length ? (
          <NavItem>
            <NavLink
              href="#projects"
              onClick={toggleNavMenu}
            >
              Projects
            </NavLink>
          </NavItem>
        ) : null }

        { skills.length ? (
          <NavItem>
            <NavLink
              href="#skills"
              onClick={toggleNavMenu}
            >
              Skills
            </NavLink>
          </NavItem>
        ) : null }

        { testimonies.length ? (
          <NavItem>
            <NavLink
              href="#testimonials"
              onClick={toggleNavMenu}
            >
              Testimonials
            </NavLink>
          </NavItem>
        ) : null }

        { experiencies.length ? (
          <NavItem>
            <NavLink
              href="#experience"
              onClick={toggleNavMenu}
            >
              My Experience
            </NavLink>
          </NavItem>
        ) : null }

      </NavMenu>
      <NavThemeButton
        type="button"
        onClick={toggleTheme}
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </NavThemeButton>
      <NavHumbugerButton
        type="button"
        onClick={toggleNavMenu}
        aria-label="toggle navigation"
      >
        {showNavMenu ? <CloseIcon /> : <MenuIcon />}
      </NavHumbugerButton>

    </NavWrapper>
  );
};

export default Navbar;
