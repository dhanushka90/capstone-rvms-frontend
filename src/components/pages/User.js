import React from 'react';
import '../../App.css';
import ListUserData from '../ListUserData';
import FooterSub from '../FooterSub';

function User() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="custom-card">
          <ListUserData />
        </div>
      </div>
      <FooterSub />
    </div>
  );
}



export default User;