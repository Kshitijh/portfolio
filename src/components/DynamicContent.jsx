import React from 'react';

const DynamicContent = ({ selectedRole, data }) => {
  const filter = (category) => {
    if (selectedRole === 'Show All') {
      return Object.values(data).flatMap((role) => role[category] || []);
    }
    return data[selectedRole]?.[category] || [];
  };

  return (
    <section>
      {/* Skills */}
      <h2>Skills</h2>
      <ul className="skills-list">
        {filter('skills').length
          ? filter('skills').map((skill, i) => <li key={i}>{skill}</li>)
          : <p>No skills listed.</p>}
      </ul>

      {/* Projects */}
      <h2>Projects</h2>
      {filter('projects').length
        ? filter('projects').map((proj, i) => (
            <div key={i} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          ))
        : <p>No projects listed.</p>}

      {/* Experience */}
      <h2>Experience</h2>
      <ul className="experience-list">
        {filter('experience').length
          ? filter('experience').map((exp, i) => <li key={i}>{exp}</li>)
          : <p>No experience listed.</p>}
      </ul>

      {/* Certifications */}
      <h2>Certifications</h2>
      <ul>
        {filter('certifications').length
          ? filter('certifications').map((cert, i) => <li key={i}>{cert}</li>)
          : <p>No certifications listed.</p>}
      </ul>
    </section>
  );
};

export default DynamicContent;
