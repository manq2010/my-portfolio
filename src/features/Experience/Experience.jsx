import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { experiencies } from '../../data/portfolio';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = styled.section`

`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    ;text-transform: uppercase;
`;

const ExperienceGrid = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
`;

const Experience = () => (
  <div id="experience">
    { experiencies && (
    <ExperienceSection id="experience">
      <SectionTitle>My Experience</SectionTitle>
      <ExperienceGrid>
        {experiencies.map((experience) => (
          <ExperienceItem key={uuidv4()} experience={experience} />
        ))}
      </ExperienceGrid>
    </ExperienceSection>
    )}
  </div>
);

export default Experience;
