import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import headerData from '../../data/headerData';
import Navbar from '../../features/Navbar/Navbar';
import ProjectList from '../../features/Projects/ProjectList';
import SocialSideBar from '../../features/Socials/Socials';

const ProjectContainer = styled.div`

`;

const ProjectPage = () => (
  <ProjectContainer>
    <Helmet>
      <title>
        {headerData.name}
        {' '}
        | Projects
      </title>
    </Helmet>
    <Navbar />
    <SocialSideBar />
    <main id="content-blur" className="fillHeight">
      <ProjectList />
    </main>
  </ProjectContainer>
);

export default ProjectPage;
