import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { skills } from '../../data/portfolio';

const SkillsWrapper = styled.section`
margin-top: 5em;
`;

const SkillList = styled.ul`
max-width: 450px;
width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const SkillItem = styled.li`
margin: 0.5rem;
`;

const Skills = () => (
  <SkillsWrapper id="skills">
    <h2>Skills</h2>
    <SkillList>
      {
            skills && (
              skills.map((skill) => (
                <SkillItem key={uuidv4()}>
                  {skill}
                </SkillItem>
              ))
            )
        }
    </SkillList>
  </SkillsWrapper>
);

export default Skills;
