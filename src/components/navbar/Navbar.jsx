import "./navbar.scss";
import React from "react";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
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
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
