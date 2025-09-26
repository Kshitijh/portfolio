import React from "react";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="home">
          <div className="logo">KH</div>
          <div>
            <div style={{ fontWeight: 700 }}>Kshitij Hupare</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>Full-Stack Developer</div>
          </div>
        </a>

        <div className="nav-links" aria-hidden>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button
            aria-label="Toggle theme"
            title="Toggle theme"
            className="btn btn-ghost"
            onClick={onToggleTheme}
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <a className="btn btn-primary" href="#contact">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}
