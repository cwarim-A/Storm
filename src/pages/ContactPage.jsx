


import React from 'react'
import { motion } from "framer-motion"
import Navbar from '../Components/Navbar'
import ContactHeroSection from '../Components/ContactHeroSection'
import ContactForm from '../Components/ContactForm'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

// Reusable animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }
  }),
}

const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <ContactHeroSection />
      </motion.div>

      {/* Contact Form */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <ContactForm />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <CallToAction />
      </motion.div>

      <Footer />
    </>
  )
}

export default ContactPage
