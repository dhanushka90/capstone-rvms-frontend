import React from 'react';
import '../../App.css';
import ListSensorData from '../ListSensorData';
import AccelerometerChart from '../AccelerometerChart';
import FooterSub from '../FooterSub';

function InTransit() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='custom-card-2'>
          <h2>Temparature</h2>
        </div>
        <div className='custom-card-2'>
          <h2>Route</h2>
        </div>
        <div className='custom-card-2'>
          <h2>Accelerometer and Gyroscope</h2>
          <AccelerometerChart />
        </div>
      </div>
      <div className='custom-card-1'>
        <ListSensorData />
      </div>
      <FooterSub />
    </div>
  );
}

export default InTransit;



