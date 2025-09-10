import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

const HeroSection = () => {
  return (
    <div className='bg-cover bg-center h-[400px] md:h-[600px] relative text-white' style={{backgroundImage: "url('/hero-section.png')", }}>
      <div className='absolute inset-0 bg-no-repeat top-0 left-[0%]' style={{ backgroundImage: "url('/first-svg.png')", }} />
        <div className='absolute top-[60px] left-[05%] md:top-[130px] md:left-[140px] flex flex-col gap-5 z-1'>
              <button className='bg-[#FEDE2B33] text-[#FFD800] rounded-3xl py-2 w-[60%] md:w-[30%]'>Welcome to Storm</button>
              <h1 className=' text-[20px]   md:text-[60px] leading-normal md:leading-[80px] font-semibold'>Let your voice be <br /> heard with Storm</h1>
              <p className='w-full text-[16px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius <br />
                  tempor incididunt ut labore et dolore magna aliqua. enim minim <br /> veniam, quis nostrud exercitation adispaci
              </p>
              <button className='bg-[#FEDE2B] w-[50%] md:w-[35%] flex items-center gap-4 justify-center py-3 rounded-3xl text-black'>
                Get Started
                  <IoMdArrowRoundForward className='bg-black text-[#FEDE2B] w-5 h-5 rounded-full' />
              </button>
        </div>
    </div>
  )
}

export default HeroSection