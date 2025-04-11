import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProfecciency from "./sections/TechnicalProfeiciency"
import AboutMe from './sections/AboutMe'
import MyProject from './sections/MyProject'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <TechnicalProfecciency />
      <AboutMe />
      <MyProject />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App