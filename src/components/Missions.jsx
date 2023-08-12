import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMissions,
  joinMission,
  unjoinMission,
} from "../redux/missions/missionsSlice";
import "../Styles/Missions.css";

const Mission = () => {
  const missions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <section className="missionsPage">
      <div className="missionTable">
        <div className="column">
          <h3>Missions</h3>
          {missions.length > 0 ? (
            missions.map((mission) => (
              <div key={mission.id} className="cell">
                {mission.mission_name}
              </div>
            ))
          ) : (
            <div>No missions available</div>
          )}
        </div>

        <div className="column">
          <h3>Descriptions</h3>
          {missions.length > 0 ? (
            missions.map((mission) => (
              <div key={mission.id} className="cell">
                {mission.description}
              </div>
            ))
          ) : (
            <div>No descriptions available</div>
          )}
        </div>

        <div className="column">
          <h3>Status</h3>
          {missions.map((mission) => (
            <div key={mission.mission_id} className="cell">
              {mission.reserved ? (
                <span className="activeMemberBadge">Active Member</span>
              ) : (
                <span>NOT A MEMBER</span>
              )}
            </div>
          ))}
        </div>

        <div className="column">
          <h3>Actions</h3>
          {missions.map((mission) => (
            <div key={mission.id} className="cell">
              {mission.reserved ? (
                <button
                  type="submit"
                  onClick={() => dispatch(unjoinMission(mission.id))}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => dispatch(joinMission(mission.id))}
                >
                  Join Mission
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
