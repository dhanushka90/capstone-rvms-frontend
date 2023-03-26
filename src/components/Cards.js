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
                    text='All Active Temparature Devices'
                    label='Chart-1'
                    path='/home'
                />
                <CardItem 
                    text='Total Number of Journeys '
                    label='Chart-2'
                    path='/home'
                />
                </ul> 
                <ul className='cards__items'>
                <CardItem 
                    text='Total Number of Warehouses'
                    label='Chart-3'
                    path='/home'
                />
                <CardItem 
                    text='Total Number of Users'
                    label='Chart-4'
                    path='/home'
                />
                <CardItem 
                    text='Total Number Temperature Excursions'
                    label='Chart-5'
                    path='/home'
                />
                </ul> 
            </div>
        </div>
    </div>
  )
}

export default Cards;