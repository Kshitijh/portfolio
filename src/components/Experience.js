import React from "react";

const experiences = [
  {
    company: "Cybernetik Technologies (Python Dev.)",
    role: "Frontend / GUI Development",
    duration: "Dec 2024 - Present",
    desc: "Worked on development of firmware for Battery Management System (BMS), Also built 6+ industrial live monitoring dashboards, developed backend with real-time control."
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2024 - Present",
    desc: "Built small business websites and integrated payment & reporting systems.",
  },
  {
    company: "Vijesha IT Services LLP",
    role: "AI Engineer",
    duration: "2024",
    desc: "Implemented data-frame handling models & Developed a recommendation system using collaborative filtering.",
  }
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="small">Work, internships and major roles</div>
        </div>

        <div className="card">
          <div className="exp-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-item">
                <div className="exp-left small">
                  <div style={{fontWeight:700}}>{exp.company}</div>
                  <div>{exp.duration}</div>
                </div>
                <div className="exp-right">
                  <div style={{fontWeight:700}}>{exp.role}</div>
                  <div className="small" style={{marginTop:6}}>{exp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
