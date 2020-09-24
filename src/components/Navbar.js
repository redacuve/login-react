import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex border-b shadow mb-2">
      <NavLink
        className="mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="mr-1 bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="mr-1 bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;
