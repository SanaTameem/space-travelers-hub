import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Dragons.css';
import { fetchDragons, reserveDragon } from '../redux/dragons/dragonsSlice';

function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const dragonsData = useSelector((state) => state.dragon.dragonsData);

  // const isDragonReserved = (dragonId) => {
  //   const dragon = dragonsData.find((dragon) => dragon.id === dragonId);
  //   return dragon.reserved;
  // };

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
              {dragon.description}
            </p>
            <button type="button" className="reserve-btn" onClick={() => dispatch(reserveDragon(dragon.id))}>
              Reserve dragon
              {/* {isDragonReserved(dragon.id) ? 'Reserved' : 'Reserve dragon'} */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dragons;
