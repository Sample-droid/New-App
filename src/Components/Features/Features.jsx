import React, { useState } from 'react'
import './Features.css'
import '../Footer.css'
import { Link } from 'react-router-dom'

const allFeatures = [
  { id: 1, title: 'Green Design', desc: 'Lets create an Eco-Scenary of your own view', path: '/green', category: 'Tools' },
  { id: 2, title: 'Food For Health', desc: 'Eat For Mind And Body', path: '/f', category: 'Health' },
 
 
  { id: 3, title: 'EcoQuiz', desc: 'Ecological Quiz', path: '/ecoquiz', category: 'Education' },
  { id: 4, title: 'Feedback', desc: 'Anything in mind to share with others. Share here', path: '/feedback', category: 'Community' },
  { id: 5, title: 'Carbon Footprint Calculator', desc: 'Estimate your daily CO₂ emissions', path: '/carbon', category: 'Tools' },

]

const Features = () => {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('All')

  const categories = ['All', ...new Set(allFeatures.map(f => f.category))]

  const filtered = allFeatures.filter(f => {
    const matchesSearch = f.title.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeCat === 'All' || f.category === activeCat
    return matchesSearch && matchesCat
  })

  return (
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

      {/* Search & Categories */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search features..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCat === cat ? 'active' : ''}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="features-grid">
        {filtered.map(feature => (
          <div key={feature.id} className="feature-card">
            <Link to={feature.path}>
              <h3>{feature.title}</h3>
            </Link>
            <p>{feature.desc}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No features match your search.</p>
        )}
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

export default Features 