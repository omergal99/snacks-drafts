import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar flex wrap space-around align-center">
    <NavLink exact to="/" activeClassName="activeRoute">Home</NavLink>
  </div>
)

export default NavBar;