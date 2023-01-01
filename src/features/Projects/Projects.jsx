import React from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { projects } from '../../data/portfolio';
import ProjectItem from './ProjectItem';

const ProjectSectionWrapper = styled.section`
    margin-top: 5em;
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 1em;
    ;text-transform: uppercase;
`;

const ProjectGrid = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 2em;
`;

const Projects = () => {
  const id = uniqid();

  return (

    <>
      { projects.length ? (
        <ProjectSectionWrapper id="projects">
          <SectionTitle>Projects</SectionTitle>
          <ProjectGrid className="projects__grid">
            {projects.map((project) => (
              <ProjectItem key={id} project={project} />
            ))}
          </ProjectGrid>
        </ProjectSectionWrapper>
      ) : null}
    </>
  );
};

export default Projects;
