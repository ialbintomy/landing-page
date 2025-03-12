import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Destinations from './components/destinations'
import Testimonials from './components/testimonials'
import Gallery from './components/gallery'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App

