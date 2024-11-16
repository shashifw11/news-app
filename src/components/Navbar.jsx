import React from "react";
import "./Navbar.css";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="hamburger-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <h3 className="navbar-title">Menu</h3>
    </div>
  );
};

export default Navbar;
