import React from 'react'
import Navbar from '../Components/Navbar'
import PrivacyHeroSection from '../Components/PrivacyHeroSection'
import PrivacyPolicy from '../Components/PrivacyPolicy'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

const PrivacyPage = () => {
  return (
    <>
    <Navbar/>
    <PrivacyHeroSection/>
    <PrivacyPolicy/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default PrivacyPage