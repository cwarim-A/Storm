import React from 'react'

const PrivacyHeroSection = () => {
  return (
      <div
          className="relative bg-cover bg-center h-[400px] md:h-[600px] text-white flex items-center"
          style={{ backgroundImage: "url('/privacy-background-image.png')" }}
      >
          {/* Decorative Overlay Image */}
          <div
              className="absolute inset-0 bg-no-repeat bg-right-top md:bg-left-[40%] opacity-90"
              style={{ backgroundImage: "url('/privacy-svg.png')" }}
          />

          {/* Content Section */}
          <div className="absolute z-10 top-[40%] right-5 md:right-[7%] max-w-xl px-4 text-right">
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="py-5 text-sm md:text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. enim minim veniam, quis nostrud exercitation adispaci
              </p>
          </div>

      </div>
  )
}

export default PrivacyHeroSection