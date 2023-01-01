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
            <a
              href="#projects"
              onClick={toggleNavMenu}
            >
              Projects
            </a>
          </NavItem>
        ) : null }

        { skills.length ? (
          <NavItem>
            <a
              href="#skills"
              onClick={toggleNavMenu}
            >
              Skills
            </a>
          </NavItem>
        ) : null }

        { testimonies.length ? (
          <NavItem>
            <a
              href="#testimonials"
              onClick={toggleNavMenu}
            >
              Testimonials
            </a>
          </NavItem>
        ) : null }

        { experiencies.length ? (
          <NavItem>
            <a
              href="#experience"
              onClick={toggleNavMenu}
            >
              My Experience
            </a>
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
