import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';
export default function Header() {

  const [menuActive, setMenuActive] = useState(false)

  function toggleNav() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className="header flex md-flex-row flex-column">
      <div className="flex justify-between">
        <NavLink to='/' className="flex items-center logo no-underline">
          <img className="max-h-l2 w-auto" src={logo} alt="Logo" />
        </NavLink>
        <button
          onClick={toggleNav}
          type="button"
          className="link-button flex items-center ml-auto md-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="fas fa-bars"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
        </button>
      </div>
      <div id="nav-items" className={`${!menuActive && 'hidden'} flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center`}>
        <NavLink className="menu-items" to='/home'><span>Home</span></NavLink>
        <NavLink className="menu-items" to='/favorites'><span>Favorites</span></NavLink>
        <NavLink className="menu-items" to='/watch-later'><span>Watch Later</span></NavLink>
      </div>
    </nav>
  )
}
