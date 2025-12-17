import React from "react";
import "./WWD.css";

const PremiumPortfolio = () => {
  return (
    <section className="premium-section">
      <div className="premium-container">
        {/* LEFT CONTENT */}
        <div className="left-card">
          <span className="brand">XS.</span>
          <div className="badge">⭐ Creative Agency</div>


          <h1>
            We Develop Websites <br /> For Your Business
          </h1>
          <p>
            We design and develop modern, high‑performing websites that help
            brands grow, convert users, and stand out online.
          </p>

          <div className="btn-group">
            <button>Business Website</button>
            <button>E‑commerce Website</button>
            <button>Landing Page Design</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right-card">
          <h2>Boost Your Business</h2>
          <p>
            With Us. We combine strategy, design, and technology to deliver
            digital solutions that drive real results.
          </p>
        </div>

        {/* BOTTOM CARD */}
        <div className="bottom-card">
          <h2>How We Build Landing Pages</h2>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <h4>Research & Planning</h4>
                <p>
                  We analyze your goals, audience, and competitors to build a
                  strong foundation.
                </p>
              </div>
            </div>

            <div className="step">
              <span>02</span>
              <div>
                <h4>Design & Development</h4>
                <p>
                  We design high‑converting layouts and develop fast, responsive
                  landing pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPortfolio;

