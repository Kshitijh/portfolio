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
              I'm a Computer Science graduate who loves building web apps and desktop GUIs.
              I’ve worked on Qt-based GUIs with Python, web apps with React, and various
              backend services. I enjoy turning designs into pixel-perfect UIs and optimizing
              industrial performances.
            </p>

            <h3 style={{marginTop:12}}>What I do</h3>
            <ul>
              <li>Front-end development with React (Crafting responsive UI)</li>
              <li>Backend APIs and various databases</li>
              <li>Desktop apps and automation</li>
            </ul>
          </div>

          <div className="card">
            <h3>Quick facts</h3>
            <div className="small">Location</div>
            <div style={{fontWeight:700}}>Maharashtra, India</div>

            <div style={{marginTop:8}} className="small">Education</div>
            <div style={{fontWeight:700}}>B. Tech, Computer Science & Engineering</div>

            <div style={{marginTop:8}} className="small">Contact</div>
            <div style={{fontWeight:700}}><a href="mailto:kshitijhupare07@gmail.com">kshitijhupare07@gmail.com</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
