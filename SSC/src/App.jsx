import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import TeamAdmin from './components/Admin/TeamAdmin'
import { Analytics } from "@vercel/analytics/react"

// Main homepage component
const HomePage = () => (
  <>
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
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<TeamAdmin />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App
