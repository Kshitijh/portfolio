import React from "react";

const experiences = [
  {
    company: "Cybernetik Technologies (Python Developer)",
    role: "Frontend / GUI Development",
    duration: "Dec 2024 - Present",
    desc: "Developed Firmwares for BMS (Battery management Systems) via Python and GUIs using Qt Designer. Built dashboards and automated workflows for multiple clients including Battrixx, Livguard and Hero Motor Corp.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2024 - Present",
    desc: "Built small business websites and integrated payment & reporting systems.",
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
