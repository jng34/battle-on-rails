import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block", 
  fontFamily: 'Bubbly, sans-serif', 
  fontSize: '20px',
  width: "auto",
  padding: "12px",
  margin: "10px 10px 6px",
  background: "orange",
  textDecoration: "none",
  color: "black",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "lightgreen",
        }}
      >
        MAIN
      </NavLink>
      <NavLink
        to="/battle"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightgreen",
        }}
      >
        BATTLE
      </NavLink>
      <NavLink
        to="/users"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightgreen",
        }}
      >
        ALL USERS
      </NavLink>
    </div>
  );
}
  
  export default NavBar;