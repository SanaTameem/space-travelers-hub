import React from 'react';
import '../Styles/Profile.css';

function Profile() {
  return (
    <div className="myprofile">
      <h1 className="profileHeading">My Profile</h1>
      <section className="profile">
        <div className="left-myMissions">
          <h2>My Missions</h2>
        </div>
        <div className="right-myRockets">
          <h2>My Rockets</h2>
        </div>
      </section>
    </div>
  );
}

export default Profile;
