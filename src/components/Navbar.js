import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        <div className='navbar-icons '>
            <Link to='/notifications' className='icon-navbar'>
              <i  style={{marginLeft:"250px", color:"white",fontSize:"2rem" }} className='fas fa-bell'></i>
            </Link>
            <Link to='/help' className='icon-navbar'>
              <i style={{marginLeft:"30px", color:"white",fontSize:"2rem"  }}  className='fas fa-question-circle'></i>
            </Link>
            <Link to='/profile' className='icon-navbar'>
              <i style={{marginLeft:"30px", color:"white",fontSize:"2rem"  }} className='fas fa-user'></i>
            </Link>
            <Link to='/logout' className='icon-navbar'>
              <i style={{marginLeft:"30px",marginRight:"10px", color:"white" ,fontSize:"2rem" }} className='fas fa-sign-out-alt'></i>
            </Link>
          </div>

      </nav>
    </>
  );
}

export default Navbar;
