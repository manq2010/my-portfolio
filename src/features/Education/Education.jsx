import React from 'react';
import styled from 'styled-components';
import educationData from '../../data/educationData';

const EducationWrapper = styled.section`
margin-top: 2rem;
`;

const Education = () => (
  <EducationWrapper id="education">
    <h2 className="numbered-heading">Where I acquired knowledge</h2>
    {
        educationData && (
        <div>
          <h1>Education</h1>
          <div className="education-data">
            {educationData.map((education) => (
              <div key={education.id}>
                <h4>{education.institution}</h4>
                <div>{education.course}</div>
                <div>
                  {education.startYear}
                  {' '}
                  -
                  {' '}
                  { education.endYear ? (
                    <>
                      {education.endYear}
                    </>
                  ) : ('Current')}
                </div>
              </div>
            ))}
          </div>
        </div>
        )

      }
  </EducationWrapper>
);

export default Education;
