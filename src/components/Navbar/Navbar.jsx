import React from "react";
import "./Navbar.css";
import "./responsive.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>
            Ctrl<span>+</span>Code
          </h1>
        </div>
        <div className="nav">
          <a href="#about" className="nav-links">
            About Me
          </a>
          <a href="#skills" className="nav-links">
            Skills
          </a>
          <a href="#projects" className="nav-links">
            Projects
          </a>
          <a href="#contact" className="nav-links">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
