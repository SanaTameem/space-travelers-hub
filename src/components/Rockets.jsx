import React, { useEffect } from 'react';
import '../Styles/Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rocket.rocketsData);
  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);

  return (
    <div className="rockets-main-container">
      {rocketData.map((rocket) => (
        <div className="rocket-container" key={rocket.id} id={rocket.id}>
          <div className="rocket-img-div">
            <img src={rocket.flickr_images} alt={rocket.type} className="rocket-img" />
          </div>
          <div className="rocket-data">
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-info">
              {rocket.reserved && (
                <span className="reserved-span">Reserved</span>
              )}
              {rocket.description}
            </p>
            {!rocket.reserved ? (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            ) : (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => dispatch(cancelRocket(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
