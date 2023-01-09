import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { experiencies } from '../../data/portfolio';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = styled.section`

`;

const SectionTitle = styled.h2`

`;

const ExperienceGrid = styled.div`

`;

const Experience = () => (
  <div id="experience">
    { experiencies && (
    <ExperienceSection>
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
