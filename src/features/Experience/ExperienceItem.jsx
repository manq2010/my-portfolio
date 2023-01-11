// /* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { PropTypes } from 'prop-types';

const ExperienceGridItem = styled.div`

`;

const ExperienceDetail = styled.li`

`;

const JobDescription = styled.p`

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
