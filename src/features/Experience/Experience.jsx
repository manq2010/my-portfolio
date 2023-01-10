import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { experiencies } from '../../data/portfolio';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = styled.section`
margin-top: 2rem;
// display: flex;
`;

const SectionTitle = styled.h1`

`;

const ExperienceGrid = styled.div`

`;

const Experience = () => (
  <ExperienceSection>
    <SectionTitle>Where I&apos;ve Worked</SectionTitle>
    <div id="experience">
      { experiencies && (
      <ExperienceGrid>
        {experiencies.map((experience) => (
          <ExperienceItem key={uuidv4()} experience={experience} />
        ))}
      </ExperienceGrid>
      )}
    </div>
  </ExperienceSection>
);

export default Experience;
