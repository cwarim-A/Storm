import React from 'react'
import Navbar from '../Components/Navbar'
import FaqHeroSection from '../Components/FaqHeroSection'
import Faq from '../Components/Faq'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

const FaqPage = () => {
  return (
    <>
      <Navbar/>
      <FaqHeroSection/>
      <Faq/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default FaqPage