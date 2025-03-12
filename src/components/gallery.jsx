import React from 'react'
import './gallery.css'
import pic1 from "../assets/images/pic1.jpg"
import pic2 from "../assets/images/pic2.jpg"
import pic3 from "../assets/images/pic3.jpg"
import pic4 from "../assets/images/pic4.jpg"
import pic5 from "../assets/images/pic5.jpg"
import pic6 from "../assets/images/pic6.jpg"

const gallery = () => {
  return (
    <div>
      <section id="gallery" class="gallery">
    <div class="container">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src={pic1} alt="Gallery 1" />
        </div>
        <div class="gallery-item">
          <img src={pic2} alt="Gallery 2"/>
        </div>
        <div class="gallery-item">
          <img src={pic3} alt="Gallery 3" />
        </div>
        <div class="gallery-item">
          <img src={pic4} alt="Gallery 4" />
        </div>
        <div class="gallery-item">
          <img src={pic5} alt="Gallery 4" />
        </div>
        <div class="gallery-item">
          <img src={pic6} alt="Gallery 4" />
        </div>
      </div>
      <a href="#">view more&gt;&gt;</a>
    </div>
  </section>
    </div>
  )
}

export default gallery
