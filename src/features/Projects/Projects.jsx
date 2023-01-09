import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import projects from '../../data/projectsData';
import ProjectItem from './ProjectItem';

const ProjectSectionWrapper = styled.section`

`;

const SectionTitle = styled.h2`
  
`;

const ProjectGrid = styled.div`

`;

const Projects = () => (
  <section id="projects">
    { projects.length && (
      <ProjectSectionWrapper id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectGrid>
          {projects.slice(0, 2).map((project) => (
            <ProjectItem key={uuidv4()} project={project} />
          ))}
        </ProjectGrid>

        {

          projects.length > 2 && (
            <div>
              <Link to="/projects">
                <button type="button">
                  View All
                  <ChevronRightIcon />
                </button>
              </Link>
            </div>
          )
          }
      </ProjectSectionWrapper>
    )}
  </section>
);

export default Projects;
