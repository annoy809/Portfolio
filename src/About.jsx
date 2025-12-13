import React from "react";
import "./about.css";

const About = () => {
return (
<div>

  {/* HERO SECTION */}

  {/* ABOUT SECTION */}
  <section className="container about-section">
    <div className="about-grid">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="About"
        />
      </div>

      <div className="about-content">
        <h2>About Me.</h2>

        <p>
          I'm <strong>Masoom</strong>, Lead UI/UX Designer at
          <strong> KGN Centre</strong> — designing clean, modern and
          conversion-focused digital experiences.
        </p>

        <p>
          I specialize in premium UI systems, dashboards, LMS platforms,
          landing pages and scalable design solutions that feel fast
          and intuitive.
        </p>

        <a href="#" className="read-more">
          Read More
        </a>
      </div>

    </div>
  </section>

  {/* FEATURES SECTION */}
  <section className="container features-section">
    <div className="features-grid">

      <div className="feature-card">
        <h4>Modern Design</h4>
        <p>
          Minimal, clean and visually balanced interfaces with
          premium aesthetics.
        </p>
      </div>

      <div className="feature-card">
        <h4>User Experience</h4>
        <p>
          Human-centered UX focused on usability, clarity and flow.
        </p>
      </div>

      <div className="feature-card">
        <h4>Powerful UI</h4>
        <p>
          Scalable UI systems built for dashboards and products.
        </p>
      </div>

    </div>
  </section>

</div>


);
};

export default About;