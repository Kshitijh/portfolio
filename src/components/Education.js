import React from "react";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <div className="small">Academic background</div>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3>B.Tech — Computer Science and Engineering</h3>
            <div className="small">2020 - 2024</div>
            <div style={{marginTop:8, fontWeight:700}}>CGPA: 8.68</div>
            <p className="small" style={{marginTop:8}}>
              Completed core computer science subjects and worked on various projects in IOT, web development, Cloud technologies and desktop GUI designs.
            </p>
          </div>

          <div className="card">
            <h3>Certifications</h3>
            <div className="small">Relevant online Certificates</div>
            <ul>
              <li>.NET Full Stack Developer Certification</li>
              <li>Artificial Intelligence Primer Certification</li>
              <li>DevOps Foundation Certification</li>
              <li>Python Programmer Certification</li>
              <li>Java Foundation Certification</li>
            </ul>
          </div>

          <div className="card">
            <h3>Courses</h3>
            <div className="small">Relevant online Certificates</div>
            <ul>
              <li>Python Data Structures and Algorithms</li>
              <li>Introduction to Robotic Process Automation</li>
              <li>Introduction to NLP</li>
              <li>Continuous Integration and Delivery - DevOps</li>
              <li>Introduction to Data Science</li>
              <li>Computer Vision 101</li>
              <li>AWS Certified Solution Architect - Associate</li>
              <li>(RHCSA) RedHat Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
