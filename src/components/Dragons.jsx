import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../Styles/Dragons.css';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div className="dragons-main-container">
      Dragons
    </div>
  );
}

export default Dragons;
