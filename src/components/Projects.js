import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    desc: "This responsive React portfolio (the one you're viewing). Built from scratch with CSS variables and a light/dark theme.",
    tech: ["React", "CSS"],
    link: "#"
  },
  {
    name: "Inventory GUI",
    desc: "Desktop GUI built with PyQt for warehouse management; integrated with SQLite and reporting features.",
    tech: ["Python", "PyQt5", "SQLite"],
    link: "#"
  },
  {
    name: "E-commerce Backend",
    desc: "RESTful API for an online store with product CRUD, authentication and order processing.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#"
  }
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
            <div key={i} className="card">
              <h3>{p.name}</h3>
              <div className="small">{p.desc}</div>
              <div style={{marginTop:12}}>
                {p.tech.map((t, idx) => <span key={idx} className="skill" style={{marginRight:6}}>{t}</span>)}
              </div>
              <div className="project-links" style={{marginTop:12}}>
                <a href={p.link} target="_blank" rel="noreferrer">View</a>
                <a href="#" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
