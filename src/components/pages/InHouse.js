import React from 'react';
import '../../App.css';
import ListInhouseRefrigerator from '../ListInhouseRefrigerator';
import FooterSub from '../FooterSub';

function InHouse() {
  return (
    <div className='pageContent'>
        <div className='custom-card'>
          <ListInhouseRefrigerator />
        </div>
      <FooterSub />
    </div>
  );
}

export default InHouse;