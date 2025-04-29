import React, { useEffect, useState } from 'react';
import './Navbar.css';
import utd from '../../assets/u3.png';
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={utd} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='Our Team' smooth={true} offset={-260} duration={500}>Our Team</ScrollLink></li>
        <li><ScrollLink to='events' smooth={true} offset={-150} duration={500}>Events</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-140} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='gallery' smooth={true} offset={-220} duration={500}>Gallery</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-240} duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-200} duration={500} className='btn'>Contact Us</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
