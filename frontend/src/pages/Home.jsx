import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import CreateAiImages from '../components/CreateAIImages'
import Testimonials from '../components/Testimonials'
import Bottom from '../components/Bottom'

function Home() {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <CreateAiImages/>
      <Testimonials/>
      <Bottom/>
    </div>
  )
}

export default Home