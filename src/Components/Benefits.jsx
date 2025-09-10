import React from 'react'


const benefits = [
    {
        icon:"/bullet.png",
        title:"Create debates and make money from it",
        desc:"Lorem ipsum dolor sit amet consecte nadipiscing elit"
    },
    {
        icon:"/bullet.png",
        title:"Explore different debate categories",
        desc:"Lorem ipsum dolor sit amet consecte nadipiscing elit"
    },
    {
        icon:"/bullet.png",
        title:"Create viral debating contents",
        desc:"Lorem ipsum dolor sit amet consecte nadipiscing elit"
    }
]



const Benefits = () => {
  return (
    <div className=' px-5 pt-180 md:px-[200px] md:pt-50 pb-10'>
         <div className='flex flex-col md:flex-row items-center justify-center gap-[50px] '>
            <div className='w-full md:w-[40%] relative'>
                <img src="/People-collaborating.png" alt="People collaborating" className='h-[480px] w-[420px]' />
                <img src="/Subtract.png" alt="Subtract" className='h-[480px]
                w-[300px]  absolute top-0 -right-[50px]' />
            </div>
            <div className='w-full md:w-[60%]'>
                  <h2 className='text-[#E2BF00] bg-[#FEDE2B29] text-center px-2 py-2 rounded-2xl md:w-[40%] w-full '>Benefits of Using Storm</h2>
                  <div className='flex flex-col gap-3 py-5'>
                      <h1 className='text-3xl text-[#1D2939]'>The Best Debating Platform</h1>
                      <p className='text-[#797979] text-[12px] w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. enim minim veniam</p>
                  </div>
                  <div className='flex flex-col gap-[60px] py-7'>
                      {benefits.map((benefit, index) => (
                          <div key={index} className='flex items-center gap-3'>
                              <img src={benefit.icon} alt={benefit.title} className='h-10 w-10' />
                              <div>
                                  <h3 className='text-[#1D2939] font-semibold'>{benefit.title}</h3>
                                  <p className='text-[#797979] text-[12px]'>{benefit.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
            </div>
         </div>
    </div>
  )
}

export default Benefits;