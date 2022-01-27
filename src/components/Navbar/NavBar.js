import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../app-logo.png';

const NavBar = () => (
  <nav className="flex px-6 py-3 bg-white items-center border-b border-b-gray-300 fixed top-0 w-screen z-10">
    <h1 className="font-bold text-2xl flex items-center gap-3">
      <img src={logo} alt="logo" className="w-12 h-12" />
      <span className=" hidden md:block">Space Travelers&apos; Hub</span>
    </h1>
    <ul className="flex gap-3 font-medium justify-end flex-1">
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li className="border-l-black border-l-2 pl-3">
        <NavLink to="missions">Missions</NavLink>
      </li>
      <li className="border-l-black border-l-2 pl-3">
        <NavLink to="profile">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
