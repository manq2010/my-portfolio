import React from 'react';
import achievementData from '../../data/achievementData';

const Achievements = () => (
  <div id="achievements">
    {
        achievementData && (
        <div>
          <h2>Achievements</h2>
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

  </div>
);

export default Achievements;
