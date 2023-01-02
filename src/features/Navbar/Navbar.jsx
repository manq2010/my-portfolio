import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import headerData from '../../data/headerData';
import projectsData from '../../data/projectsData';
import skillsData from '../../data/skillsData';
import educationData from '../../data/educationData';
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

// const NavLinksss = styled.a`
//     color: #555;
//     text-transform: lowercase;
//     font-weight: 500;

//     // color: var(--clr-primary);
//   padding: 0 0 0.3em 0;
//   position: relative;

//   &:hover {
//     color: #2978b5;
//   }

//   &::before {
//     content: '';
//     display: inline;
//     width: 0%;
//     height: 0.2em;
//     position: absolute;
//     bottom: 0;
//     background-color: #2978b5;
//     transition: width 0.2s ease-in;
//   }

//     &:hover::before,
//     &:focus::before {
//     width: 100%;
// }
// `;

// const NavBar = styled.nav`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// height: 5rem;
// align-items: center;
// border-bottom: 1px solid gray
// `;

// const MenuNavUL = styled.ul`
//   list-style: none;
//   position: relative;
//   color: #121212;
//   display: flex;
//   gap: 1rem;
//   margin-top: 0;
//   align-items: center;
//   justify-content: space-between;
//   height: 2.5rem;
//   font-family: "Montserrat",sans-serif;
//   font-size: .813rem;
//   letter-spacing: 1.9px;
//   margin-right: 5rem;
// `;

// const MenuLI = styled.li`
//   font-weight: bold;
//   a:link {
//     text-decoration: none;
//   }
// `;

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };

  // const links = [
  //   {
  //     id: 1,
  //     path: '/',
  //     text: 'Rockets',
  //   },
  //   {
  //     id: 2,
  //     path: '/missions',
  //     text: 'Missions',
  //   },
  //   {
  //     id: 3,
  //     path: '/myprofile',
  //     text: 'My Profile',
  //   },
  // ];

  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'bold',
    color: isActive ? 'white' : 'rgb(4, 118, 248)',
    backgroundColor: isActive ? 'rgb(4, 118, 248)' : 'white',
    padding: isActive ? '0.5rem' : '0',
    borderRadius: isActive ? '0.2rem' : '0',
  });

  return (
    <NavWrapper>
      <NavMenu
        style={{ display: showNavMenu ? 'flex' : null }}
      >

        <h1>
          {shortname(headerData.name)}
        </h1>
        <NavItem>
          <NavLink
            to="/"
            href=""
            onClick={toggleNavMenu}
            style={navLinkStyles}
          >
            <HomeIcon />
            Home
          </NavLink>
        </NavItem>

        { projectsData.length ? (
          <NavItem>
            <NavLink
              to="/projects"
              href="#projects"
              onClick={toggleNavMenu}
              // style={navLinkStyles}
            >
              Projects
            </NavLink>
          </NavItem>
        ) : null }

        { skillsData.length ? (
          <NavItem>
            <NavLink
              to="/skills"
              href="#skills"
              onClick={toggleNavMenu}
            >
              Skills
            </NavLink>
          </NavItem>
        ) : null }

        <NavItem>
          <NavLink
            to="/about"
            href="#about"
            onClick={toggleNavMenu}
          >
            About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/contacts"
            href="#contacts"
            onClick={toggleNavMenu}
          >
            Contacts
          </NavLink>
        </NavItem>

        { educationData.length ? (
          <NavItem>
            <NavLink
              to="/experince"
              href="#experince"
              onClick={toggleNavMenu}
            >
              Experience
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

  // <NavBar>
  //   {/* <Logo /> */}
  //   <h1>test</h1>
  //   <MenuNavUL>
  //     {links.map((link) => (
  //       <MenuLI key={link.id} aria-hidden="true">
  //         <NavLink style={navLinkStyles} data-testid={link.text} to={link.path}>
  //           {link.text}
  //         </NavLink>
  //       </MenuLI>
  //     ))}
  //   </MenuNavUL>
  // </NavBar>
  );
};

export default Navbar;
