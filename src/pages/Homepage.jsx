



import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import HowItWorks from "../Components/HowItWorks";
import Benefits from "../Components/Benefits";
import OurServices from "../Components/OurServices";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Homepage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section - animates immediately on load */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      {/* How It Works */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HowItWorks />
      </motion.section>

      {/* Benefits */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Benefits />
      </motion.section>

      {/* Our Services */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OurServices />
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CallToAction />
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.footer>
    </>
  );
};

export default Homepage;
