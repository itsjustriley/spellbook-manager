import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/prepared">Prepared Spells</NavLink>
      <NavLink to="/known">Spells Known</NavLink>
      <NavLink to="/search">Spell Search</NavLink>
    </nav>
  );
}

export default Nav;