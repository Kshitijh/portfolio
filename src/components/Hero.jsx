import React from 'react';

const Hero = ({ roles, selectedRole, onRoleChange }) => {
  return (
    <header className="hero flex-container">
      <div className="profile-image-container">
        <img src="/profile.jpg" alt="Kshitij S. Hupare" className="profile-image" />
      </div>
      <div className="hero-text">
        <h1>Kshitij S. Hupare</h1>
        <p>Select Professional Title:</p>
        <select value={selectedRole} onChange={(e) => onRoleChange(e.target.value)}>
          <option value="Show All">Show All</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <a href="/Kshitij's_resume.pdf" className="btn-resume" download>
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Hero;
