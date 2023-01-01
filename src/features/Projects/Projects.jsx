import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { projects } from '../../data/portfolio';
import ProjectItem from './ProjectItem';

const ProjectSectionWrapper = styled.section`
    margin-top: 5tem;
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    ;text-transform: uppercase;
`;

const ProjectGrid = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
`;

const Projects = () => (
  <>
    { projects.length ? (
      <ProjectSectionWrapper id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectItem key={uuidv4()} project={project} />
          ))}
        </ProjectGrid>
      </ProjectSectionWrapper>
    ) : null}
  </>
);

export default Projects;
