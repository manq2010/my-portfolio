import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import projects from '../../data/projectsData';
import sr from '../../utils/sr';
import { srConfig } from '../../utils/config';

const ProjectListWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;

h2 {
  font-size: clamp(24px, 5vw, var(--fz-heading));
}

.archive-link {
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  &:after {
    bottom: 0.1em;
  }
}

.projects-grid {
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  margin-top: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

.more-button {
  ${({ theme }) => theme.mixins.button};
  margin: 80px auto 0;
}
`;

const ProjectItem = styled.li`
position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

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
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

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

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const ProjectList = () => {
  const [search, setSearch] = useState('');
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const searchedProjects = projects.filter((project) => {
    const content = project.name + project.description + project.stack;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  const projectInner = (project) => (
    <div className="project-inner">
      <header>
        <div className="project-top">
          <div className="folder">
            Folder
          </div>
          <div className="project-links">
            {project.sourceCode && (
            <a href={project.sourceCode} aria-label="GitHub Link" target="_blank" rel="noreferrer">
              Github
            </a>
            )}
            {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label="External Link"
              className="external"
              target="_blank"
              rel="noreferrer"
            >
              livePreview
            </a>
            )}
          </div>
        </div>

        <h3 className="project-title">
          <a href={project.livePreview} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        </h3>
        <div className="project-description">{project.description}</div>
      </header>

      <footer>
        {project.stack && (
          <ul className="project-tech-list">
            {project.stack.map((tech) => (
              <li key={uuidv4()}>{tech}</li>
            ))}
          </ul>
        )}
      </footer>
    </div>
  );

  return (
    <ProjectListWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TransitionGroup component={null}>
          <CSSTransition>
            <input
              style={{
                border: '1px solid #fff',
                borderRadius: '5px',
                padding: '10px',
                textAlign: 'start',
                fontSize: '1rem',
              }}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={() => setSearch('')}
              placeholder="Search..."
            />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <ul className="projects-grid">
        <TransitionGroup component={null}>
          {searchedProjects
              && searchedProjects.map((project) => (
                <CSSTransition
                  key={project.id}
                  classNames="fadeup"
                  timeout={project.id * 300}
                  exit={false}
                >
                  <ProjectItem
                    key={project.id}
                    // eslint-disable-next-line no-return-assign
                    ref={(el) => (revealProjects.current[project.id] = el)}
                    style={{
                      transitionDelay: `${project.id * 100}ms`,
                    }}
                  >
                    {projectInner(project)}
                  </ProjectItem>
                </CSSTransition>
              ))}
        </TransitionGroup>
      </ul>
    </ProjectListWrapper>
  );
};

export default ProjectList;
