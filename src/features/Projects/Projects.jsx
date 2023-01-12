import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import projects from '../../data/projectsData';
import ProjectItem from './ProjectItem';
import sr from '../../utils/sr';
import { srConfig } from '../../utils/config';

const ProjectWrapper = styled.section`
`;

const ProjectsGrid = styled.ul`
${({ theme }) => theme.mixins.resetList};

a {
  position: relative;
  z-index: 1;
}
`;

const Projects = () => {


  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ProjectWrapper id="projects">
      <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>

      <ProjectsGrid>
        { projects.length && 
          projects.slice(0, 2).map({name, description, stack, sourceCode, livePreview, image}) => (
            
          )
    
    }
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
