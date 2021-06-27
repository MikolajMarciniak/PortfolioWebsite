import "./navbar.scss";
import React from "react";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#landing">
            placeholder
          </a>
        </div>
        <div className="right">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
