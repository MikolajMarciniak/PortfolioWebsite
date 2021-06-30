import "./navbar.scss";
import React from "react";
export default function Navbar({ menuOpen, setMenuOpen, isMobile }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#landing">
            placeholder
          </a>
        </div>
        <div className="right">
          {isMobile && menuOpen && (
            <div className="menu">
              <a href="#about">about me</a>
              <a href="#projects">projects</a>
              <a href="#contact">contact me</a>
            </div>
          )}
          {!isMobile && (
            <div className="menu">
              <a href="#about">about me</a>
              <a href="#projects">projects</a>
              <a href="#contact">contact me</a>
            </div>
          )}
          {isMobile && (
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
