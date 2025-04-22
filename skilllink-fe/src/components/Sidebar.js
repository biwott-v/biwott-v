import React from 'react';
import {
  FaBolt,
  FaWrench,
  FaSnowflake,
  FaHammer,
  FaCar,
  FaPaintRoller,
  FaPenNib,
  FaLaptopCode,
  FaTshirt,
  FaCut,
  FaChalkboardTeacher,
  FaCamera
} from 'react-icons/fa';

const iconMap = {
  1: <FaBolt />,
  2: <FaWrench />,
  3: <FaSnowflake />,
  4: <FaHammer />,
  5: <FaCar />,
  6: <FaPaintRoller />,
  7: <FaPenNib />,
  8: <FaLaptopCode />,
  9: <FaTshirt />, // replaces the broken FaScissors
  10: <FaCut />,
  11: <FaChalkboardTeacher />,
  12: <FaCamera />
};

function Sidebar({ skills, onSelect, searchTerm, onSearch }) {
  return (
    <div className="sidebar">
      <h2>Available Skills</h2>

      <input
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      {skills.map((skill) => (
        <div
          key={skill.id}
          className="skill-card"
          onClick={() => onSelect(skill)}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {iconMap[skill.id]} {skill.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;