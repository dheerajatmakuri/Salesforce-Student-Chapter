import React, { useRef } from 'react';
import './Programs.css';
import linkedinIcon from '../../assets/linkedin.png';

const images = import.meta.glob('../../assets/*.png', { eager: true });

const getImage = (imageName) => {
  const match = Object.entries(images).find(([path]) =>
    path.includes(imageName)
  );
  return match ? match[1].default : null;
};

const teamMembers = [
  { firstName: 'Shivani', lastName: 'Garg', role: 'President', image: 'Shivani.png', linkedin: 'https://www.linkedin.com/in/shivaniqa/' },
  { firstName: 'Gowtham', lastName: 'Siddegowda', role: 'Vice President', image: 'gowtham.png', linkedin: 'https://www.linkedin.com/in/gsidgowda/' },
  { firstName: 'Sai Keerthi', lastName: 'Motupalli', role: 'General Secretary', image: 'SaiKeerthi_Motupalli.png', linkedin: 'https://www.linkedin.com/in/sai-keerthi-motupalli/' },
  { firstName: 'Humaira', lastName: 'Afreen', role: 'Marketing Lead', image: 'humaira.png', linkedin: 'https://www.linkedin.com/in/humaira-afreen/' },
  { firstName: 'Dheeraj', lastName: 'Atmakuri', role: 'Marketing Officer', image: 'dheeraj.png', linkedin: 'https://www.linkedin.com/in/dheeraj-atmakuri/' },
  { firstName: 'Shaheen', lastName: 'Bawajan', role: 'Marketing Officer', image: 'shaheen.png', linkedin: 'https://www.linkedin.com/in/shaheen-bawajan/' },
  { firstName: 'Sahil', lastName: 'Waykole', role: 'SOC Lead', image: 'Sahil_Waykole.png', linkedin: 'https://www.linkedin.com/in/sahil-waykole/' },
  { firstName: 'Tejaswini', lastName: 'Jayagopi', role: 'SOC Officer', image: 'Tejaswini_Jayagopi.png', linkedin: 'https://www.linkedin.com/in/tejaswini-jayagopi-8b2695b0/' },
  { firstName: 'Sadashiv', lastName: 'Mhaskar', role: 'SOC Officer', image: 'Sadashiv_Mhaskar.png', linkedin: 'https://www.linkedin.com/in/sadashiv-mhaskar/' },
  { firstName: 'Vishal Rathod', lastName: 'Ramavath', role: 'SOC Officer', image: 'vishal.png', linkedin: 'https://www.linkedin.com/in/vishalrathodramavath/' },
  { firstName: 'Harshavelu', lastName: 'Irrigisetty', role: 'Events Lead', image: 'Harshavelu.png', linkedin: 'https://www.linkedin.com/in/irrigisettyharshavelu/' },
  { firstName: 'Jaladi', lastName: 'Manaswita', role: 'Events Officer', image: 'manaswitha_jaladi.png', linkedin: 'https://www.linkedin.com/in/jaladi-manaswitha/' },
  { firstName: 'Romit', lastName: 'Jain', role: 'Events Officer', image: 'Romit_Jain.png', linkedin: 'https://www.linkedin.com/in/romit-jain07/' },
  { firstName: 'Prathik', lastName: 'Raju', role: 'Events Officer', image: 'Prathik.png', linkedin: 'https://www.linkedin.com/in/prathik-raju/' },
  { firstName: 'Sai Navya', lastName: 'Asam', role: 'Events Officer', image: 'navya.png', linkedin: 'https://www.linkedin.com/in/navyaasam/' },
  { firstName: 'Abdullah', lastName: '', role: 'Treasurer', image: 'Abdullah.png', linkedin: 'https://www.linkedin.com/in/abdullah-tx/' },
];

const Programs = () => {
  const scrollRef = useRef(null);
  const cardWidth = 180; // Width + margin

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="Our Team" className="programs team-section">
      <h2>Executive Board</h2>
      <div className="carousel-controls">
        <button onClick={() => handleScroll('left')} className="arrow-btn">‹</button>
        <div className="team-scroll" ref={scrollRef}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={getImage(member.image)}
                alt={`${member.firstName} ${member.lastName}`}
                className="team-photo"
              />
              <h3>
                {member.firstName}<br />
                {member.lastName}
              </h3>
              <p>{member.role}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => handleScroll('right')} className="arrow-btn">›</button>
      </div>
    </div>
  );
};

export default Programs;
