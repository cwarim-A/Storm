import React from 'react'

const AboutUsHeroSection = () => {
    return (
        <div className='bg-cover bg-center h-[400px] md:h-[600px] relative text-white' style={{ backgroundImage: "url('/about-us-hero-image.jpg')", }}>
            <div className='absolute inset-0 bg-center bg-no-repeat top-0 right-0 md:left-[10%] lg:left-[44%] ' style={{ backgroundImage: "url('/about-us-svg.png')", }} />
            {/* <div className='absolute z-1  top-[40%] right-0 md:right-[7%] '>
                <h1 className='text-4xl text-right font-bold'>About Storm</h1>
                <p className='py-7  text-right md:text-center text-[14px] capitalize'>
                    STORM is a next-generation debate platform built to <br className='hidden md:block' /> transform how people  share ideas, challenge opinions, and engage in meaningful discussions.
              </p>
            </div> */}
            <div className="absolute inset-0 flex flex-col justify-center px-5  lg:px-20 
    text-right md:text-center lg:text-right
    items-end md:items-center lg:items-end
    
">
                <h1 className="text-4xl lg:text-5xl font-bold">About Storm</h1>
                <p className="py-7 text-[14px] lg:text-lg max-w-lg capitalize leading-relaxed">
                    STORM is a next-generation debate platform built to transform how
                    people share ideas, challenge opinions, and engage in meaningful discussions.
                </p>
            </div>
        </div>
    )
}

export default AboutUsHeroSection