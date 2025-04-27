import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SkillDetails from './components/SkillDetails';
import './index.css';

function App() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      title: 'Electrician Services',
      description: 'Expert in wiring, sockets, lighting, and home installations.'
    },
    {
      id: 2,
      title: 'Plumbing Solutions',
      description: 'Fixes leaks, installs sinks, unclogs drains — fully reliable.'
    },
    {
      id: 3,
      title: 'AC Technician',
      description: 'Maintains and repairs air conditioning units — commercial & domestic.'
    },
    {
      id: 4,
      title: 'Carpentry & Woodwork',
      description: 'Custom furniture, door fittings, repairs, and renovations.'
    },
    {
      id: 5,
      title: 'Mobile Car Wash',
      description: 'We come to you! Interior and exterior car cleaning services.'
    },
    {
      id: 6,
      title: 'House Painting',
      description: 'Professional painting for interiors, exteriors, and feature walls.'
    },
    {
      id: 7,
      title: 'Graphic Design',
      description: 'Logos, posters, social media content — made with flair.'
    },
    {
      id: 8,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites built with React and WordPress.'
    },
    {
      id: 9,
      title: 'Tailoring & Alterations',
      description: 'Custom garments, suit fittings, and quick repairs.'
    },
    {
      id: 10,
      title: 'Salon & Grooming Services',
      description: 'Haircuts, braiding, beard trims, and makeup artistry.'
    },
    {
      id: 11,
      title: 'Tutoring - Math & Science',
      description: 'One-on-one tutoring for high school and college students.'
    },
    {
      id: 12,
      title: 'Photography & Videography',
      description: 'Event coverage, product shoots, and editing services.'
    }
  ]);

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.filter((skill) =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  document.title = "SkillLink - Main Page";

  const handleAddSkill = () => {
    const skillTitle = prompt("Enter the skill name:");
    const skillDescription = prompt("Enter the skill description:");
    const skillExperience = prompt("Enter the years of experience required:");
    const skillLevel = prompt("Enter the skill level (e.g., Beginner, Intermediate, Expert):");

    if (!skillTitle || !skillDescription || !skillExperience || !skillLevel) {
      alert("All fields are required to add a new skill.");
      return;
    }

    const newSkill = {
      id: skills.length + 1,
      title: skillTitle,
      description: skillDescription,
      experience: skillExperience,
      level: skillLevel
    };

   
    fetch('http://localhost:3000/skills', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSkill)
    })
      .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add the skill to the database.");
      }
      return response.json();
      })
      .then((data) => {
      setSkills([data, ...skills]);
      })
      .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while adding the skill.");
      });
    setSkills([newSkill, ...skills]);
  };

  return (
    <div className="app-container">
      <Sidebar
        skills={filteredSkills}
        onSelect={setSelectedSkill}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      <SkillDetails skill={selectedSkill} />
      <button className="floating-btn" onClick={handleAddSkill}>+ New Skill</button>
    </div>
  );
}

export default App;