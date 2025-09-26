import React from "react";

const skills = [
  "React", "JavaScript", "HTML", "CSS", "Python", "PyQt5", "Node.js", "SQL", "Git", "Docker"
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
          <div className="small">Tools & technologies I use</div>
        </div>

        <div className="card">
          <div className="skills">
            {skills.map((s, i) => (
              <div key={i} className="skill">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
