import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const CallToAction = () => {
  return (
    // <div className='flex  items-center px-5 py-10 md:px-[200px]  md:py-[60px]'>
    //   <div className='bg-[#E3E3E3] flex flex-row h-[600px]   w-[950px] md:h-[335px]  relative rounded-2xl'>
    //     <div className='absolute top-[5%] left-[3%] lg:top-[12%] lg:left-[5%] '>
    //       <h2 className=' text-[20px] md:text-[34px] '>Should Artificial Intelligence Be <br  className='hidden md:block'/> Allowed to Make Legal <br /> Decisions?</h2>
    //       <p className=' text-[12px] text-[#232323] py-3'>
    //         As AI becomes more advanced, some argue it could reduce <br /> human bias in courtrooms.
    //       </p>
    //       <button className='bg-[#FEDE2B] py-3 px-5 w-[50%] md:w-[30%] text-center rounded-xl text-[12px] font-bold mt-5 relative cursor-pointer'>
    //         Join Debate
    //         <span className='absolute -right-[10%] top-0 bg-white h-10 w-10 flex items-center justify-center rounded-full '>
    //           <GoArrowUpRight size={20} className='' />
    //         </span>
    //       </button>
    //     </div>
    //     <div className=' absolute top-[50%] right-[8%] md:top-[10%] md:right-[2%] mt-3 '>
    //       <img src="/Home.png" alt="Phone Image" className='w-[330px] md:w-[320px] lg:w-[330px] h-[300px] object-cover object-center  ' />
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center px-5 py-10 md:px-[15px] lg:px-[180px] md:py-[60px]">
      <div className="bg-[#E3E3E3] relative rounded-2xl w-full max-w-[950px] h-[620px] md:h-[335px]">

        {/* Text Section */}
        <div className="absolute top-[5%] left-[3%] md:top-[12%] md:left-[5%]">
          <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-semibold text-[#232323]">
            Should Artificial Intelligence Be <br className="hidden md:block" />
            Allowed to Make Legal <br /> Decisions?
          </h2>
          <p className="text-[12px] md:text-[14px] text-[#232323] py-3 leading-relaxed">
            As AI becomes more advanced, some argue it could reduce <br /> human bias in courtrooms.
          </p>

          <button className="bg-[#FEDE2B] py-3 px-5 w-[50%] md:w-[35%] lg:w-[30%] text-center rounded-3xl text-[12px] md:text-[14px] font-bold mt-5 relative cursor-pointer">
            Join Debate
            <span className="absolute -right-[7%] top-1/2 -translate-y-1/2 bg-white h-10 w-10 flex items-center justify-center rounded-full">
              <GoArrowUpRight size={20} />
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="absolute top-[72%] right-[5%] md:top-[10%] md:right-[2%] -translate-y-1/2 md:translate-y-0">
          <img
            src="/Home.png"
            alt="Phone Image"
            className="w-[350px] h-[fit-content] md:w-[300px] md:h-[270px] lg:w-[300px] lg:h-auto object-cover object-center"
          />
        </div>
      </div>
    </div>




  )
}

export default CallToAction