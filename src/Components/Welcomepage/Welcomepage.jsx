// src/components/Welcomepage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Button,
  IconButton,
  Box,
  Grid
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { motion } from 'framer-motion';

import './Welcomepage.css';

const Welcomepage = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box className="welcome-container">
        <Box className="overlay" />

        <Container className="welcome-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" className="title">
              Course of Humanity is to save not devour. Function as one not two.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography variant="h5" className="subtitle">
              Join us in our mission to protect and secure a healthier future for all.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ArrowForwardIosIcon />}
              href="/login"
              className="cta-button"
            >
              Get Involved
            </Button>
          </motion.div>
<br/><br/><br/><br/> <br/><br/>

          <IconButton
            className="scroll-indicator"
            onClick={scrollToAbout}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Container>
      </Box>

      {/* About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="about-section"
      >
        <Container>
          <Typography variant="h4" className="about-title">
            About Our Mission
          </Typography>
          <Typography variant="body1" className="about-text">
            At HumanityFirst, we empower communities through sustainable housing, nutritious meal
            programs, and lifelong learning. We believe in holistic well-being—building safe homes,
            feeding bodies, and nurturing minds.
          </Typography>

          <Grid container spacing={4} className="about-cards">
            <Grid item xs={12} md={4}>
              <motion.div
                className="about-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <HomeIcon className="about-icon" />
                <Typography variant="h6">Sustainable Housing</Typography>
                <Typography variant="body2">
                  We construct eco-friendly homes using local materials and community labor.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                className="about-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <FastfoodIcon className="about-icon" />
                <Typography variant="h6">Nutritious Meals</Typography>
                <Typography variant="body2">
                  Our food programs deliver balanced diets crafted by nutrition experts.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                className="about-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <LocalLibraryIcon className="about-icon" />
                <Typography variant="h6">Education & Skills</Typography>
                <Typography variant="body2">
                  Workshops and training courses that uplift individuals and families.
                </Typography>
              </motion.div>
            </Grid>
          </Grid><br/>
        </Container>
      </motion.div>
    </Box>
    
  );
};

export default Welcomepage;