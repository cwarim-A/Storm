import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import HowItWorks from '../Components/HowItWorks'
import Benefits from '../Components/Benefits'
import OurServices from '../Components/OurServices'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <HowItWorks />
          <Benefits />
          <OurServices />
          <CallToAction />
          <Footer />
    </>
  )
}

export default Homepage