import React from "react";
import "./Project.css";

function Project() {
 const projects = [
  {
    title: "KGN Centre – Corporate Website",
    description:
      "Professional corporate website with responsive layout and clean UI.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://kgnitsoftware.unaux.com/?i=1",
    caseStudyUrl: "https://kgncentre.com/casestudy",
  },
  {
    title: "Alpha Tutorials – Educational Website",
    description: "LMS website with course pages and dashboards.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://alphatutorials.co.in/",
    caseStudyUrl: "https://alphatutorials.com/casestudy",
  },

];

  return (
    <section id="projects" className="projects-section container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Select a project to view live demo or case study.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-img">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="actions">
                <a href={p.liveUrl} target="_blank" rel="noreferrer">
                  View Live
                </a>
                <a href={p.caseStudyUrl} target="_blank" rel="noreferrer">
                  Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
