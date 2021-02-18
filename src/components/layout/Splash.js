import React from 'react';
import logo from '../../assets/images/logo.png';
import './Splash.css';

export default function Splash() {
  return (
    <div id="splash-screen">
      <img
        src={logo}
        alt="Leo Movies"
      />
      <span>Loading...</span>
    </div>
  )
}
