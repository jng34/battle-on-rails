import React from "react";
import { NavLink } from "react-router-dom";

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      ⚔️&nbsp;&nbsp;&nbsp;
      <NavLink 
        to="/"
        exact 
      >
        <button type="button" className="btn btn-lg btn-warning">MAIN</button>
      </NavLink>
      &nbsp;&nbsp;&nbsp;⚔️&nbsp;&nbsp;&nbsp;
      <NavLink
        to="/battle"
        exact
      >
        <button type="button" className="btn btn-lg btn-warning">BATTLE</button>
      </NavLink>
      &nbsp;&nbsp;&nbsp;⚔️&nbsp;&nbsp;&nbsp;
      <NavLink
        to="/users"
        exact
      >
        <button type="button" className="btn btn-lg btn-warning">ALL USERS</button>
      </NavLink>
      &nbsp;&nbsp;&nbsp;⚔️
    </div>
  );
}
  
  export default NavBar;