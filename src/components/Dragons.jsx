import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Dragons.css';

function Dragons() {
  const dragonsData = useSelector((state) => state.dragon.dragons);
  return (
    <div>
      {dragonsData.map((dragon) => (
        <div className="dragon-container" key={dragon.id}>
          <div className="dragon-img-div">
            <img src={dragon.flickr_images} alt="dragon-img" className="dragon-img" />
          </div>
          <div className="dragon-data">
            <h2 className="dragon-title">{dragon.name}</h2>
            <p className="dragon-info">
              <span className="reserved-span">Reserved</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quidem eos consequatur necessitatibus explicabo, non
              dignissimos excepturi voluptate veritatis quod esse quos
              natus perferendis saepe inventore at. Excepturi asperiores
              neque quasi?
            </p>
            <button type="button" className="reserve-btn">Reserve Dragon</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dragons;
