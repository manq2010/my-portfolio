import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import skills from '../../data/skillsData';

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
    <div>
      <h2>Skills</h2>
    </div>
    <SkillList>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover
        pauseOnClick
        delay={0}
        play
        direction="left"
      >
        {
            skills && (
              skills.map((skill) => (
                <SkillItem key={uuidv4()}>
                  {skill}
                </SkillItem>
              ))
            )
        }
      </Marquee>
    </SkillList>
  </SkillsWrapper>
);

export default Skills;
