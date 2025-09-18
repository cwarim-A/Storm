import React from 'react'

const AboutUsHeroSection = () => {
    return (
        <div className='bg-cover bg-center h-[400px] md:h-[600px] relative text-white' style={{ backgroundImage: "url('/about-us-hero-image.jpg')", }}>
            <div className='absolute inset-0 bg-center bg-no-repeat top-0 right-0 md:left-[10%] lg:left-[44%] ' style={{ backgroundImage: "url('/about-us-svg.png')", }} />
            <div className='absolute z-1  top-[40%] right-3 md:right-[7%] '>
                <h1 className='text-4xl text-right font-bold'>About Storm</h1>
                <p className='py-7  text-right md:text-center text-sm capitalize'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br className='hidden md:block' /> do eius tempor incididunt ut labore et dolore magna aliqua. <br className='hidden md:block' /> Enim minim veniam, quis nostrud exercitation adispaci</p>
            </div>
        </div>
    )
}

export default AboutUsHeroSection