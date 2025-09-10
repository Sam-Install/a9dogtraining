import React from 'react'
import dogio from '../assets/dogo.jpeg'

const About = () => {
  return (
    <div className='mt-12 text-center'>

        <h1 className='text-2xl mb-2'>About Us</h1>
        <p className='font-medium mb-2'>Who we are</p>

        {/*Left Side */}

        <div className='flex flex-col sm:flex-row gap-2'>

            <div className='w-full sm:w-1/2 mb-2'>


<p style={{ lineHeight: 1.6 }}>
  Welcome to our dog training center located in <strong>Mwabungo</strong>. We’re dedicated to helping confident, well‑behaved dogs and proud owners thrive together. Our vision is clear: to deliver compassionate, results‑driven training that empowers every pet owner. <br /><br />
  At the heart of what we do are our core values:<br />
  <strong>Attentive Listening & Personalization:</strong> We begin by understanding you and your dog, crafting tailored training plans that truly fit.<br />
  <strong>Fair & Transparent Pricing:</strong> No surprises—just honest, accessible training for all.<br />
  <strong>Free Evaluation & Consultation:</strong> Enjoy a complimentary introductory session to experience our approach and decide with confidence.<br />
  <strong>Customer Satisfaction Guaranteed:</strong> We don’t stop until you’re delighted with progress—your success is our priority.<br /><br />
  If you’re in Mwabungo,coastal region or across the country, we’re your trusted local partner for positive and effective dog training. Let’s strengthen your bond—one step at a time.
</p>



            </div>


            <div className='w-full sm:w-1/2 flex justify-center'>

<img src={dogio} alt="" className='w-64 h-100  mt-2 '  />

            </div>

        </div>

    </div>
  )
}

export default About