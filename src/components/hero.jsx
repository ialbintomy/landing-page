import React from 'react'
import './hero.css'
import { Link } from 'react-scroll'

const hero = () => {
  return (
    <div>
      <section id="home" class="hero">
    <div class="container">
      <h2>Explore the Beauty of Kerala With AURA</h2>
      <p>Discover the serene backwaters, lush greenery, and rich culture of God's Own Country.</p>
      <Link to="destinations" smooth={true} duration={1000} className="btn">Explore Destinations</Link>
    </div>
    </section>
    </div>
  )
}

export default hero
