import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/planet (1).png';
import '../Styles/Header.css';

const Header = () => (
  <>
    <nav className="header">
      <div className="logoTitle">
        <img src={logo} alt="planet" className="navImg" />
        <h1 className="navHeading">Space Travelers&apos; Hub</h1>
      </div>
      <div className="linkContainer">
        <NavLink className="link" to="/" activeclassname="active">Rockets</NavLink>
        <NavLink className="link" to="/missions" activeclassname="active">Missions</NavLink>
        <NavLink className="link" to="/dragons" activeclassname="active">Dragons</NavLink>
        <NavLink className="link border" to="/profile" activeclassname="active">My Profile</NavLink>
      </div>
    </nav>
  </>
);
export default Header;
