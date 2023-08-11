import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Dragons.css';
import { fetchDragons, reserveDragon, cancelDragon } from '../redux/dragons/dragonsSlice';

function Dragons() {
  const dispatch = useDispatch();

  const dragonsData = useSelector((state) => state.dragon.dragonsData);

  useEffect(() => {
    if (dragonsData.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch]);

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
              {/* <span className="reserved-span">Reserved</span> */}
              {dragon.reserved && (
                <span className="reserved-span">Reserved</span>
              )}
              {dragon.description}
            </p>
            {!dragon.reserved ? (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => dispatch(reserveDragon(dragon.id))}
              >
                Reserve Dragon
              </button>
            ) : (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => dispatch(cancelDragon(dragon.id))}
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

export default Dragons;
