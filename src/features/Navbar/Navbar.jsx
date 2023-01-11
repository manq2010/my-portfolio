import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import headerData from '../../data/headerData';
import projectsData from '../../data/projectsData';
import skillsData from '../../data/skillsData';
import educationData from '../../data/educationData';
import { ThemeContext } from '../../contexts/theme';
import achievementData from '../../data/achievementData';

const NavWrapper = styled.div`
// display: flex;
`;

const NavItems = styled.nav`

`;

const NavMenuItems = styled.div`

`;

const NavMenu = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;

.items {
  display: flex;
  flex-direction: row;
  // gap: 10px;
}

`;

const NavItem = styled.li`
margin: 0 5px;

@media (max-width: 768px) {
  display: none;
}
`;

const NavThemeButton = styled.button`
 
`;

const Navbar = ({
  handleSkillScroll, handleAboutScroll, handleProjectScroll, handleEducationScroll,
  handleAchievementsScroll, handleExperienceScroll, handleContactScroll,
}) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };

  return (
    <NavWrapper>
      <NavItems>
        <NavMenuItems>
          <NavMenu>
            <div className="logo">
              <NavLink
                to="/"
                href=""
              >
                <h1>
                  {shortname(headerData.name)}
                </h1>
              </NavLink>
            </div>
            <div className="items">
              <NavItem>
                <NavLink
                  to="/"
                  onClick={handleAboutScroll}
                >
                  About
                </NavLink>
              </NavItem>

              { educationData.length ? (
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={handleExperienceScroll}
                  >
                    Experience
                  </NavLink>
                </NavItem>
              ) : null }

              { projectsData.length ? (
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={handleProjectScroll}
                  >
                    Work
                  </NavLink>
                </NavItem>
              ) : null }

              { skillsData.stack1.length ? (
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={handleSkillScroll}
                  >
                    Skills
                  </NavLink>
                </NavItem>
              ) : null }

              { educationData.length ? (
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={handleEducationScroll}
                  >
                    Education
                  </NavLink>
                </NavItem>
              ) : null }

              { achievementData.achievements.length ? (
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={handleAchievementsScroll}
                  >
                    Achievements
                  </NavLink>
                </NavItem>
              ) : null }

              <NavItem>
                <NavLink
                  to="/"
                  onClick={handleContactScroll}
                >
                  Contacts
                </NavLink>
              </NavItem>

              <NavThemeButton
                type="button"
                onClick={toggleTheme}
                aria-label="toggle theme"
              >
                {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
              </NavThemeButton>
            </div>
          </NavMenu>
        </NavMenuItems>
      </NavItems>
    </NavWrapper>
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
