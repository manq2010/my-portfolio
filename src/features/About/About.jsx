import React from 'react';
import styled from 'styled-components';
import { about } from '../../data/portfolio';

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
      <button type="button">
        {button}
      </button>
      )}
    </AboutWrapper>
  );
};

export default About;
