import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar flex wrap space-around align-center">
    <NavLink exact to="/" activeClassName="activeRoute">Main</NavLink>
    <NavLink to="/Main2" activeClassName="activeRoute">Square</NavLink>
    <NavLink to="/Main3" activeClassName="activeRoute">Human</NavLink>
    <NavLink to="/Main4" activeClassName="activeRoute">Tommy</NavLink>
    <NavLink to="/pilotTable" activeClassName="activeRoute">Pilot</NavLink>
    <NavLink to="/VoiceRecorder" activeClassName="activeRoute">VoiceRecorder</NavLink>
    <NavLink to="/Example" activeClassName="activeRoute">Example</NavLink>
  </div>
)

export default NavBar;