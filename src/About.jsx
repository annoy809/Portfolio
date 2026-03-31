import React from "react";
import "./About.css";

const About = () => {
return (
<div>

  {/* HERO SECTION */}

  {/* ABOUT SECTION */}
  <section className="container about-section">
    <div className="about-grid">

      <div className="about-image">
<img
  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  alt="Designer working on UI project"
/>


      </div>

     <div className="about-content">
  <h2>About Me</h2>

  <p>
    I'm <strong>Masoom</strong>, a Lead UI/UX Designer at
    <strong> KGN Centre</strong>, focused on crafting clean,
    modern, and high-performing digital experiences.
  </p>

  <p>
    I specialize in designing premium user interfaces, scalable design
    systems, dashboards, LMS platforms, and high-converting landing pages
    that deliver both aesthetics and functionality.
  </p>

  <p>
    My approach combines usability, performance, and visual clarity to
    create intuitive products that enhance user engagement and drive results.
  </p>

  <a href="#" className="read-more">
    View More
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
        Clean, minimal, and visually refined interfaces crafted with a
        strong focus on balance, consistency, and premium aesthetics.
      </p>
    </div>

    <div className="feature-card">
      <h4>User Experience</h4>
      <p>
        Human-centered UX design that prioritizes usability, clarity,
        and seamless interaction across all touchpoints.
      </p>
    </div>

    <div className="feature-card">
      <h4>Scalable UI Systems</h4>
      <p>
        Robust and scalable interface systems designed for complex
        products, dashboards, and modern web applications.
      </p>
    </div>

  </div>
</section>

</div>


);
};

export default About;