import React from "react";
import "./DesignServices.css";

const DesignServices = () => {
  return (
    <section className="design-wrapper">
      
      {/* SECTION HEADER */}
      <div className="design-header">
        <span className="design-line"></span>
        <h2>Design Services</h2>
        <p>
          From conceptualization to execution, we offer a full suite of design
          services tailored to your branding needs.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="design-card">
        
        {/* LEFT CONTENT */}
        <div className="design-content">
          <span className="design-tag">BRAND IDENTITY</span>

          <h3>
            Building a Strong <br /> Brand Identity
          </h3>

          <p>
            We blend creativity and strategy to create brands that leave
            a long-lasting impression on your audience.
          </p>

          <a href="#" className="design-link">
            Become Memorable →
          </a>
        </div>

        {/* RIGHT ICON GRID */}
        <div className="design-icons">
          <div className="icon-box gradient">
            ✦
          </div>
          <div className="icon-box toggle">
            <span className="switch"></span>
          </div>
          <div className="icon-box text">
            Aa
          </div>
          <div className="icon-box list">
            ✔︎<br />✔︎
          </div>
        </div>

      </div>

    </section>
  );
};

export default DesignServices;
