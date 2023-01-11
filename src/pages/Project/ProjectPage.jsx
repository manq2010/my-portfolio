import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ProjectItem from '../../features/Projects/ProjectItem';
import projectsData from '../../data/projectsData';
import headerData from '../../data/headerData';
import Navbar from '../../features/Navbar/Navbar';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ProjectItems = styled.section`
margin-top: 2rem
`;

const ProjectPage = () => {
  const [search, setSearch] = useState('');

  const filteredArticles = projectsData.filter((project) => {
    const content = project.name + project.description + project.stack;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ProjectContainer>
      <Helmet>
        <title>
          {headerData.name}
          {' '}
          | Projects
        </title>
      </Helmet>
      <Navbar />
      <ProjectItems>
        <div>
          <Link to="/">
            <HomeIcon />
          </Link>
          <h1>Projects</h1>
        </div>
        <div>
          <div className="projectPage-search">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." />
          </div>
          <div>
            <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
              {filteredArticles.map((project) => (
                <ProjectItem key={uuidv4()} project={project} />
              ))}
            </Grid>
          </div>
        </div>
      </ProjectItems>
    </ProjectContainer>
  );
};

export default ProjectPage;
