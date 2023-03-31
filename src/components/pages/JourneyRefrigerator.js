import React from 'react';
import '../../App.css';
import ListJourneyRefrigeratorData from '../ListJourneyRefrigeratorData';
import FooterSub from '../FooterSub';

function JourneyRefrigerator() {
  return (
    <div className='pageContent'>
        <div className='custom-card'>
          <ListJourneyRefrigeratorData />
        </div>
      <FooterSub />
    </div>
  );
}

export default JourneyRefrigerator;