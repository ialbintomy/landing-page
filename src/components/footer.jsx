import React from 'react'
import './footer.css'
import { MdFacebook } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";

const footer = () => {
  return (
    <div>
      <footer id="contact">
    <div class="container">
      <p>&copy; 2024 Aura Travels. All rights reserved.</p>
      <p>Contact: <a href="mailto:ialbintomy@gmail.com">ialbintomy@gmail.com</a> | +91 9947322239</p>
      <div class="social-links">
        <a href="#"><MdFacebook /></a>
        <a href="#"><PiInstagramLogoFill /></a>
        <a href="#"><IoLogoWhatsapp /></a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default footer
