import React from 'react';
import styled from 'styled-components';
import achievementData from '../../data/achievementData';

const AchievementsWrapper = styled.section`
margin-top: 2rem;

`;

const Achievements = () => (
  <AchievementsWrapper id="achievements">
    {
        achievementData && (
        <div>
          <h1>Achievements</h1>
          <div className="-data">
            {achievementData.achievements.map((achievement) => (
              <div key={achievement.id}>
                <h4>{achievement.title}</h4>
                <p>{achievement.details}</p>
                <div>
                  {achievement.date}
                </div>
                <p>
                  {achievement.field}
                </p>
                <img src={achievement.image} alt={achievement.title} style={{ width: '300px' }} />
              </div>
            ))}
          </div>
        </div>

        )
    }

  </AchievementsWrapper>
);

export default Achievements;
