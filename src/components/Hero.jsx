import React from 'react'
import herox from '../assets/Hero.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-500'>

        {/*Left Side*/}

        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>

        <div className='text-[#414141]'>

            <div className='flex flex-col items-center gap-2'>

               <h1 className='font-medium text-sm md:text-base mb-2'>A9 DOG TRAINING</h1>
              <p className='text-center'>Your One‑Stop Hub to Unlock Your Dog’s Full Potential</p>

               <Link to='/services'><button className='bg-orange-400 text-white px-8 py-2 text-sm rounded mt-5'>Our Services</button></Link> 



            </div>

          
        </div>

        </div>

        <div className='w-full sm:w-1/2'>

        <img src={herox} alt="" />

        </div>


    </div>
  )
}

export default Hero