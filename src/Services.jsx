import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBullhorn,
  FaPaintBrush,
  FaCogs
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <h1>Our Professional Services</h1>
          <p>
            At <strong>KGN Centre</strong>, we deliver modern, scalable and
            business-driven digital solutions — crafted for growth,
            performance and brand impact.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container services-section">
        <div className="services-header">
          <h2>What We Offer</h2>
          <p>
            End-to-end digital services designed to elevate your brand and
            streamline your business.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">
              <FaLaptopCode />
            </div>
            <h3>Website Development</h3>
            <p>High-performance static, dynamic and full-stack websites.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaMobileAlt />
            </div>
            <h3>App Development</h3>
            <p>Modern mobile and web applications for automation.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaPalette />
            </div>
            <h3>Branding & Logo Design</h3>
            <p>Complete brand identity & visual guidelines.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaBullhorn />
            </div>
            <h3>Digital Marketing</h3>
            <p>Social media, paid ads & organic growth strategies.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaPaintBrush />
            </div>
            <h3>Graphics Design</h3>
            <p>Posters, banners, ads creatives & social graphics.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaCogs />
            </div>
            <h3>IT Consulting</h3>
            <p>System upgrades, automation & digital scaling.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
