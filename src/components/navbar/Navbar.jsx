import "./navbar.scss";
import React from "react";
import placeholder from "../../resources/placeholder.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#landing">
            <img src={placeholder} alt="placeholder" />
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
