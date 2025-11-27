import React from 'react'



const services = [
    {
        icon: "/create-icon.png",
        title:"Create Debate Easily",
        desc:"Set up structured debates in minutes. Choose your topic, format, judging criteria, and participants. STORM makes the entire process fast, intuitive, and seamless."
    },
    {
        icon: "/viral-marketing.png",
        title: "Become a celebrity. Go viral",
        desc: "Turn your voice into influence. With real-time audience reactions, scoring, and shareable clips, your debates can quickly gain traction and push you into the spotlight."
    },
    {
        icon: "/money.png",
        title:"Monetize your Debates",
        desc:"Earn from your conversations. Host ticketed debates, collaborate with sponsors, unlock creator rewards, and turn your debating skills into a sustainable income stream."
    },
    {
        icon: "/download-icon.png",
        title:"Download Past Debates",
        desc:"Access and download recordings of your previous debates anytime. Re-watch, share, repurpose, or analyze your performance to improve and grow your audience."
    }
]

const OurServices = () => {
  return (
      <div className='px-5 md:px-[40px] lg:px-[130px] py-10 bg-[#F1D53E] h-auto md:h-[800px] lg:h-auto flex flex-col text-center items-center'>
          <h2 className='bg-[#FFF] py-2 px-2 rounded-3xl w-[50%] lg:w-[15%]'>OUR SERVICES</h2>
          <h1 className='py-3 text-xl md:text-3xl text-[#232323]'>We are the Best Debating Platform</h1>
          <p className='text-[12px] w-full   lg:w-[40%] lg:text-left md:text-center text-[#232323]'>STORM delivers everything you need to host powerful debates, grow your influence, and engage with a vibrant community all in one interactive platform built for creators, thinkers, and conversation leaders.
          </p>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 items-stretch">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="bg-white px-4 py-4 rounded-2xl shadow-md 
                 h-full text-left"
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