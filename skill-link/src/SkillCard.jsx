import React, { useState, useEffect } from 'react';
import { iconMap } from './Sidebar';

const SkillCard = ({ skill, onClick, isSelected }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/skills/skills/${skill.id}`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Fetch error:', err));
  }, [skill.id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div 
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(skill)}
    >
      <div className="skill-icon">{iconMap[data.id]}</div>
      <h3>{data.title}</h3>
      <p>{data.description.slice(0, 60)}...</p>
      <div>
        <span>★★★★★</span>
        <span>({data.reviewsCount} reviews)</span>
      </div>
    </div>
  );
};

export default SkillCard;
