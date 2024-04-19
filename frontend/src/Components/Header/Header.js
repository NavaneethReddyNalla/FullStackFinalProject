import { NavLink } from "react-router-dom";
import "./Header.css";
import React from "react";

function Header() {
  return (
    <header>
      <span className="title">Introvert Matrimony</span>
      <nav title="navigation-bar">
        <ul className="nav-buttons">
          <NavLink className="nav-button" to="/">
            Home
          </NavLink>
          <NavLink className="nav-button" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-button" to="/register">
            Sign Up
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
