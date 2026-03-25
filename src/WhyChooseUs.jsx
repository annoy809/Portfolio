import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-wrapper">
      <div className="why-card">

        {/* LEFT CONTENT */}
        <div className="why-content">
          <span className="why-label">Why Choose Us?</span>

          <h2>
            Stunning Designs <br />
            Excellent SEO <br />
            Enhanced Speed
          </h2>

          <ul>
            <li>Attention to detail in every aspect of the design.</li>
            <li>High performance and fast loading times.</li>
            <li>Quality content and excellent SEO optimization.</li>
            <li>Regular updates and increased security.</li>
          </ul>
        </div>

        {/* RIGHT GRADIENT CARD */}
        <div className="why-visual">
          <div className="glass-card">
            <i className="ri-cursor-line"></i>
            <i className="ri-share-line"></i>
            <i className="ri-shield-check-line"></i>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
