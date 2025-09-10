import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Values from '../components/Values'
import About from '../components/About'
import Faqs from '../components/Faqs'

const Home = () => {
  return (
    <div>
     <Hero/>
     <Values/>
     <About/>
     <Faqs/>
    </div>
  )
}

export default Home