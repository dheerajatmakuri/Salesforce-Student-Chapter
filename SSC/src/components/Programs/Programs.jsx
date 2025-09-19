// src/components/Programs/Programs.jsx

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Programs.css';
import linkedinIcon from '../../assets/linkedin.png';
import { useTeamMembers } from '../../hooks/useTeamMembers';

const responsive = {
  desktop:   { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet:    { breakpoint: { max: 1024, min: 600 },  items: 2 },
  mobile:    { breakpoint: { max: 600,  min: 0   }, items: 1 },
};

export default function Programs() {
  const { teamMembers, loading, error } = useTeamMembers();

  if (loading) {
    return (
      <div id="our Team" className="Our Team">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Loading team members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="our Team" className="Our Team">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Error loading team members: {error}</p>
        </div>
      </div>
    );
  }

  if (!teamMembers || teamMembers.length === 0) {
    return (
      <div id="our Team" className="Our Team">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>No team members found.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="our Team" className="Our Team">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows
        className="team-carousel"
      >
        {teamMembers.map((member, idx) => (
          <div key={idx} className="team-card">
            <div className="avatar-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
                loading="lazy"
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon"/>
                </a>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

