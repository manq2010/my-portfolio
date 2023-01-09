import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CodeIcon from '@mui/icons-material/Code';

const ProjectGridItem = styled.div`
    padding: 2em;
    margin: 0 auto;
    text-align: center;
    box-shadow: var(--shadow);
    transition: transform 0.2s linear;
    margin-left: 0.5em;

    &:hover {
        transform: translateY(-7px);
      }
`;

const ProjectStack = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.2em 0;
`;

const ProjectStackItem = styled.li`
    margin: 0.5em;
    font-weight: 500;
    font-size: 0.8rem;
    color: red;
`;

const ProjectDescription = styled.p`
    margin-top: 1em;
`;

const ProjectItem = ({ project }) => (
  <ProjectGridItem>
    <div>
      <h2>{project.name}</h2>
      <img src={project.image ? project.image : ''} alt={project.name} />

      {
        project.livePreview && (
        <a href={project.livePreview} target="_blank" rel="noreferrer">
          <PlayCircleIcon />
        </a>

        )
        }
      {
        project.sourceCode && (
        <a href={project.sourceCode} target="_blank" rel="noreferrer">
          <CodeIcon />
        </a>
        )
        }
    </div>
    <ProjectDescription>{project.description}</ProjectDescription>
    <div>
      {
        project.stack && (
        <ProjectStack>
          {project.stack.map((item) => (
            <ProjectStackItem key={uuidv4()}>
              {item}
            </ProjectStackItem>
          ))}
        </ProjectStack>
        )
      }
    </div>
  </ProjectGridItem>
);

ProjectItem.propTypes = {
  project: PropTypes.node.isRequired,
};

export default ProjectItem;
