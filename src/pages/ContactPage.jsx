import React from 'react'
import Navbar from '../Components/Navbar'
import ContactHeroSection from '../Components/ContactHeroSection'
import ContactForm from '../Components/ContactForm'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <ContactHeroSection/>
    <ContactForm/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default ContactPage