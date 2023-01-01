import React from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { experiencies } from '../../data/portfolio';
import ExperienceItem from './ExperienceItem';

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

const Experience = () => {
  const id = uniqid();
  return (
    <div>
      { experiencies && (
        <>
          <SectionTitle>My Experience</SectionTitle>
          <ExperienceGrid>
            {experiencies.map((experience) => (
              <ExperienceItem key={id} experience={experience} />
            ))}
          </ExperienceGrid>
        </>
      )}
    </div>
  );
};

export default Experience;
