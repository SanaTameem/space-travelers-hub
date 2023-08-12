import React from 'react';
import '../Styles/Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { cancelRocket } from '../redux/rockets/rocketsSlice';
import { cancelDragon } from '../redux/dragons/dragonsSlice';
import { unjoinMission } from '../redux/missions/missionsSlice';

function Profile() {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rocket.rocketsData);
  const reservedRockets = rocketData.filter(
    (rocket) => rocket.reserved === true,
  );

  const dragonData = useSelector((state) => state.dragon.dragonsData);
  const reservedDragons = dragonData.filter(
    (dragon) => dragon.reserved === true,
  );

  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className="profile">
      <div className="profile">
        {/* <div>
          <h2>My Missions</h2>
          <table>
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.mission_name}</td>
                  <td>
                    Status:{" "}
                    {mission.reserved ? "Active Member" : "NOT A MEMBER"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <div className="missions-column">
          <h2>My Missions</h2>
          {reservedMissions.length === 0 && <p>Reserve a mission</p>}
          <table className="missions-table">
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.id} className="rocket-row">
                  <td className="mission-name">{mission.mission_name}</td>
                  <td>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => dispatch(unjoinMission(mission.id))}
                    >
                      Cancel Reservation
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="read-more"
                      onClick={() => window.open(mission.wikipedia)}
                    >
                      Read More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rockets-column">
          <h2>My Rockets</h2>
          {reservedRockets.length === 0 && <p>Reserve a rocket</p>}
          <table className="rockets-table">
            <tbody>
              {reservedRockets.map((rocket) => (
                <tr key={rocket.id} className="rocket-row">
                  <td className="reserved-name">{rocket.name}</td>
                  <td>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => dispatch(cancelRocket(rocket.id))}
                    >
                      Cancel Reservation
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="read-more"
                      onClick={() => window.open(rocket.readMore)}
                    >
                      Read More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2>My Dragons</h2>
          {reservedDragons.length === 0 && <p>Reserve a dragon</p>}
          <table className="dragons-table">
            <tbody>
              {reservedDragons.map((dragon) => (
                <tr key={dragon.id} className="dragon-row">
                  <td className="reserved-name">{dragon.name}</td>
                  <td>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => dispatch(cancelDragon(dragon.id))}
                    >
                      Cancel Reservation
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="read-more"
                      onClick={() => window.open(dragon.wikipedia)}
                    >
                      Read More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
