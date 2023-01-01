import React from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { testimonies } from '../../data/portfolio';
import TestimonyItem from './TestimonyItem';

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

const Testimony = () => {
  const id = uniqid();
  return (
    <div>
      { testimonies && (
        <>
          <SectionTitle>What others say about my work</SectionTitle>
          <TestimonyGrid>
            {testimonies.map((testimony) => (
              <TestimonyItem key={id} testimony={testimony} />
            ))}
          </TestimonyGrid>
        </>
      )}
    </div>
  );
};

export default Testimony;
