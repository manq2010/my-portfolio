import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { testimonies } from '../../data/portfolio';
import TestimonyItem from './TestimonyItem';

const TestimonySection = styled.section`

`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    ;text-transform: uppercase;
`;

const TestimonyGrid = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
`;

const Testimony = () => (
  <TestimonySection id="testimonials">
    { testimonies && (
    <>
      <SectionTitle>What others say about my work</SectionTitle>
      <TestimonyGrid>
        {testimonies.map((testimony) => (
          <TestimonyItem key={uuidv4()} testimony={testimony} />
        ))}
      </TestimonyGrid>
    </>
    )}
  </TestimonySection>
);

export default Testimony;
