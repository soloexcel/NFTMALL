import React from 'react'
import {HeroSection, Clients, Services, Blog, MP, Subsciption  } from '../components/components'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Clients />
      <Services />
      <Blog /> 
      <MP />
      <Subsciption />
    </div>
  )
}

export default Home