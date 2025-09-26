import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About</h2>
          <div className="small">A short intro about me</div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"2fr 1fr", gap:18}}>
          <div className="card">
            <h3>Who I am</h3>
            <p className="small">
              I'm a recent Computer Science graduate (CGPA 8.68) who loves building web apps and
              desktop GUIs. I’ve worked on Qt-based GUIs with Python, web apps with React, and
              backend services. I enjoy turning designs into pixel-perfect UIs and optimizing
              performance.
            </p>

            <h3 style={{marginTop:12}}>What I do</h3>
            <ul>
              <li>Front-end development with React (Crafting responsive UI)</li>
              <li>Backend APIs (Python / Node) and databases</li>
              <li>Desktop apps using PyQt / PyQt5 and automation</li>
            </ul>
          </div>

          <div className="card">
            <h3>Quick facts</h3>
            <div className="small">Location</div>
            <div style={{fontWeight:700}}>India</div>

            <div style={{marginTop:8}} className="small">Education</div>
            <div style={{fontWeight:700}}>B.Tech, Computer Science</div>

            <div style={{marginTop:8}} className="small">Contact</div>
            <div style={{fontWeight:700}}>youremail@example.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
