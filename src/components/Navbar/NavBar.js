import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="flex justify-between px-6 py-3 bg-white items-center border-b border-b-gray-300">
      <h1 className="font-bold text-2xl">Space Travelers&apos; Hub</h1>
      <ul className="flex gap-3 font-medium">
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
};

export default NavBar;
