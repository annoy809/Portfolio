import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBullhorn,
  FaPaintBrush,
  FaCogs,
} from "react-icons/fa";
import "./Services.css";

const serviceData = [
  {
    icon: <FaLaptopCode />,
    title: "Website Development",
    desc: "High-performance static, dynamic and full-stack websites.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Modern mobile and web applications for automation.",
  },
  {
    icon: <FaPalette />,
    title: "Branding & Logo Design",
    desc: "Complete brand identity & visual guidelines.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Social media, paid ads & organic growth strategies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphics Design",
    desc: "Posters, banners, ads creatives & social graphics.",
  },
  {
    icon: <FaCogs />,
    title: "IT Consulting",
    desc: "System upgrades, automation & digital scaling.",
  },
];

const Services = () => {
  // Optional: animate on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero white-theme">
        <div className="services-hero-content">
          <h1>Our Premium Services</h1>
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
          {serviceData.map((service, idx) => (
            <div className="service-card" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
