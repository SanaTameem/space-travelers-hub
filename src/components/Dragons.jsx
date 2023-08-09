import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Dragons.css';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const dragonsData = useSelector((state) => state.dragon.dragonsData);

  return (
    <div className="dragons-main-container">
      {dragonsData.map((dragon) => (
        <div className="dragon-container" key={dragon.id}>
          <div className="dragon-img-div">
            <img src={dragon.flickr_images} alt={dragon.type} className="dragon-img" />
          </div>
          <div className="dragon-data">
            <h2 className="dragon-title">{dragon.name}</h2>
            <p className="dragon-info">
              <span className="reserved-span">Reserved</span>
              {dragon.description}
            </p>
            <button type="button" className="reserve-btn">Reserve Dragon</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dragons;
