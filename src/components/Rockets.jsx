import React, { useEffect } from 'react';
import '../Styles/Rockets.css';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="rockets-main-container">
      Rockets
    </div>
  );
}

export default Rockets;
