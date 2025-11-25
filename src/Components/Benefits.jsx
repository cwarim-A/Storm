import React from 'react'


const benefits = [
    {
        icon:"/bullet.png",
        title:"Create debates and make money from it",
        desc:"Host debates, build an audience, and earn through ticketed sessions, sponsorships, and creator rewards turning your voice into a revenue stream."
    },
    {
        icon:"/bullet.png",
        title:"Explore different debate categories",
        desc:"From politics and culture to tech, sports, lifestyle, and niche interests, STORM offers endless topics so you can engage in debates that matter to you."
    },
    {
        icon:"/bullet.png",
        title:"Create viral debating contents",
        desc:"Turn every debate into shareable, high-energy content. With real-time scoring and reactions, your discussions can spark trends and go viral across platforms."
    }
]



const Benefits = () => {
  return (
    <div className=' px-5 pt-10 md:px-[30px] lg:px-[200px] md:pt-10 pb-10'>
         <div className='flex flex-col gap-[15px] md:flex-row lg:flex-row items-center justify-center md:gap-[15px] lg:gap-[50px] '>
            <div className='w-full lg:w-2/5 relative'>
                <img src="/People-collaborating.png" alt="People collaborating" className=' md:h-[420px] md:w-full  lg:h-auto lg:w-full' />
                <img src="/Subtract.png" alt="Subtract" className=' hidden lg:block lg:h-[480px] md:h-[420px] md:w-[200px]
                lg:w-[300px]  absolute top-0 -right-[50px]' />
                  

            </div>
            <div className='w-full lg:w-3/5'>
                  <h2 className='text-black bg-[#FEDE2B29] text-center px-2 py-2 rounded-2xl md:w-[60%] lg:w-[40%] w-full '>Benefits of Using Storm</h2>
                  <div className='flex flex-col gap-3 py-5'>
                      <h1 className='text-2xl md:text-3xl text-[#1D2939]'>The Best Debating Platform</h1>
                      <p className='text-[#797979] text-[12px] w-full md:w-[80%]'>STORM gives you a structured, exciting, and rewarding space to express your views, challenge ideas, and grow your influence all powered by real-time audience participation.</p>
                  </div>
                  <div className='flex flex-col  gap-[40px]  py-7'>
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