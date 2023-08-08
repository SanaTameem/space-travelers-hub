import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="link" to="/">Rockets</Link>
        <Link className="link" to="/missions">Missions</Link>
        <Link className="link" to="/dragons">Dragons</Link>
        <Link className="link border" to="/profile">My Profile</Link>
      </div>
    </nav>
  </>
);
export default Header;
