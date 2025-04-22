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
    }
  ]);

  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="app-container">
      <Sidebar skills={skills} onSelect={setSelectedSkill} />
      <SkillDetails skill={selectedSkill} />
    </div>
  );
}

export default App;