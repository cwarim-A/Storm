import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
    {
        title:"Quick Links",
        sublinks: [
            "Home","About Us", "contact"
        ]
    },
    {
        title:"Other Pages",
        sublinks:[
            "Privacy Policy",
            "FAQ"
        ]
    }
]

const socialIcon = [
    {
        icon:"/google-icon.png"
    },
    {
        icon:"/instagram-icon.png"
    },
    {
        icon:"/tiktok-icon.png"
    },
    {
        icon:"/twitter-icon.png"
    }
]


const Footer = () => {
  return (
      <div className='bg-[#0B0900] h-auto  text-white'>
          <div className='flex flex-col md:flex-row  gap-20 px-5 md:px-12 pt-20 pb-10'>
              <div className='bg-[#1E1E1E]  md:w-[400px] flex flex-col justify-center items-center rounded-2xl md:px-2 '>
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
                                                to={``}
                                                className="hover:text-gray-300 transition"
                                            >
                                                {sublink}
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
                  <div className='bg-white py-2 text-black text-sm px-2 rounded-3xl flex gap-5 '>
                        <input type="text" placeholder='Your email address' className='outline-none' />
                      <button className='bg-[#F1D53E] w-[50%]  md:w-[38%] text-center text-sm rounded-3xl px-3 md:px-5 py-2 text-black'>Subscribe</button>
                    </div>
                    <p className='text-[14px] py-7'>Get the latest news & updates</p>
                    <div className='grid grid-cols-4  gap-7'>
                            {
                                socialIcon.map((Icon,index)=>(
                                    <img key={index} src={Icon.icon} alt="Icons" />
                                ))
                            }
                    </div>
                </div>
            </div>
          <hr className='border-[#F9FAFB2E]' />
          <div className='flex flex-col gap-3 md:flex-row  justify-between items-center  text-sm px-5 md:px-46 py-5 text-[#969696]'>
              <p className=''>Privacy Policy | Terms of Service</p>
              <p className=''>Copyright © 2025. All rights reserved.</p>
          </div>
     </div>
  )
}

export default Footer