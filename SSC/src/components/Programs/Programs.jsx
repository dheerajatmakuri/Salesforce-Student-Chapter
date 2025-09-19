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
import Varsha_Singh from '../../assets/Varsha_Singh.png';
import Noorin from '../../assets/Noorin.png';
import Rashi_Jha from '../../assets/Rashi_Jha.png';
import Sahana_Mecheri from '../../assets/Sahana_Mecheri.png';
import Vidhi from '../../assets/Vidhi.png';
import Shaheen from '../../assets/shaheen.png';
// import Indrani from '../../assets/Indrani.png';
import Mahesh from '../../assets/Mahesh.png';
// import Abhinav from '../../assets/Abhinav.png';
import Mohammad_Fadil_Khan from '../../assets/Mohammad_Fadil_Khan.png';
import Gurleen_kaur_Khalsa from '../../assets/Gurleen_kaur_Khalsa.png';
import Vishal from '../../assets/vishal.png';
import Harshavelu from '../../assets/Harshavelu.png';
import Romit from '../../assets/Romit_Jain.png';
import Prathik from '../../assets/Prathik.png';
import Navya from '../../assets/navya.png';
// import Yogesh_Punugunta from '../../assets/Yogesh_Punugunta.png';
import Abdullah from '../../assets/Abdullah.png';
import Tejaswini_Jayagopi from '../../assets/Tejaswini_Jayagopi.png';
import Parth_Rajpara from '../../assets/Parth_Rajpara.png';

const teamMembers = [
  { name: 'Mr. Moyez Thanawalla', role: 'Faculty Advisor', image: professor, linkedin: 'https://www.linkedin.com/in/moyezthanawalla/' },
  { name: 'Shivani Garg', role: 'President', image: Shivani, linkedin: 'https://www.linkedin.com/in/shivaniqa/' },
  { name: 'Gowtham Siddegowda', role: 'Vice President', image: Gowtham, linkedin: 'https://www.linkedin.com/in/gsidgowda/' },
  { name: 'Sai Keerthi Motupalli', role: 'General Secretary', image: SaiKeerthi, linkedin: 'https://www.linkedin.com/in/sai-keerthi-motupalli/' },
  { name: 'Varsha Singh', role: 'Marketing Lead', image: Varsha_Singh, linkedin: 'https://www.linkedin.com/in/varsha-singh0403/' },
  { name: 'Noorin Zuleqa ', role: 'Marketing Officer', image: Noorin, linkedin: '' },
  { name: 'Rashi Jha', role: 'Marketing Officer', image: Rashi_Jha, linkedin: '' },
  { name: 'Sahana Mecheri', role: 'Marketing Officer', image: Sahana_Mecheri, linkedin: 'https://www.linkedin.com/in/sahana-mecheri-3248a21b8/' },
  { name: 'Vidhi Jaju', role: 'Marketing Officer', image: Vidhi, linkedin: '' },
  { name: 'Shaheen Bawajan', role: 'Marketing Officer', image: Shaheen, linkedin: 'https://www.linkedin.com/in/shaheen-bawajan/' },
  { name: 'Indrani Borra', role: 'Web Developer', image: '/src/assets/Indrani.png', linkedin: 'https://www.linkedin.com/in/indrani09/' },
  { name: 'Mahesh Gorle', role: 'SOC Lead', image: Mahesh, linkedin: '' },
  // { name: 'Abhinav Kumar', role: 'SOC Officer', image: Abhinav, linkedin: '' },
  { name: 'Mohammad Fadil Khan', role: 'SOC Officer', image: Mohammad_Fadil_Khan, linkedin: '' },
  { name: 'Gurleen Kaur Khalse', role: 'SOC Officer', image: Gurleen_kaur_Khalsa, linkedin: '' },
  { name: 'Vishal Rathod Ramavath', role: 'SOC Officer', image: Vishal, linkedin: 'https://www.linkedin.com/in/vishalrathodramavath/' },
  { name: 'Harshavelu Irrigisetty', role: 'Events Lead', image: Harshavelu, linkedin: 'https://www.linkedin.com/in/irrigisettyharshavelu/' },
  { name: 'Romit Jain', role: 'Events Officer', image: Romit, linkedin: 'https://www.linkedin.com/in/romit-jain07/' },
  { name: 'Prathik Raju', role: 'Events Officer', image: Prathik, linkedin: 'https://www.linkedin.com/in/prathik-raju/' },
  { name: 'Sai Navya Asam', role: 'Events Officer', image: Navya, linkedin: 'https://www.linkedin.com/in/navyaasam/' },
  // { name: 'Yogesh Punugunta', role: 'Events Officer', image: Yogesh_Punugunta, linkedin: '' },
  { name: 'Abdullah', role: 'Treasurer', image: Abdullah, linkedin: 'https://www.linkedin.com/in/abdullah-tx/' },
  { name: 'Tejaswini Jayagopi', role: 'Treasurer', image: Tejaswini_Jayagopi, linkedin: '' },
  { name: 'Parth Rajpara', role: 'Treasurer', image: Parth_Rajpara, linkedin: 'https://www.linkedin.com/in/parthrajpara/' },
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

