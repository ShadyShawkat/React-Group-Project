import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1>space</h1>
    <ul>
      <li>
        <NavLink to="/" />
        Rockets
      </li>
      <li><NavLink to="missions">Missions</NavLink></li>
      <li><NavLink to="profile">Profile</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
