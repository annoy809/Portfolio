import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ===== Brand Section ===== */}
        <div className="footer-brand">
          <h2>Mxsxom</h2>
          <span className="footer-tagline">
            INNOVATION • DESIGN • DEVELOPMENT
          </span>
          <p>
            I design and build modern, user-focused digital experiences using
            clean UI/UX and scalable front-end technologies.
          </p>
        </div>

        {/* ===== Footer Columns ===== */}
        <div className="footer-columns">

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">Services</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Web Development</a>
            <a href="#">UI/UX Design</a>
            <a href="#">React Development</a>
            <a href="#">Portfolio Websites</a>
            <a href="#">Brand Design</a>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: mxsxom@gmail.com</p>
            <p>Phone: +91 8826248376</p>

            <div className="footer-social">
              <a href="https://www.instagram.com/mxsxom"><i className="ri-instagram-fill"></i></a>
              <a href="#"><i className="ri-linkedin-box-fill"></i></a>
              <a href="https://github.com/annoy809"><i className="ri-github-fill"></i></a>
              <a href="#"><i className="ri-behance-fill"></i></a>
            </div>
          </div>

        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        <p>
          © 2025 Mxsxom. Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
