import React from 'react';

function Sidebar({ skills, onSelect }) {
  return (
    <div className="sidebar">
      <h2>Available Skills</h2>
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="skill-card"
          onClick={() => onSelect(skill)}
        >
          <h3>{skill.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;