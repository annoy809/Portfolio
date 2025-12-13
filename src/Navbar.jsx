import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-container">

      <div className="nav-brand">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <HashLink smooth to="/#service">Service</HashLink>

        <Link to="/about">About</Link>

        <HashLink smooth to="/#projects">Projects</HashLink>

        <HashLink smooth to="/#contact">Contact</HashLink>
      </div>

      <HashLink smooth to="/#contact" className="nav-cta">
        Let’s Talk
      </HashLink>

    </nav>
  );
};

export default Navbar;
