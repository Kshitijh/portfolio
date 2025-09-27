import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    desc: "This responsive React portfolio (the one you're viewing). Built from scratch with CSS variables and a light/dark theme.",
    tech: ["React.js", "AWS S3", "Node.js"],
    link: "#",
  },
  {
    name: "Digital shopping trolley",
    desc: "Created a digital shopping cart/trolley to reduce the waiting time at the billing desk.",
    tech: ["Processors", "sensors", "MongoDB", "AWS"],
    link: "#",
  },
  {
    name: "Textile Web-App",
    desc: "Developed a web application to automate inventory management, marketing, and sales.",
    tech: ["AWS EC2", "MongoDB", "React.js"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="small">Selected work — GitHub links below</div>
        </div>

        <div className="card-grid">
          {projects.map((p, i) => (
            <div key={i} className="card custom-card">
              <h3>{p.name}</h3>
              <div className="small">{p.desc}</div>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {p.tech.map((t, idx) => (
                  <span key={idx} className="skill-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links" style={{ marginTop: 12 }}>
                <a href={p.link} target="_blank" rel="noreferrer">
                  View
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
