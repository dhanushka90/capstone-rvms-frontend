import React from 'react';
import '../../App.css';
import ListSensorData from '../ListSensorData';
import FooterSub from '../FooterSub';

function InTransit() {
  return (
    <div>
        <div className='custom-card'>
          <ListSensorData />
        </div>
      <FooterSub />
    </div>
  );
}

export default InTransit;


