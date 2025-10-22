import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Plans />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
