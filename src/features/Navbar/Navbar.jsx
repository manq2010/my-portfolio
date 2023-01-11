import React from 'react';
import { NavLink } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
// import Brightness2Icon from '@mui/icons-material/Brightness2';
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import headerData from '../../data/headerData';
import projectsData from '../../data/projectsData';
import skillsData from '../../data/skillsData';
import educationData from '../../data/educationData';
// import { ThemeContext } from '../../contexts/theme';
import achievementData from '../../data/achievementData';

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
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const NavWrapper = styled.nav`

`;

const NavItems = styled.div`

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

const Navbar = ({
  handleSkillScroll, handleAboutScroll, handleProjectScroll, handleEducationScroll,
  handleAchievementsScroll, handleExperienceScroll, handleContactScroll,
}) => {
  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };

  return (
    <Header>
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
              </div>
            </NavMenu>
          </NavMenuItems>
        </NavItems>
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
