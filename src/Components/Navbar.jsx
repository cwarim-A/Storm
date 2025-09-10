import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='flex justify-between items-center h-[70px] md:h-[100px] px-5 lg:px-20 relative'>
      <Link to={"/"}>
        <img src="/storm-logo.png" alt="Storm Logo" className=' w-[90px]  md:w-[100px]' />
      </Link>
      <ul className='hidden list-none md:flex gap-10'>
        <li><NavLink className={({ isActive }) =>
          isActive ? "text-[#9C8405] font-semibold" : "text-black"
        } to="/">Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) =>
          isActive ? "text-[#9C8405] font-semibold" : "text-black"
        }>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
          isActive ? "text-[#9C8405] font-semibold" : "text-black"
        }>Contact</NavLink></li>
      </ul>
      <div>
        <button className='hidden md:block bg-[#F0D22FED] px-4 py-4 rounded-2xl text-[16px]'>Download App</button>
      </div>
      
        <MdMenu size={25} className="md:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)} />
        {
          openMenu && (
            <div className='absolute bg-white w-full h-[400px] left-0 top-full z-50 flex flex-col  items-center'>
              <ul className='flex flex-col items-center gap-5 py-10'>
              <li className='text-[#9C8405]'><NavLink to="/" className={({ isActive }) =>
                isActive ? "text-[#9C8405] font-semibold" : "text-black"}  >Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) =>
                isActive ? "text-[#9C8405] font-semibold" : "text-black"
              }>About</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) =>
                isActive ? "text-[#9C8405] font-semibold" : "text-black"
              }>Contact</NavLink></li>
              </ul>
            <button className=' bg-[#F0D22FED] px-4 py-4 rounded-2xl text-[16px] w-[50%]'>Download App</button>
            </div>
          )
        }
      
    </div>
  )
}

export default Navbar