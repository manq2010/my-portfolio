import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import projects from '../../data/projectsData';
import ProjectItem from './ProjectItem';

const ProjectWrapper = styled.section`
display: flex;
flex-direction: column;

`;

const ProjectSectionWrapper = styled.div`
display: flex;
margin-top: 2rem;

`;

const SectionTitle = styled.h1`
  
`;

const ProjectGrid = styled.div`

`;

const Projects = () => {
  // const projectRef = useRef();

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ProjectWrapper id="projects">
      <SectionTitle>Some Things I&apos;ve Built</SectionTitle>
      <div>
        { projects.length && (
        <ProjectSectionWrapper id="projects">
          <ProjectGrid>
            {projects.slice(0, 2).map((project) => (
              <ProjectItem key={uuidv4()} project={project} />
            ))}
          </ProjectGrid>
        </ProjectSectionWrapper>
        )}
      </div>
      <div>
        {
        projects.length > 2 && (
          <div>
            <Link to="/projects">
              <button
                type="button"
                onClick={handleScroll}
              >
                View All
                <ChevronRightIcon />
              </button>
            </Link>
          </div>
        )
        }
      </div>
    </ProjectWrapper>
  );
};

export default Projects;
