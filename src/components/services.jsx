import React from 'react'
import './services.css'
import { FaCircleArrowRight } from "react-icons/fa6";

const services = () => {
  return (
    <div>
      <section id="services" class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="service-grid">
        <div class="service-item">
          <h3>Tour Packages</h3>
          <p>Customized tour packages for families, couples, and solo travelers.</p>
        </div>
        <div class="service-item">
          <h3>Adventure Tours</h3>
          <p>Experience thrilling activities like trekking, kayaking, and more.</p>
        </div>
        <div class="service-item">
          <h3>Cultural Experiences</h3>
          <p>Immerse yourself in Kerala's rich culture and traditions.</p>
        </div>
      </div>
      <div className="arrow">
      <a><FaCircleArrowRight /></a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default services
