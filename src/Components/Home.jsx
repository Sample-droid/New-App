import React from 'react'
import './Home.css'


import './Footer.css'
import { AppBar, Box, IconButton, Button, Toolbar, Typography } from '@mui/material'
const Home = () => {
  return (
   
      
      <div className="home-container">
      <header className="home-header">
        
         <Box >
      
      
      <AppBar color="Grey"  position="static"><Toolbar>
        
          
          <h1>MyApp</h1>
        <nav className='nav-list'>
          
           
            <a href="/features">Features</a>
            <a href="/contact">Contact</a>
          
        </nav>
      
        </Toolbar>
      
      </AppBar>
    </Box>
       </header>
<section className="hero">
      

      <section className="features">
        <div className="feature-card">
          <h3>Fast Performance</h3>
          <p>Blazing-fast load times and seamless interactions.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable</h3>
          <p>Easily tailor settings to match your workflow.</p>
        </div>
        <div className="feature-card">
          <h3>Secure</h3>
          <p>State-of-the-art encryption to protect your data.</p>
        </div>
</section>
      <h1>Your Journey</h1>
        <p><h2>A Goal With No End !!</h2></p>
        
        <button>Get Started</button>
      </section>
      <footer className="footer">
    <div className="footer-content">
      {/* Brand Section */}
      <div className="footer-brand">
        <h2 className="brand-title">EcoGuardians</h2>
        <p className="brand-tagline">Protecting Nature, Empowering People</p>
      </div>

      {/* Quick Links */}
      <nav className="footer-links">
        <h4 className="links-heading">Quick Links</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/projects">Our Projects</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Get Involved */}
      <div className="footer-involve">
        <h4 className="involve-heading">Get Involved</h4>
        <button className="involve-button">Volunteer</button>
        <button className="involve-button outline">Donate</button>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <h4 className="social-heading">Follow Us</h4>
        <div className="social-icons">
          {/* Replace with actual SVGs or icon components */}
          <a href="https://facebook.com" aria-label="Facebook" className="icon">F</a>
          <a href="https://X.com" aria-label="X" className="icon">T</a>
          <a href="https://instagram.com" aria-label="Instagram" className="icon">I</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      © {new Date().getFullYear()} EcoGuardians. All rights reserved.
    </div>
  </footer>
    </div>
    
  )
}

export default Home