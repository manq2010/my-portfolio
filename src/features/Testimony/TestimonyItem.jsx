/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const TestimonyGridItem = styled.div`
    padding: 2em;
    margin: 0 auto;
    text-align: center;
    box-shadow: var(--shadow);
    transition: transform 0.2s linear;
    margin-left: 0.5em;

    &:hover {
        transform: translateY(-7px);
      }
`;

const TestimonyDetail = styled.li`
    margin: 0.5em;
    font-weight: 500;
    font-size: 0.8rem;
    // color: red;
`;

const TestimonyDescription = styled.p`
    margin-top: 1em;
`;

const TestimonyItem = ({ testimony }) => (
  <TestimonyGridItem>
    <TestimonyDetail>
      <TestimonyDescription>
        {testimony.testimonial}
      </TestimonyDescription>
      <div>
        <div>
          <img src="" alt={testimony.name} />
        </div>
        <div>
          {testimony.name}
          <br />
          {testimony.role}
          @
          {testimony.company}
        </div>
      </div>
      <div>
        {testimony.logo}
      </div>
    </TestimonyDetail>
  </TestimonyGridItem>
);

export default TestimonyItem;
