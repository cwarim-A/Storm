// import React from 'react'
// import Navbar from '../Components/Navbar'
// import AboutUsHeroSection from '../Components/AboutUsHeroSection'
// import Aim from '../Components/Aim'
// import OurMission from '../Components/OurMission'
// import CallToAction from '../Components/CallToAction'
// import Footer from '../Components/Footer'

// const AboutPage = () => {
//   return (
//     <>
//     <Navbar/>
//     <AboutUsHeroSection/>
//     <Aim/>
//     <OurMission/>
//     <CallToAction/>
//     <Footer/>
//     </>
//   )
// }

// export default AboutPage


import React from 'react'
import { motion } from "framer-motion"
import Navbar from '../Components/Navbar'
import AboutUsHeroSection from '../Components/AboutUsHeroSection'
import Aim from '../Components/Aim'
import OurMission from '../Components/OurMission'
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

const AboutPage = () => {
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
        <AboutUsHeroSection />
      </motion.div>

      {/* Aim */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Aim />
      </motion.div>

      {/* Our Mission */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <OurMission />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        custom={3}
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

export default AboutPage
