import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "./images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  /* =========================
     CLOSE ON OUTSIDE CLICK
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-brand">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <HashLink smooth to="/#service">Service</HashLink>
          <Link to="/about">About</Link>
          <HashLink smooth to="/#projects">Projects</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
        </div>

        {/* CTA */}
        <HashLink smooth to="/#contact" className="nav-cta">
          Let’s Talk
        </HashLink>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
      >
        <Link to="/" onClick={scrollTop}>Home</Link>
        <HashLink smooth to="/#service" onClick={closeMenu}>Service</HashLink>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <HashLink smooth to="/#projects" onClick={closeMenu}>Projects</HashLink>
        <HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink>

        <HashLink
          smooth
          to="/#contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Let’s Talk
        </HashLink>
      </div>
    </>
  );
};

export default Navbar;
