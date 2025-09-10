import React, { useState } from 'react'
import logio from '../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {

const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <img src={logio} alt="" className='w-24' />

      <ul className='hidden sm:flex gap-4 text-sm font-medium '>

        <NavLink to='' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-orange-600 hidden' />
        </NavLink>

        <NavLink to='services' className='flex flex-col items-center gap-1'>
  <p>Services</p>
  <hr className='w-2/4 border-none h-[1.5px] bg-orange-600 hidden' />
        </NavLink>

        <NavLink to='contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-orange-600 hidden'/>
        </NavLink>

      </ul>

      <div className='flex items-center gap-2'>

<IoMdMenu onClick={()=>setVisible(true)} className='w-15 cursor-pointer md:hidden' />

      </div>

 {/* sidebar menu */}


<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${visible ? 'w-full' : 'w-0'} `}>

<div className='flex flex-col text-black'>

    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
<FaArrowRight className='h-4 rotate-180' />
<p>Back</p>
    </div>

    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/'>Home</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/services'>Services</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/contact'>Contact</NavLink>

</div>

</div>


    </div>
  )
}

export default Navbar