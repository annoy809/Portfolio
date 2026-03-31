import React, { useEffect } from "react";
import "./Services.css";

const serviceData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    title: "Website Development",
    desc: "High-performance static, dynamic and full-stack websites.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    title: "App Development",
    desc: "Modern mobile and web applications for automation.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Branding & Logo Design",
    desc: "Complete brand identity & visual guidelines.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149650.png",
    title: "Digital Marketing",
    desc: "Social media, paid ads & organic growth strategies.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1821/1821930.png",
    title: "Graphics Design",
    desc: "Posters, banners, ad creatives & social media graphics.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    title: "IT Consulting",
    desc: "System upgrades, automation & digital scaling.",
  },
];

const Services = () => {
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
            <div
              className="service-card"
              key={idx}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>

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