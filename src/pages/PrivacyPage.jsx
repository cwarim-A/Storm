// import React from 'react'
// import Navbar from '../Components/Navbar'
// import PrivacyHeroSection from '../Components/PrivacyHeroSection'
// import PrivacyPolicy from '../Components/PrivacyPolicy'
// import CallToAction from '../Components/CallToAction'
// import Footer from '../Components/Footer'

// const PrivacyPage = () => {
//   return (
//     <>
//     <Navbar/>
//     <PrivacyHeroSection/>
//     <PrivacyPolicy/>
//     <CallToAction/>
//     <Footer/>
//     </>
//   )
// }

// export default PrivacyPage

import React from 'react'
import { motion } from "framer-motion"
import Navbar from '../Components/Navbar'
import PrivacyHeroSection from '../Components/PrivacyHeroSection'
import PrivacyPolicy from '../Components/PrivacyPolicy'
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

const PrivacyPage = () => {
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
        <PrivacyHeroSection />
      </motion.div>

      {/* Privacy Policy */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <PrivacyPolicy />
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

      {/* Footer */}
      <motion.footer
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Footer />
      </motion.footer>
    </>
  )
}

export default PrivacyPage
