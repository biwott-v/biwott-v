import React, { useState } from 'react';
import ProviderCard from './ProviderCard';
import ReviewCard from './ReviewCard';

function SkillDetails({ skill }) {
  const [activeTab, setActiveTab] = useState('details');

  if (!skill) {
    return (
      <div className="skill-details empty-state">
        <h2>Select a Skill</h2>
        <p>Choose a skill from the sidebar to view details</p>
        <div className="placeholder-icon">👈</div>
      </div>
    );
  }

  // example providers
  const providers = [
    { id: 1, name: "Alex Johnson", rating: 4.8, reviews: 124, location: "New York, NY", skills: [skill.title, "Installation"] },
    { id: 2, name: "Maria Garcia", rating: 4.9, reviews: 89, location: "Brooklyn, NY", skills: [skill.title, "Repairs"] }
  ];

  // example reviews 
  const reviews = [
    { userId: 1, userName: "James Wilson", rating: 5, date: "2023-11-05", content: "Fantastic work! Would definitely hire again for any electrical needs." },
    { userId: 2, userName: "Emma Thompson", rating: 4, date: "2023-10-22", content: "Good service, arrived on time and completed the job efficiently." }
  ];

  return (
    <div className="skill-details">
      <div className="skill-header">
        <h2>{skill.title}</h2>
        <div className="price-badge">$50-100/hr</div>
      </div>
      
      <div className="tabs">
        <button 
          className={activeTab === 'details' ? 'active' : ''}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button 
          className={activeTab === 'providers' ? 'active' : ''}
          onClick={() => setActiveTab('providers')}
        >
          Providers
        </button>
        <button 
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      
      {activeTab === 'details' && (
        <div className="tab-content">
          <p>{skill.description}</p>
          <div className="skill-meta">
            <div className="meta-item">
              <span className="meta-label">Average Response Time:</span>
              <span className="meta-value">2 hours</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Service Area:</span>
              <span className="meta-value">City-wide</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Availability:</span>
              <span className="meta-value">Mon-Fri, 9am-6pm</span>
            </div>
          </div>
          <button className="book-button">Book This Service</button>
        </div>
      )}
      
      {activeTab === 'providers' && (
        <div className="tab-content">
          <h3>Available Service Providers</h3>
          <div className="providers-list">
            {providers.map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'reviews' && (
        <div className="tab-content">
          <h3>Customer Reviews</h3>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillDetails;