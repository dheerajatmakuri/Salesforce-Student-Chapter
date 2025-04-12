import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to the Salesforce Student Chapter Club at UTD</h1>
        <p>Empowering the next generation of Salesforce professionals through hands-on learning, collaboration, and innovation.</p>
        <br />
        <a href="https://forms.gle/7CA9rfABRKNWhQgT9" target="_blank" rel="noopener noreferrer">
          <button className='btn'> Become a Member <img src={dark_arrow} alt="" /></button>
        </a>
      </div>
    </div>
  )
}

export default Hero
