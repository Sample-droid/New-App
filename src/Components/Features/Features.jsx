import React from 'react'
import'./Features.css'; import '../Footer.css'


import { Link } from 'react-router-dom'

const Features = () => {
  return (
    
    
    <div>
      
      <div className="features-page">
      <header className="features-header">
        
        <h1>Features</h1>
        <nav>
          <ul className="features-nav">
           
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </nav>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          
         <a href='/green'><h3>Green Design</h3></a>
          
          <p>Lets create an Eco-Scenary of your own view</p>
        </div>
        <div className="feature-card">
         <a href='/f'> <h3>Food For Health</h3></a>
         <p>Eat For Mind And Body</p> 
        </div>
        <div className="feature-card">
         <a href='/b'><h3>Blue Coat</h3></a>
          
          
          <p>Awarness about our Water bodies</p></div>
        
        
        
        
        <div className="feature-card">
          
          
          <a href='/feedback'><h3>Feedback</h3></a>
          <p>Anything in mind to share with others. Share here</p>
        </div>
      </section>

      
      
       </div>
    
    
    
    
    <section><footer className="footer">
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
  
  </footer></section></div>)}



export default Features