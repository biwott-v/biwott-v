import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import SkillDetails from './SkillDetails';
import Login from './Login';
import Home from './Home';
import './index.css';

function App() {
  const [skills, setSkills] = useState([
    { id: 1, title: 'Electrician Services', description: 'Expert in wiring, sockets, lighting, and home installations.' },
    { id: 2, title: 'Plumbing Services', description: 'Fixing leaks, pipe installations, and bathroom fittings.' },
    { id: 3, title: 'AC Repair', description: 'Installation, maintenance, and repair of air conditioning units.' },
    { id: 4, title: 'Carpentry', description: 'Custom furniture, repairs, and woodworking projects.' },
    { id: 5, title: 'Auto Mechanic', description: 'Vehicle maintenance, repairs, and diagnostics.' },
    { id: 6, title: 'Painting Services', description: 'Interior and exterior painting for homes and offices.' },
    { id: 7, title: 'Graphic Design', description: 'Logos, branding, and digital artwork creation.' },
    { id: 8, title: 'Web Development', description: 'Website creation and application development.' },
    { id: 9, title: 'Tailoring', description: 'Custom clothing and alterations.' },
    { id: 10, title: 'Hair Styling', description: 'Haircuts, coloring, and professional styling.' },
    { id: 11, title: 'Tutoring', description: 'Academic support in various subjects.' },
    { id: 12, title: 'Photography', description: 'Professional photo sessions and events coverage.' },
    { id: 13, title: 'Music Lessons', description: 'Instrument and vocal training.' },
    { id: 14, title: 'Gardening', description: 'Landscaping and plant care services.' },
    { id: 15, title: 'Child Care', description: 'Professional babysitting and child minding.' }
  ]);
  
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const addNewSkill = () => {
    const newId = skills.length + 1;
    setSkills([...skills, {
      id: newId,
      title: `New Skill ${newId}`,
      description: 'This is a placeholder for a new skill.'
    }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={!isAuthenticated ? 
            <Login onLogin={handleLogin} /> : 
            <Navigate to="/dashboard" replace />} 
        />
        
        <Route 
          path="/dashboard/*" 
          element={isAuthenticated ? (
            <div className="app-container">
              <Sidebar
                skills={skills.filter((skill) =>
                  skill.title.toLowerCase().includes(searchTerm.toLowerCase())
                )}
                onSelect={setSelectedSkill}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                user={user}
                onLogout={handleLogout}
              />
              
              <Routes>
                <Route path="/" element={<SkillDetails skill={selectedSkill} />} />
                <Route path="/services" element={<SkillDetails skill={selectedSkill} />} />
                <Route path="/services/:id" element={<SkillDetails skill={selectedSkill} />} />
              </Routes>
              
              <button className="floating-btn" onClick={addNewSkill}>
                + New Skill
              </button>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )} 
        />
      </Routes>
    </Router>
  );
}

export default App;