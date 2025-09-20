import React from 'react'
import'./Features.css'


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
          
          
          <h3>Green Design</h3>
          
          <p>Lets create scenary of your own view</p>
        </div>
        <div className="feature-card">
          <h3>High Performance</h3>
          <p>Optimized bundle sizes and lazy loading for fast page loads.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Authentication</h3>
          <p>JWT-based login flows with token refresh and logout support.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable Themes</h3>
          <p>Switch between light and dark modes with a single toggle.</p>
        </div>
      </section>

      <footer className="features-footer">
        <p>© 2025 MyApp. All rights reserved.</p>
      </footer>
    </div></div>)}




export default Features