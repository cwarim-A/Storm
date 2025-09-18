import React from 'react'

const ContactHeroSection = () => {
  return (
    
      <div
          className="relative bg-cover bg-center h-[400px] md:h-[600px] text-white flex items-center"
          style={{ backgroundImage: "url('/contact-hero-banner.png')" }}
      >
          {/* Decorative Overlay Image */}
          <div
              className="absolute inset-0 bg-no-repeat bg-right-top md:bg-left-[40%] opacity-90"
              style={{ backgroundImage: "url('/contact-svg.png')" }}
          />

          {/* Content Section */}
          <div className="absolute z-10 top-[40%] right-5 md:right-[7%] max-w-lg  px-4 md:text-right text-left">
              <h1 className="text-3xl md:text-4xl font-bold">Contact Storm</h1>
              <p className="py-5 text-sm md:text-base leading-normal md:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. <br />
                  Enim minim veniam, quis nostrud exercitation adispaci.
              </p>
          </div>

      </div>

  )
}

export default ContactHeroSection