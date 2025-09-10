import React from 'react'
import logio from '../assets/logo.jpeg'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={logio} alt="" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-black'>A9 Dog training your number one step and the right place for all your dog needs</p>
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1'>

             <NavLink to='/'>
                <p>Home</p>
                <hr className='w-1/4 h-[1.5px] bg-orange-500 hidden '/>
             </NavLink>

             <NavLink to='/services'>
                <p>Services</p>
                <hr className='w-1/4 h-[1.5px] bg-orange-500 hidden'/>
             </NavLink>

             <NavLink to='/contact'>
                <p>Contact</p>
                <hr className='w-1/4 h-[1.5px] bg-orange-500 hidden'/>
             </NavLink>

            </ul>
        </div>


        <div>

            <p className='text-xl font-medium mb-5'>Our Contacts</p>
            <ul className='flex flex-col gap-1'>

                <li>Phone:0799897797</li>
                <li>Email:amonmwanjala03@gmail.com</li>


            </ul>

        </div>

    </div>
  )
}

export default Footer