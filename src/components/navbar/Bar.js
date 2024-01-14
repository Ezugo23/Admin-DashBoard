import React from 'react';
import { Link } from 'react-router-dom';
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatLeft } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import avatar from '../../components/avatar.jpg';
import '../../App.css'

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap:'1.3rem',
      }}>
        <p>Application</p>
        <p>Dashboard</p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap:'1.3rem',
      }}>
        <div  style={{
       position: 'relative',
       display: 'inline-block'
      }}>
          <input type="text" placeholder="Search..." style={{
        all: 'unset',
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '10px',
        fontSize: '16px',
      }} />
          <div style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '10px',
      }}>
            <RiSearchLine style={{
           color: '#888', 
           cursor:' pointer',
           marginTop: '3px',
      }} />
          </div>
        </div>

        <RiNotification3Line />
        <img
          src={avatar}
          alt=""
          style={{ borderRadius: '70px', width: '30px', height: '30px' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
