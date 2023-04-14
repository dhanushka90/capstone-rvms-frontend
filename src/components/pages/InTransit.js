import React from 'react';
import '../../App.css';
import ListIntransitJourney from '../ListIntransitJourney';
import FooterSub from '../FooterSub';

function InTransit() {
  return (
    <div className='pageContent'>
        <div className='custom-card'>
          <ListIntransitJourney />
        </div>
      <FooterSub />
    </div>
  );
}

export default InTransit;