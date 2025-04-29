import React from 'react';
import { iconMap } from './Sidebar';

const SkillCard = ({ skill, onClick, isSelected }) => {
  const [skillData, setSkillData] = React.useState(null);

  React.useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/skills/skills/${skill.id}`);
        const data = await response.json();
        setSkillData(data);
      } catch (error) {
        console.error('Error fetching skill data:', error);
      }
    };

    fetchSkillData();
  }, [skill.id]);

  if (!skillData) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(skill)}
    >
      <div className="skill-icon">{iconMap[skillData.id]}</div>
      <div className="skill-content">
        <h3>{skillData.title}</h3>
        <p className="skill-excerpt">{skillData.description.substring(0, 60)}...</p>
      </div>
      <div className="skill-rating">
        <span className="stars">★★★★★</span>
        <span className="reviews">({skillData.reviewsCount} reviews)</span>
      </div>
    </div>
  );
};

export default SkillCard;