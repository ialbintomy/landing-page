import React from 'react'
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import {Link} from 'react-scroll'

const navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
    const handleButtonToggle=()=>{
        setShowMenu(!showMenu);
    };

  return (
    <div>
      <header>
        <div className="container">
        <h1 className="logo">Aura Travels</h1>
      <nav className="navbar">
        <button className="mobile-menu-btn" onClick={handleButtonToggle}><GiHamburgerMenu /></button>
        <ul className={`nav-links ${showMenu ? 'show':''}`}>
            <li><Link to="home"smooth={true}duration={1000}>Home</Link></li>
            <li><Link to="about"smooth={true}duration={1000}>About</Link></li>
            <li><Link to="services"smooth={true}duration={1000}>Services</Link></li>
            <li><Link to="destinations"smooth={true}duration={1000}>Destinations</Link></li>
            <li><Link to="testimonials"smooth={true}duration={1000}>Testimonials</Link></li>
            <li><Link to="gallery"smooth={true}duration={1000}>Gallery</Link></li>
            <li><Link to="contact"smooth={true}duration={1000}>Contact</Link></li>
        </ul>
    </nav>
    </div>
    </header>
    </div>
    
  )
}

export default navbar

