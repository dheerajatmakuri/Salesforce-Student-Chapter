import React, { useState, useEffect, useRef } from 'react';
import './Programs.css';
import linkedinIcon from '../../assets/linkedin.png';

// Create a team member data array without images
const teamMembersData = [
  { firstName: 'Mr. Moyez', lastName: 'Thanawalla', role: 'Faculty Advisor', imagePath: 'professor.png', linkedin: 'https://www.linkedin.com/in/moyezthanawalla/' },
  { firstName: 'Shivani', lastName: 'Garg', role: 'President', imagePath: 'Shivani.png', linkedin: 'https://www.linkedin.com/in/shivaniqa/' },
  { firstName: 'Gowtham', lastName: 'Siddegowda', role: 'Vice President', imagePath: 'gowtham.png', linkedin: 'https://www.linkedin.com/in/gsidgowda/' },
  { firstName: 'Sai Keerthi', lastName: 'Motupalli', role: 'General Secretary', imagePath: 'SaiKeerthi_Motupalli.png', linkedin: 'https://www.linkedin.com/in/sai-keerthi-motupalli/' },
  { firstName: 'Humaira', lastName: 'Afreen', role: 'Marketing Lead', imagePath: 'humaira.png', linkedin: 'https://www.linkedin.com/in/humaira-afreen/' },
  { firstName: 'Dheeraj', lastName: 'Atmakuri', role: 'Marketing Officer', imagePath: 'dheeraj.png', linkedin: 'https://www.linkedin.com/in/dheeraj-atmakuri/' },
  { firstName: 'Shaheen', lastName: 'Bawajan', role: 'Marketing Officer', imagePath: 'shaheen.png', linkedin: 'https://www.linkedin.com/in/shaheen-bawajan/' },
  { firstName: 'Sahil', lastName: 'Waykole', role: 'SOC Lead', imagePath: 'Sahil_Waykole.png', linkedin: 'https://www.linkedin.com/in/sahil-waykole/' },
  { firstName: 'Tejaswini', lastName: 'Jayagopi', role: 'SOC Officer', imagePath: 'Tejaswini_Jayagopi.png', linkedin: 'https://www.linkedin.com/in/tejaswini-jayagopi-8b2695b0/' },
  { firstName: 'Sadashiv', lastName: 'Mhaskar', role: 'SOC Officer', imagePath: 'Sadashiv_Mhaskar.png', linkedin: 'https://www.linkedin.com/in/sadashiv-mhaskar/' },
  { firstName: 'Vishal Rathod', lastName: 'Ramavath', role: 'SOC Officer', imagePath: 'vishal.png', linkedin: 'https://www.linkedin.com/in/vishalrathodramavath/' },
  { firstName: 'Harshavelu', lastName: 'Irrigisetty', role: 'Events Lead', imagePath: 'Harshavelu.png', linkedin: 'https://www.linkedin.com/in/irrigisettyharshavelu/' },
  { firstName: 'Jaladi', lastName: 'Manaswita', role: 'Events Officer', imagePath: 'manaswitha_jaladi.png', linkedin: 'https://www.linkedin.com/in/jaladi-manaswitha/' },
  { firstName: 'Romit', lastName: 'Jain', role: 'Events Officer', imagePath: 'Romit_Jain.png', linkedin: 'https://www.linkedin.com/in/romit-jain07/' },
  { firstName: 'Prathik', lastName: 'Raju', role: 'Events Officer', imagePath: 'Prathik.png', linkedin: 'https://www.linkedin.com/in/prathik-raju/' },
  { firstName: 'Sai Navya', lastName: 'Asam', role: 'Events Officer', imagePath: 'navya.png', linkedin: 'https://www.linkedin.com/in/navyaasam/' },
  { firstName: 'Abdullah', lastName: '', role: 'Treasurer', imagePath: 'Abdullah.png', linkedin: 'https://www.linkedin.com/in/abdullah-tx/' },
];

const TeamMemberCard = ({ member }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Dynamic import of image
    import(`../../assets/${member.imagePath}`)
      .then(image => {
        setImageSrc(image.default);
        setImageLoaded(true);
      })
      .catch(err => console.error(`Failed to load image for ${member.firstName}:`, err));
  }, [member.imagePath, member.firstName]);

  return (
    <div className="team-card">
      {imageLoaded ? (
        <img
          src={imageSrc}
          alt={`${member.firstName} ${member.lastName}`}
          className="team-photo"
          loading="lazy"
        />
      ) : (
        <div className="image-placeholder"></div>
      )}
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
  );
};

const Programs = () => {
  const scrollRef = useRef(null);
  const cardWidth = 180; // Adjust to match your CSS
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2,
        behavior: 'smooth'
      });
      
      // Update visible range
      updateVisibleMembers();
    }
  };

  // Update visible members based on scroll position
  const updateVisibleMembers = () => {
    if (!scrollRef.current) return;
    
    const scrollPosition = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.clientWidth;
    
    // Calculate approximately which items are visible
    const startIndex = Math.max(0, Math.floor(scrollPosition / cardWidth) - 1);
    const visibleCount = Math.ceil(containerWidth / cardWidth) + 2; // Add buffer
    const endIndex = Math.min(teamMembersData.length, startIndex + visibleCount);
    
    setVisibleRange({ start: startIndex, end: endIndex });
  };

  // Set up scroll event listener
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Initialize visible members
      updateVisibleMembers();
      
      // Add scroll event listener
      const handleScrollEvent = () => {
        requestAnimationFrame(updateVisibleMembers);
      };
      
      scrollContainer.addEventListener('scroll', handleScrollEvent);
      
      // Cleanup
      return () => {
        scrollContainer.removeEventListener('scroll', handleScrollEvent);
      };
    }
  }, []);

  // Get only the visible team members plus some buffer
  const visibleMembers = teamMembersData.slice(
    Math.max(0, visibleRange.start - 2),
    Math.min(teamMembersData.length, visibleRange.end + 2)
  );

  return (
    <div id="Our Team" className="programs team-section">
      <h2>Executive Board</h2>
      <div className="carousel-controls">
        <button onClick={() => handleScroll('left')} className="arrow-btn">‹</button>
        <div className="team-scroll" ref={scrollRef}>
          <div className="team-container" style={{ width: `${teamMembersData.length * cardWidth}px` }}>
            {teamMembersData.map((member, index) => (
              <div 
                key={index} 
                className="team-card-wrapper"
                style={{ 
                  width: `${cardWidth}px`,
                  visibility: (index >= visibleRange.start - 2 && index <= visibleRange.end + 2) ? 'visible' : 'hidden'
                }}
              >
                {(index >= visibleRange.start - 2 && index <= visibleRange.end + 2) && (
                  <TeamMemberCard member={member} />
                )}
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => handleScroll('right')} className="arrow-btn">›</button>
      </div>
    </div>
  );
};

export default Programs;