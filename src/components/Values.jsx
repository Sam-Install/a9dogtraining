import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { LuHandCoins } from "react-icons/lu";
import { FaClipboardCheck } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";

const Values = () => {
  return (
    <div className='mt-12'>

        <h1 className='text-center md:text-bas text-2xl mb-2'>Our Values</h1>

        <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>

<div className='flex flex-col items-center justify-center border border-gray-700 rounded-lg p-6'>
    <FaHandsHelping size={32} />
    <h3 className='mt-2'>We Listen & Personalize</h3>
</div>

<div className='flex flex-col items-center justify-center border border-gray-700 rounded-lg p-6 '>
<LuHandCoins size={32} />
<h3 className='mt-2'>Fair & Transparent Pricing</h3> 
</div>


<div className='flex flex-col items-center justify-center border border-gray-700 rounded-lg p-6'>
<FaClipboardCheck size={32} />
<h3 className='mt-2'>Free Dog Evaluation & Consultation</h3>
</div>

<div className='flex flex-col items-center justify-center border border-gray-700 rounded-lg p-6' >
<FaRegSmileBeam size={32} />
<h3 className='mt-2'>Customer Satisfaction Guarantedd</h3>
</div>


        </div>

    </div>
  )
}

export default Values