import React from "react";
import profile from "../assets/profile-placeholder.jpg"; // optional - add your image

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div>
          <div className="hero-card">
            <h1 className="hero-title">Hi — I'm <span style={{color:"var(--accent)"}}>Kshitij</span></h1>
            <p className="hero-sub">
              Recent Computer Science graduate (CGPA 8.68). Passionate about building
              full-stack applications using React, Node/Python and designing delightful UX.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">See my work</a>
              <a className="btn btn-ghost" href="#contact">Contact me</a>
            </div>

            <div style={{marginTop:18, display:"flex", gap:12}}>
              <div>
                <div style={{fontSize:12, color:"var(--muted)"}}>Location</div>
                <div style={{fontWeight:700}}>India</div>
              </div>
              <div>
                <div style={{fontSize:12, color:"var(--muted)"}}>Availability</div>
                <div style={{fontWeight:700}}>Open to work</div>
              </div>
            </div>
          </div>

          <div style={{marginTop:18, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12}}>
            <div className="card">
              <div className="small">Experience</div>
              <div style={{fontWeight:700, marginTop:6}}>Internships + Freelance</div>
            </div>
            <div className="card">
              <div className="small">Top Skill</div>
              <div style={{fontWeight:700, marginTop:6}}>React • Python</div>
            </div>
            <div className="card">
              <div className="small">Degree</div>
              <div style={{fontWeight:700, marginTop:6}}>B.Tech in CS (2025)</div>
            </div>
          </div>
        </div>

        <aside className="profile">
          <img src={profile} alt="Profile" />
          <h3>Kshitij Hupare</h3>
          <p className="small">Full-Stack Developer — React, Python, PyQt</p>
          <div style={{marginTop:12}}>
            <a className="btn btn-primary" href="#contact">Get in touch</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
