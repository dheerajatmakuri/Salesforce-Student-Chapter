import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Programs.css';
import linkedinIcon from '../../assets/linkedin.png';

// Statically import team member images
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
  { firstName: 'Mr. Moyez', lastName: 'Thanawalla', role: 'Faculty Advisor', image: professor, linkedin: 'https://www.linkedin.com/in/moyezthanawalla/' },
  { firstName: 'Shivani', lastName: 'Garg', role: 'President', image: Shivani, linkedin: 'https://www.linkedin.com/in/shivaniqa/' },
  { firstName: 'Gowtham', lastName: 'Siddegowda', role: 'Vice President', image: Gowtham, linkedin: 'https://www.linkedin.com/in/gsidgowda/' },
  { firstName: 'Sai Keerthi', lastName: 'Motupalli', role: 'General Secretary', image: SaiKeerthi, linkedin: 'https://www.linkedin.com/in/sai-keerthi-motupalli/' },
  { firstName: 'Humaira', lastName: 'Afreen', role: 'Marketing Lead', image: Humaira, linkedin: 'https://www.linkedin.com/in/humaira-afreen/' },
  { firstName: 'Dheeraj', lastName: 'Atmakuri', role: 'Marketing Officer', image: Dheeraj, linkedin: 'https://www.linkedin.com/in/dheeraj-atmakuri/' },
  { firstName: 'Shaheen', lastName: 'Bawajan', role: 'Marketing Officer', image: Shaheen, linkedin: 'https://www.linkedin.com/in/shaheen-bawajan/' },
  { firstName: 'Sahil', lastName: 'Waykole', role: 'SOC Lead', image: Sahil, linkedin: 'https://www.linkedin.com/in/sahil-waykole/' },
  { firstName: 'Tejaswini', lastName: 'Jayagopi', role: 'SOC Officer', image: Tejaswini, linkedin: 'https://www.linkedin.com/in/tejaswini-jayagopi-8b2695b0/' },
  { firstName: 'Sadashiv', lastName: 'Mhaskar', role: 'SOC Officer', image: Sadashiv, linkedin: 'https://www.linkedin.com/in/sadashiv-mhaskar/' },
  { firstName: 'Vishal Rathod', lastName: 'Ramavath', role: 'SOC Officer', image: Vishal, linkedin: 'https://www.linkedin.com/in/vishalrathodramavath/' },
  { firstName: 'Harshavelu', lastName: 'Irrigisetty', role: 'Events Lead', image: Harshavelu, linkedin: 'https://www.linkedin.com/in/irrigisettyharshavelu/' },
  { firstName: 'Jaladi', lastName: 'Manaswita', role: 'Events Officer', image: Manaswita, linkedin: 'https://www.linkedin.com/in/jaladi-manaswitha/' },
  { firstName: 'Romit', lastName: 'Jain', role: 'Events Officer', image: Romit, linkedin: 'https://www.linkedin.com/in/romit-jain07/' },
  { firstName: 'Prathik', lastName: 'Raju', role: 'Events Officer', image: Prathik, linkedin: 'https://www.linkedin.com/in/prathik-raju/' },
  { firstName: 'Sai Navya', lastName: 'Asam', role: 'Events Officer', image: Navya, linkedin: 'https://www.linkedin.com/in/navyaasam/' },
  { firstName: 'Abdullah       ', lastName: '', role: 'Treasurer', image: Abdullah, linkedin: 'https://www.linkedin.com/in/abdullah-tx/' },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

const Programs = () => {
  return (
    <div id="Our Team" className="programs team-section">
      <h2>Executive Board</h2>
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        arrows={true}
        className="team-carousel"
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.image}
              alt={`${member.firstName} ${member.lastName}`}
              className="team-photo"
              loading="lazy"
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
      </Carousel>
    </div>
  );
};

export default Programs;
