import React from 'react'

const PrivacyPolicy = () => {
  return (
      <div className='px-6 md:px-26 py-20 flex flex-col md:flex-row justify-center gap-7 md:gap-0 '>
          <div className='w-full md:w-2/5 relative  '>
                <img src="/Privacy-policy.png" alt="Privacy Policy Image" className='w-full md:w-[400px]' />
                <img src="/Subtract.png" alt="Svg image" className='absolute md:h-full top-0 right-0 h-[350px] md:right-5' /> 
          </div>
          <div className='w-full md:w-2/5 flex flex-col gap-3'>
              <h2 className='bg-[#FEDE2B29] text-[#E2BF00] w-[100%] md:w-[30%] text-center py-2 rounded-2xl'>Privacy Policy</h2>
              <p className='text-[14px]'>
                  Lorem ipsum dolor sit amet consectetur. Viverra orci auctor  vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.
              </p>
          </div>
    </div>
  )
}

export default PrivacyPolicy