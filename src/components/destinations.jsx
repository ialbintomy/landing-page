import React from 'react'
import './destinations.css'
import alappuzha from'../assets/images/alappuzha.jpg'
import munnar from'../assets/images/munnar.jpg'
import varkala from'../assets/images/varkala.jpg'


const desinations = () => {
  return (
    <>
    <div>
      <section id="destinations" class="destinations">
    <div class="container">
      <h2>Popular Destinations</h2>
      <div class="destination-grid">
        <div class="destination-item">
          <img src={alappuzha} alt="Alleppey" />
          <h3>Alleppey</h3>
          <p>Explore the famous backwaters and houseboats.</p>
        </div>
        <div class="destination-item">
          <img src={munnar} alt="Munnar" />
          <h3>Munnar</h3>
          <p>Discover the tea plantations and scenic beauty.</p>
        </div>
        <div class="destination-item">
          <img src={varkala} alt="Varkala" />
          <h3>Varkala</h3>
          <p>Relax on the pristine beaches.</p>
        </div>
      </div>
    </div>
    <div className='view'>
    <a href="#">view more&gt;&gt;</a>
    </div>
  </section>
    </div>
    </>
  )
}


export default desinations
