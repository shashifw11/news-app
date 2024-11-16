import React from "react";
import "./Navbar.css";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="hamburger-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1 className="navbar-title">News App</h1>
    </div>
  );
};

export default Navbar;
