import React from "react";
import "./WebDesignSection.css";
import illustration from "./images/img6.png"; // Replace with your uploaded image

const WebDesignSection = () => {
  return (
    <section className="web-design-section">
      <div className="web-design-content">
        <img
          src={illustration}
          alt="Web Design Illustration"
          className="web-design-image"
        />
        <div className="web-design-text">
          <p className="category">WEB DESIGN</p>
          <h2>Bringing Your Vision to the Web</h2>
          <p className="description">
            Building visually stunning and reliable websites with robust
            functionality, great SEO, and high page speed scores.
          </p>
          <a href="#" className="cta">
            Get Noticed Online → 
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
