import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../Styles/Missions.css';

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <section className="missionsPage">
      <h1>Missions</h1>
    </section>
  );
};

export default Mission;
