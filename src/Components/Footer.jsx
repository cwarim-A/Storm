import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
    {
        title:"Quick Links",
        sublinks: [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
        ]
    },
    {
        title:"Other Pages",
        sublinks:[
            { name: "Privacy Policy", path: "/privacy-policy" },
            { name: "FAQ", path: "/faq" },
        ]
    }
]

const socialIcon = [
    {
        icon:"/google-icon.png",
        link:""
    },
    {
        icon:"/instagram-icon.png",
        link:""
    },
    {
        icon:"/tiktok-icon.png",
        link:""
    },
    {
        icon:"/twitter-icon.png",
        link:""
    }
]


const Footer = () => {
  return (
      <div className='bg-[#0B0900] h-auto  text-white'>
          <div className='flex flex-col md:flex-col lg:flex-row   gap-20 px-5 md:px-12 pt-20 pb-10'>
              {/* <div className='bg-[#1E1E1E]  md:w-[400px] flex flex-col justify-center items-center rounded-2xl md:px-2 '>
                  <img src="/storm-logo.png" alt="Storm Logo" className='w-[200px]' />
                  <div className=' flex gap-5 text-white py-7 px-7'>
                      <Link to={""} className='flex gap-2 items-center rounded-md border-1 border-[#484848] py-1 px-2  '>
                      <img src="/apple-logo.png" alt="Apple logo" className='w-5 h-6' />
                     <div className='flex  flex-col pr-3'>
                              <span className='text-[10px]'>Download on the</span>
                              <span>App Store</span>
                    </div> 
                      
                      </Link>  
                      <Link to={""} className='flex gap-2 items-center rounded-md border-1 border-[#484848] py-1 px-2  '>
                          <img src="/google-logo.png" alt="Apple logo" className='w-5 h-6' />
                          <div className='flex flex-col pr-3'>
                              <span className='text-[10px]'>Download on the</span>
                              <span>Google Play</span>
                          </div>

                      </Link>  
                  </div>
             </div> */}
              <div className="bg-[#1E1E1E] w-[100%] sm:w-[350px] md:w-full lg:w-[400px] md:py-5 flex flex-col justify-center items-center rounded-2xl px-2">
                  <img
                      src="/storm-logo-white.png"
                      alt="Storm Logo"
                      className="w-[150px] sm:w-[180px] md:w-[200px]"
                  />

                  <div className="flex flex-col md:flex-row sm:flex-col gap-3 sm:gap-5 text-white py-7 px-5">
                      <Link
                          to={""}
                          className="flex gap-2 items-center rounded-md border border-[#484848] py-1 px-2"
                      >
                          <img src="/apple-logo.png" alt="Apple logo" className="w-5 h-6" />
                          <div className="flex flex-col pr-3">
                              <span className="text-[10px]">Download on the</span>
                              <span>App Store</span>
                          </div>
                      </Link>

                      <Link
                          to={""}
                          className="flex gap-2 items-center rounded-md border border-[#484848] py-1 px-2"
                      >
                          <img src="/google-logo.png" alt="Google logo" className="w-5 h-6" />
                          <div className="flex flex-col pr-3">
                              <span className="text-[10px]">Download on the</span>
                              <span>Google Play</span>
                          </div>
                      </Link>
                  </div>
              </div>

                <div className='grid grid-cols-2 gap-20  '>
                     {
                        footerLinks.map((link,index)=>(
                            <div key={index} className='flex flex-col'>
                                <h2 className='pb-7'>{link.title}</h2>
                                <ul className="flex flex-col gap-7">
                                    {link.sublinks.map((sublink, subIndex) => (
                                        <li key={subIndex}>
                                            <Link
                                                to={sublink.path}
                                                className="hover:text-gray-300 transition"
                                            >
                                                {sublink.name}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))
                     }
                </div>
                <div className='flex flex-col'>
                    <h2 className='pb-7'>Newsletter</h2>
                  {/* <div className='bg-white py-2 text-black text-sm px-2 rounded-3xl flex gap-5 '>
                        <input type="text" placeholder='Your email address' className='outline-none' />
                      <button className='bg-[#F1D53E] w-[50%]  md:w-[38%] text-center text-sm rounded-3xl px-3 md:px-5 py-2 text-black'>Subscribe</button>
                    </div> */}
                  <div className="bg-white py-2 text-black text-sm px-2 rounded-3xl flex gap-3 md:gap-5 items-center">
                      <input
                          type="text"
                          placeholder="Your email address"
                          className="flex-1 outline-none min-w-0"
                      />
                      <button className="bg-[#F1D53E] w-[50%] md:w-[38%] text-center text-sm rounded-3xl px-3 md:px-5 py-2 text-black">
                          Subscribe
                      </button>
                  </div>
                    <p className='text-[14px] py-7'>Get the latest news & updates</p>
                    <div className='grid grid-cols-4  gap-7 cursor-pointer'>
                            {
                                socialIcon.map((Icon,index)=>(
                                    <img key={index} src={Icon.icon} alt="Icons" />
                                ))
                            }
                    </div>
                </div>
            </div>
          <hr className='border-[#F9FAFB2E]' />
          <div className='flex flex-col gap-3 md:flex-row  justify-between items-center  text-sm px-5 lg:px-46 md:px-14 py-5 text-[#969696]'>
              <p className=''>Privacy Policy | Terms of Service</p>
              <p className=''>Copyright © 2025. All rights reserved.</p>
          </div>
     </div>
  )
}

export default Footer