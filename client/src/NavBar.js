import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block", 
  fontSize: '20px',
  width: "auto",
  padding: "12px",
  margin: "10px 10px 6px",
  background: "black",
  textDecoration: "none",
  color: "yellow",
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
          background: "skyblue",
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/battle"
        exact
        style={linkStyles}
        activeStyle={{
          background: "skyblue",
        }}
      >
        BATTLE
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "skyblue",
        }}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/user"
        exact
        style={linkStyles}
        activeStyle={{
          background: "skyblue",
        }}
      >
        SIGNUP/LOGIN
      </NavLink>
    </div>
  );
}
  
  export default NavBar;