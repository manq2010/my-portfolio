import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

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

const TestimonialItem = ({ testimony }) => (
  <TestimonyGridItem>
    <TestimonyDetail>
      <div>
        <img src={testimony.image} alt={testimony.name} />
      </div>
      <div>
        <TestimonyDescription>
          {testimony.text}
        </TestimonyDescription>
        <h4>
          {testimony.name}
        </h4>
        <h5>
          {testimony.title}
        </h5>
      </div>
      <div>
        {testimony.logo}
      </div>
    </TestimonyDetail>
  </TestimonyGridItem>
);

TestimonialItem.propTypes = {
  testimony: PropTypes.node.isRequired,
};

export default TestimonialItem;
