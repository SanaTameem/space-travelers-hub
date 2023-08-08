import React from 'react';
import '../Styles/Rockets.css';
import { useSelector } from 'react-redux';

function Rockets() {
  const rocketData = useSelector((state) => state.rocket.rockets);
  return (
    <div className="rockets-main-container">
      {rocketData.map((rocket) => (
        <div className="rocket-container" key={rocket.id}>
          <div className="rocket-img-div">
            <img src={rocket.flickr_images} alt="rocket-img" className="rocket-img" />
          </div>
          <div className="rocket-data">
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-info">
              <span className="reserved-span">Reserved</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quidem eos consequatur necessitatibus explicabo, non
              dignissimos excepturi voluptate veritatis quod esse quos
              natus perferendis saepe inventore at. Excepturi asperiores
              neque quasi?
            </p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
