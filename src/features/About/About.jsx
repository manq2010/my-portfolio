import React from 'react';
import styled from 'styled-components';
import { about } from '../../data/portfolio';

const Button = styled.button`
    display: block;
    cursor: pointer;
    padding: 0.8em 1.4em;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;
    transition: transform 0.2s ease-in-out;
    
    color: #2978b5;
    border: 2px solid #2978b5;
    position: relative;
    overflow: hidden;
    z-index: 1;

 
    &::before {
        content: '';
        position: absolute;
        background-color: #2978b5;
        right: 100%;
        bottom: 0;
        left: 0;
        top: 0;
        z-index: -1;
        transition: right 0.2s ease-in-out;
      }

      &:hover::before,,
      &:focus::before, {
          color: #23283e;
      }
  
`;

const AboutWrapper = styled.section`

`;

const About = () => {
  const {
    name, role, description, button,
  } = about;
  return (
    <AboutWrapper>
      { name && (
        <div>
          <h3>
            HI, MY NAME IS
          </h3>
          <h1>
            {name}
            .
          </h1>

        </div>

      )}
      { role && (
        <div>
          <h1>
            I am a
            {' '}
            {role}
            .
          </h1>
        </div>

      )}

      { description && (
        <div>
          <h3>
            {description}
          </h3>
        </div>
      )}

      { button && (
      <Button type="button">
        <a
          href={about.social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {button}
        </a>
      </Button>
      )}
    </AboutWrapper>
  );
};

export default About;
