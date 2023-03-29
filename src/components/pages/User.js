import React from 'react';
import '../../App.css';
import ListUserData from '../ListUserData';
import FooterSub from '../FooterSub';

function User() {
  return (
    <div>
        <div className='custom-card'>
          <ListUserData />
        </div>
      <FooterSub />
    </div>
  );
}

export default User;