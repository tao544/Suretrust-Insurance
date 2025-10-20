import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
