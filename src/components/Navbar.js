import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import JourneyRefrigeratorService from '../services/JourneyRefrigeratorService';

const SENSOR_API_BASE_URL = "http://localhost:3000/api/v1/allSensorData";
// const SENSOR_API_BASE_URL = "http://3.97.194.206:30080/api/v1/allSensorData"

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const lastRecordedTime = useRef(new Map());
  const [journeyRefrigerators, setJourneyRefrigerators] = useState(null);
  useInterval(async () => {
    if (!journeyRefrigerators) {
      return;
    }

    try {
      const response = await fetch(SENSOR_API_BASE_URL);
      if (!response.ok) {
        throw new Error("Error while fetching the sensor data!");
      }
      const data = await response.json();
      const jrsMap = {};

      for (const sensorData of data) {
        const { jrId, temparature, timeStamp } = sensorData;
        if (!(jrId && temparature && timeStamp)) {
          console.log(`tawukanna ko yako data ? jrId = ${jrId} temparature = ${temparature} timeStamp = ${timeStamp}`);
          continue;
        }

        if (jrsMap[jrId]) {
          jrsMap[jrId].push({ jrId, temparature: parseFloat(temparature), timeStamp: parseInt(timeStamp) })
        } else {
          jrsMap[jrId] = [{ jrId, temparature: parseFloat(temparature), timeStamp: parseInt(timeStamp) }]
        }
      }

      for (const [jrId, jrnyItems] of Object.entries(jrsMap)) {
        jrsMap[jrId] = jrnyItems.sort((a, b) => {
          return a.timeStamp - b.timeStamp;
        }).pop();
      }

      for (const [jrId, jrnyItems] of Object.entries(jrsMap)) {
        const { temparature, timeStamp } = jrnyItems;
        const currentLastTime = lastRecordedTime.current.get(jrId);
        lastRecordedTime.current.set(jrId, timeStamp);
        const thisJrConfig = journeyRefrigerators.get(jrId);
        if (!thisJrConfig) {
          console.log(`Jr not found ${jrId}`);
          continue;
        }
        const { tempHigh, tempLow } = journeyRefrigerators.get(jrId);

        if ((timeStamp > currentLastTime) /*|| !currentLastTime*/) {
          if (temparature >= tempHigh) {
            toast(`Journey ${jrId} High Temperature ${temparature}C Excursion`, {
              style: { background: '#ffd891', minWidth: '200px' },
              icon: (
                <span
                  style={{
                    fontSize: '21px',
                    color: '#c17e03',
                    fontWeight: 'bold',
                  }}
                >
                  &#9888;
                </span>
              ),
            })
          } else if (temparature <= tempLow) {
            toast(`Journey ${jrId} Low Temperature ${temparature}C Excursion`, {
              style: { background: '#ffd891', minWidth: '200px' },
              icon: (
                <span
                  style={{
                    fontSize: '21px',
                    color: '#c17e03',
                    fontWeight: 'bold',
                  }}
                >
                  &#9888;
                </span>
              ),
            })
          }
        } else {
          console.log('Old record');
        }
      }


    } catch (error) {
      console.error("Error while fetching the sensor data!");
      console.error(error)
    }
  }, 1000)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    JourneyRefrigeratorService.getJourneyRefrigerators().then((res) => {
      const jrTempMap = new Map();

      for (const { jrId, tempHigh, tempLow } of res.data) {
        jrTempMap.set(`${jrId}`, { tempHigh: parseFloat(tempHigh), tempLow: parseFloat(tempLow) });
      }
      setJourneyRefrigerators(jrTempMap);
    });
  }, []);


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className='fas fa-syringe' /> RVMS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/intransit' className='nav-links' onClick={closeMobileMenu}>
                In-Transit
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/inhouse' className='nav-links' onClick={closeMobileMenu}>
                In-House
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/journeyRefrigerator'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Journey / Refrigerator
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
                User
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          <div className='navbar-icons '>
            <Link to='/notifications' className='icon-navbar'>
              <i style={{ marginLeft: "250px", color: "white", fontSize: "2rem" }} className='fas fa-bell'></i>
            </Link>
            <Link to='/help' className='icon-navbar'>
              <i style={{ marginLeft: "30px", color: "white", fontSize: "2rem" }} className='fas fa-question-circle'></i>
            </Link>
            <Link to='/profile' className='icon-navbar'>
              <i style={{ marginLeft: "30px", color: "white", fontSize: "2rem" }} className='fas fa-user'></i>
            </Link>
            <Link to='/logout' className='icon-navbar'>
              <i style={{ marginLeft: "30px", marginRight: "10px", color: "white", fontSize: "2rem" }} className='fas fa-sign-out-alt'></i>
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
