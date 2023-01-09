// /* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { PropTypes } from 'prop-types';

const ExperienceGridItem = styled.div`
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

const ExperienceDetail = styled.li`
    margin: 0.5em;
    font-weight: 500;
    font-size: 0.8rem;
    // color: red;
`;

const JobDescription = styled.p`
    margin-top: 1em;
`;

const ExperienceItem = ({ experience }) => (
  <ExperienceGridItem>
    <ExperienceDetail>
      <h3>
        {experience.startDate}
        {' '}
        <ArrowCircleRightIcon />
        {' '}
        { experience.endDate ? (experience.endDate) : ('CURRENT')}

      </h3>
      <h2>{experience.role}</h2>
      <JobDescription>
        {experience.jobDescription}
      </JobDescription>
    </ExperienceDetail>
  </ExperienceGridItem>
);

ExperienceItem.propTypes = {
  experience: PropTypes.node.isRequired,
};

export default ExperienceItem;
