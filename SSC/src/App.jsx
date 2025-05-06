import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Team' title=''/>
        <Programs/>
        <br /><br /><br /><br /><br />
        <UpcomingEvents/>
        <About/>
        <Title subTitle='A Glimpse into Our Events' title='Gallery' />
        <Campus/>
        <Title subTitle='Hear from Our Community' title='Student Testimonials' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>
      <Analytics />
    </div>
  )
}

export default App
