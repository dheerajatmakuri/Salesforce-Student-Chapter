// src/components/Programs/Programs.jsx

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Programs.css';
import linkedinIcon from '../../assets/linkedin.png';

// Team images
import professor from '../../assets/professor.png';
import Shivani from '../../assets/Shivani.png';
import Gowtham from '../../assets/gowtham.png';
import SaiKeerthi from '../../assets/SaiKeerthi_Motupalli.png';
import Humaira from '../../assets/humaira.png';
import Dheeraj from '../../assets/dheeraj.png';
import Shaheen from '../../assets/shaheen.png';
import Sahil from '../../assets/Sahil_Waykole.png';
import Tejaswini from '../../assets/Tejaswini_Jayagopi.png';
import Sadashiv from '../../assets/Sadashiv_Mhaskar.png';
import Vishal from '../../assets/vishal.png';
import Harshavelu from '../../assets/Harshavelu.png';
import Manaswita from '../../assets/manaswitha_jaladi.png';
import Romit from '../../assets/Romit_Jain.png';
import Prathik from '../../assets/Prathik.png';
import Navya from '../../assets/navya.png';
import Abdullah from '../../assets/Abdullah.png';

const teamMembers = [
  { name: 'Mr. Moyez Thanawalla', role: 'Faculty Advisor', image: professor, linkedin: 'https://www.linkedin.com/in/moyezthanawalla/' },
  { name: 'Shivani Garg', role: 'President', image: Shivani, linkedin: 'https://www.linkedin.com/in/shivaniqa/' },
  { name: 'Gowtham Siddegowda', role: 'Vice President', image: Gowtham, linkedin: 'https://www.linkedin.com/in/gsidgowda/' },
  { name: 'Sai Keerthi Motupalli', role: 'General Secretary', image: SaiKeerthi, linkedin: 'https://www.linkedin.com/in/sai-keerthi-motupalli/' },
  { name: 'Humaira Afreen', role: 'Marketing Lead', image: Humaira, linkedin: 'https://www.linkedin.com/in/humaira-afreen/' },
  { name: 'Dheeraj Atmakuri', role: 'Marketing Officer', image: Dheeraj, linkedin: 'https://www.linkedin.com/in/dheeraj-atmakuri/' },
  { name: 'Shaheen Bawajan', role: 'Marketing Officer', image: Shaheen, linkedin: 'https://www.linkedin.com/in/shaheen-bawajan/' },
  { name: 'Sahil Waykole', role: 'SOC Lead', image: Sahil, linkedin: 'https://www.linkedin.com/in/sahil-waykole/' },
  { name: 'Tejaswini Jayagopi', role: 'SOC Officer', image: Tejaswini, linkedin: 'https://www.linkedin.com/in/tejaswini-jayagopi-8b2695b0/' },
  { name: 'Sadashiv Mhaskar', role: 'SOC Officer', image: Sadashiv, linkedin: 'https://www.linkedin.com/in/sadashiv-mhaskar/' },
  { name: 'Vishal Rathod Ramavath', role: 'SOC Officer', image: Vishal, linkedin: 'https://www.linkedin.com/in/vishalrathodramavath/' },
  { name: 'Harshavelu Irrigisetty', role: 'Events Lead', image: Harshavelu, linkedin: 'https://www.linkedin.com/in/irrigisettyharshavelu/' },
  { name: 'Manaswita Jaladi', role: 'Events Officer', image: Manaswita, linkedin: 'https://www.linkedin.com/in/jaladi-manaswitha/' },
  { name: 'Romit Jain', role: 'Events Officer', image: Romit, linkedin: 'https://www.linkedin.com/in/romit-jain07/' },
  { name: 'Prathik Raju', role: 'Events Officer', image: Prathik, linkedin: 'https://www.linkedin.com/in/prathik-raju/' },
  { name: 'Sai Navya Asam', role: 'Events Officer', image: Navya, linkedin: 'https://www.linkedin.com/in/navyaasam/' },
  { name: 'Abdullah', role: 'Treasurer', image: Abdullah, linkedin: 'https://www.linkedin.com/in/abdullah-tx/' },
];

const responsive = {
  desktop:   { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet:    { breakpoint: { max: 1024, min: 600 },  items: 2 },
  mobile:    { breakpoint: { max: 600,  min: 0   }, items: 1 },
};

export default function Programs() {
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

