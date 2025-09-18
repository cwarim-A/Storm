import React from 'react'



const services = [
    {
        icon: "/create-icon.png",
        title:"Create Debate Easily",
        desc:"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod temporincidiunt ut labore"
    },
    {
        icon: "/create-icon.png",
        title: "Become a celebrity. Go viral",
        desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod temporincidiunt ut labore"
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
      <div className='px-5 md:px-[40px] lg:px-[130px] py-10 bg-[#F1D53E] h-[1200px] md:h-[800px] lg:h-[500px] flex flex-col text-center items-center'>
          <h2 className='bg-[#FFF2A9A8] py-2 px-2 rounded-3xl w-[50%] lg:w-[15%]'>OUR SERVICES</h2>
          <h1 className='py-3 text-xl md:text-3xl text-[#232323]'>We are the Best Debating Platform</h1>
          <p className='text-[12px] w-full   lg:w-[40%] lg:text-left md:text-center text-[#232323]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
              tempor incididunt ut labore et dolore magna aliqua. enim minim veniam
          </p>
         
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="bg-white px-4 py-4 rounded-2xl shadow-md 
                 min-h-[200px] text-left"
                  >
                      <img src={service.icon} alt={service.title} className="w-10 h-10 mb-5" />
                      <h3 className="text-lg font-semibold py-3">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
              ))}
          </div>

    </div>
  )
}

export default OurServices