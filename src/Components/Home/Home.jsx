
import './Home.css'


import '../Footer.css'
import { AppBar, Box, IconButton, Button, Toolbar, Typography } from '@mui/material'
const Home = () => {
  return (
   
      
      <div className="home-container">
      <header className="home-header">
        
         <Box >
      
      
      <AppBar color="Grey"  position="static"><Toolbar>
        
          
          <h1>Guardliners</h1>
        <nav className='nav-list'>
          
           
            
            <a href="/features">Features</a><a href="/contact">Contact</a>
          
        </nav>
      
        </Toolbar>
      
      </AppBar>
    </Box>
       </header>
<section className="hero">
      

      <section className="features" >
        <div className="feature-card" ><div classname="hero button"><h3><a href="/eventcreate"><button>Create Event</button></a></h3>
        
<p>Organize and manage your events with ease.</p>
        </div></div>
        <div className="feature-card">
          
          
          
           <div classname="hero button"><h3><a href="/eventjoin"><button>Join Event</button></a></h3>
        <p>Connect and participate in community events.</p>  </div></div>
       

         
</section>
     
      <h1>Your Journey</h1>
       <h2> <p>A Goal With No End !!</p></h2>
        
        
        {/* <p>Join us in making a difference. Together, we can create a sustainable future for generations to come.</p> */}
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
  </footer></div>
    
  )
}

export default Home