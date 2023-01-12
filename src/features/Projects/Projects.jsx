import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import projects from '../../data/projectsData';
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

const ProjectItem = styled.li`
position: relative;
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(12, 1fr);
align-items: center;

@media (max-width: 768px) {
  ${({ theme }) => theme.mixins.boxShadow};
}

&:not(:last-of-type) {
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
}

&:nth-of-type(odd) {
  .project-content {
    grid-column: 7 / -1;
    text-align: right;

    @media (max-width: 1080px) {
      grid-column: 5 / -1;
    }
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      text-align: left;
    }
    @media (max-width: 480px) {
      padding: 25px 25px 20px;
    }
  }
  .project-tech-list {
    justify-content: flex-end;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }

    li {
      margin: 0 0 5px 20px;

      @media (max-width: 768px) {
        margin: 0 10px 5px 0;
      }
    }
  }
  .project-links {
    justify-content: flex-end;
    margin-left: 0;
    margin-right: -10px;

    @media (max-width: 768px) {
      justify-content: flex-start;
      margin-left: -10px;
      margin-right: 0;
    }
  }
  .project-image {
    grid-column: 1 / 8;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
  }
}

.project-content {
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  @media (max-width: 1080px) {
    grid-column: 1 / 9;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    // z-index: 5;
  }

  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }
}

.project-overline {
  margin: 10px 0;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
}

.project-title {
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);

  @media (min-width: 768px) {
    margin: 0 0 20px;
  }

  @media (max-width: 768px) {
    color: var(--white);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
}

.project-description {
  ${({ theme }) => theme.mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-lg);

  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: transparent;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  strong {
    color: var(--white);
    font-weight: normal;
  }
}

.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  // position: relative;
  z-index: 2;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    margin: 0 20px 5px 0;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    li {
      margin: 0 10px 5px 0;
      color: var(--lightest-slate);
    }
  }
}

.project-links {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--lightest-slate);

  a {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 10px;

    &.external {
      svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .cta {
    ${({ theme }) => theme.mixins.smallButton};
    margin: 10px;
  }
}

.project-image {
  ${({ theme }) => theme.mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    // height: 100%;
    opacity: 0.25;
    // object-fit: cover;
    width: 100%;
    height: auto;
  }

  a {
    width: 100%;
    height: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  }

  .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    // display: none;

    // @media (max-width: 768px) {
    //   object-fit: cover;
    //   width: auto;
    //   height: 100%;
    //   // filter: grayscale(10%) contrast(1) brightness(90%);
    // }
  }
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
  // const {name, description, stack, sourceCode, livePreview, image} = projects;
  return (
    <ProjectWrapper id="projects" ref={revealTitle}>
      <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>

      <ProjectsGrid>

        {
        projects
          && projects.map((project) => (
            <ProjectItem
              key={project.id}
              // eslint-disable-next-line no-return-assign
              ref={(el) => (revealProjects.current[project.id] = el)}
            >
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>

                  <h3 className="project-title">
                    <a href={project.livePreview}>{project.name}</a>
                  </h3>

                  <div
                    className="project-description"
                  >
                    {project.description}
                  </div>

                  {project.stack && (
                  <ul className="project-tech-list">
                    {project.stack.map((tech) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <li key={uuidv4()}>{tech}</li>
                    ))}
                  </ul>
                  )}

                  <div className="project-links">
                    <Link
                      to="/projects"
                      aria-label="More Details Projects Link"
                      className="cta"
                      onClick={handleScroll}
                    >
                      See More
                    </Link>
                    {project.sourceCode && (
                    <a href={project.sourceCode} aria-label="GitHub Link">
                      {/* <Icon name="GitHub" /> */}
                      Github
                    </a>
                    )}
                    {project.livePreview && (
                    <a href={project.livePreview} aria-label="External Link" className="external">
                      {/* <Icon name="External" /> */}
                      LiveLink
                    </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-image">
                <a href={project.livePreview || (project.sourceCode || '#')}>
                  <img src={project.image} alt={project.name} className="img" />
                </a>
              </div>
            </ProjectItem>
          ))
}
      </ProjectsGrid>
    </ProjectWrapper>
  );
};

export default Projects;
