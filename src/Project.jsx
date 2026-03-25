import React from "react";
import "./Project.css";

function Project() {
 const projects = [
{
  title: "Chatbox App – Real-time Messaging",
  description: "A real-time chat application with interactive UI and smooth messaging experience.",
  image:
    "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80",
  liveUrl: "https://chatbox-ai-five.vercel.app/",
  caseStudyUrl: "#",
},
  {
  title: "Netflix Clone – Premium Streaming Platform",
  description:
    "A high-end Netflix-inspired streaming web app with modern UI, TMDB-powered content, multi-server video playback, episode & season support, and a smooth, cinematic user experience.",
  image:
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
  liveUrl: "https://netflix-clone-wheat-psi-88.vercel.app/",
  caseStudyUrl: "https://yourdomain.com/netflix-clone-casestudy",
}
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
