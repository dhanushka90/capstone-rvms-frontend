import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Welcome to Remote Vaccine Management System</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              imgAlt='Dashboard 1'
              imgSrc='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;Home_16813301865680&#47;Home-Status&#47;1.png'
              imgStyle={{ border: 'none' }}
              text='All Active Temparature Devices'
              label='Chart-1'
              path='/home'
            />
            <CardItem
              imgAlt='Dashboard 2'
              imgSrc='https://public.tableau.com/static/images/Ho/Home-Temp/Home-Temp6/1.png'
              imgStyle={{ border: 'none' }}
              text='Total Number of Temparature Excurssions'
              label='Chart-2'
              path='/home'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              imgAlt='Dashboard 3'
              imgSrc='https://public.tableau.com/static/images/Ho/Home-Journey/Home-Status5/1_rss.png'

              imgStyle={{ border: 'none' }}
              text='Total Number of Journeys'
              label='Chart-3'
              path='/home'
            />
            <CardItem
              imgAlt='Dashboard 4'
              imgSrc='https://public.tableau.com/static/images/Ho/Home-Ref/Home-Ref/1_rss.png'
              imgStyle={{ border: 'none' }}
              text='Total Number of Refrigerators'
              label='Chart-4'
              path='/home'
            />
            <CardItem
              imgAlt='Dashboard 5'
              imgSrc='https://public.tableau.com/static/images/Ho/Home-Users/Home-Users/1_rss.png'
              imgStyle={{ border: 'none' }}
              text='Total Number of Users'
              label='Chart-5'
              path='/home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
