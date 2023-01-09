import React from 'react';
import educationData from '../../data/educationData';

const Education = () => (
  <div>
    {
        educationData && (
        <div>
          <h2>Education</h2>
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
                  {education.endYear}
                </div>
              </div>
            ))}
          </div>
        </div>

        )

      }
  </div>
);

export default Education;
