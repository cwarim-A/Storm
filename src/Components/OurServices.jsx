import React from 'react'



const services = [
    {
        icon: "/create-icon.png",
        title:"Create Debate Easily",
        desc:"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod temporincidiunt ut labore"
    },
    {
        icon: "/money.png",
        title:"Monetize your Debates",
        desc:"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod temporincidiunt ut labore"
    },
    {
        icon: "/download-icon.png",
        title:"Download Past Debates",
        desc:"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod temporincidiunt ut labore"
    }
]

const OurServices = () => {
  return (
      <div className='px-5 md:px-[130px] py-10 bg-[#F1D53E] h-[900px] md:h-[500px] flex flex-col text-center items-center'>
          <h2 className='bg-[#FFF2A9A8] py-2 px-2 rounded-3xl w-[50%] md:w-[15%]'>OUR SERVICES</h2>
          <h1 className='py-3 text-xl md:text-3xl text-[#232323]'>We are the Best Debating Platform</h1>
          <p className='text-[12px] w-full  md:w-[40%] text-left text-[#232323]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
              tempor incididunt ut labore et dolore magna aliqua. enim minim veniam
          </p>
          <div className='flex flex-col md:flex-row  gap-5 items-center py-10'>
                {services.map((service,index)=>(
                    <div key={index} className='bg-white px-4 py-4 rounded-2xl shadow-md w-[280px] h-[200px] text-left '>
                        <img src={service.icon} alt={service.title} className='w-10 h-10 mb-5 ' />
                        <h3 className='text-lg font-semibold py-3'>{service.title}</h3>
                        <p className='text-sm text-gray-600'>{service.desc}</p>
                    </div>
                ))}
          </div>
    </div>
  )
}

export default OurServices