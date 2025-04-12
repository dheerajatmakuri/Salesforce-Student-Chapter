import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            {/* <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/> */}
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TH1fVOr0PO8?si=kQ1j3MWHCpMAFlnD&amp;rel=0" 
                title="YouTube video player" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
        <div className="about-right">
          <h1>About Salesforce Student Chapter</h1>
          <h2>Nurturing Tomorrow's Salesforce Leaders Today</h2>
          <p>The Salesforce Student Chapter at The University of Texas at Dallas is a student-led organization focused on educating, empowering, and connecting students who are passionate about Salesforce technologies, CRM, and cloud computing.</p>
          <p>Our mission is to provide opportunities for students to gain real-world Salesforce experience, network with industry professionals, and build skills that translate to career success.</p>
          <p>Whether you're new to Salesforce or already certified, there's a place for you in our community. Explore workshops, events, and certification paths with us!</p>
        </div>
    </div>
  )
}

export default About
