import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Missions.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <section className="missionsPage">
      <div className="missionTable">
        <div className="column">
          <h3>Missions</h3>
          {missions.map((mission) => (
            <div key={mission.id} className="cell">
              {mission.mission_name}
            </div>
          ))}
        </div>
        <div className="column">
          <h3>Descriptions</h3>
          {missions.map((mission) => (
            <div key={mission.id} className="cell">
              {mission.description}
            </div>
          ))}
        </div>
        <div className="column">
          <h3>Status</h3>

          {missions.map((mission) => (
            <div key={mission.id} className="cell">
              {mission.status}
            </div>
          ))}
        </div>
        <div className="column">
          <h3>Status</h3>
          {missions.map((mission) => (
            <div key={mission.id} className="cell">
              {mission.status}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
