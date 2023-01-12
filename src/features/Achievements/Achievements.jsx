import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import achievementData from '../../data/achievementData';
import { srConfig } from '../../utils/config';
import sr from '../../utils/sr';

const AchievementsWrapper = styled.section`
margin-top: 2rem;

`;

const Achievements = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <AchievementsWrapper id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">My Achievements</h2>
      {
        achievementData && (
        <div>
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
};

export default Achievements;
