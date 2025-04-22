import React from 'react';

function SkillDetails({ skill }) {
  if (!skill) {
    return (
      <div className="skill-details">
        <h2>Select a Skill</h2>
        <p>The full skill or service details will appear here.</p>
      </div>
    );
  }

  return (
    <div className="skill-details">
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
    </div>
  );
}

export default SkillDetails;