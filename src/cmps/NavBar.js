import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar flex wrap space-around align-center">
    <NavLink exact to="/" activeClassName="activeRoute">Main</NavLink>
    {/* <NavLink to="/Main2" activeClassName="activeRoute">Square</NavLink> */}
    {/* <NavLink to="/Human" activeClassName="activeRoute">Human</NavLink> */}
    <NavLink to="/Tommy" activeClassName="activeRoute">Tommy</NavLink>
    <NavLink to="/Coutries" activeClassName="activeRoute">Coutries</NavLink>
    <NavLink to="/Coutries2" activeClassName="activeRoute">Coutries2</NavLink>
    <NavLink to="/select3" activeClassName="activeRoute">select3</NavLink>

    {/* <NavLink to="/PilotTable" activeClassName="activeRoute">Pilot</NavLink>
    <NavLink to="/VoiceRecorder" activeClassName="activeRoute">VoiceRecorder</NavLink>
    <NavLink to="/Table" activeClassName="activeRoute">table</NavLink>
    <NavLink to="/Example2" activeClassName="activeRoute">stackoverflow</NavLink>
    <NavLink to="/Example3" activeClassName="activeRoute">Example3</NavLink> */}
  </div>
)

export default NavBar;