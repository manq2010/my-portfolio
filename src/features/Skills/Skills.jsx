import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import skills from '../../data/skillsData';
import skillsImage from '../../utils/skillsImage';

const SkillsWrapper = styled.section`

`;

const SkillList = styled.ul`

`;

const SkillItem = styled.div`

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
                  <img src={skillsImage(skill)} alt={skill} style={{ height: '100px' }} />
                  <h4>
                    {skill}
                  </h4>
                </SkillItem>
              ))
            )
        }
      </Marquee>
    </SkillList>
  </SkillsWrapper>
);

export default Skills;
