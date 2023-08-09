import React, { useEffect } from 'react';
import '../Styles/Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rocketData = useSelector((state) => state.rocket.rocketsData);
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
              {/* <span className="reserved-span">Reserved</span> */}
              {rocket.description}
            </p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
