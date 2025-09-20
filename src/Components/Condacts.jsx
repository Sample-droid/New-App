// src/components/ContactPage.jsx
import React from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Box 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import './Condacts.css'
const ContactPage = () => {
  return (
    <Container maxWidth="sm" className="contact-container">
      <Paper elevation={3} className="contact-paper">
        <Box p={4}>
          <Typography variant="h4" gutterBottom align="center">
            Get in Touch
          </Typography>
          <form className="contact-form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={6}
                  required
                />
              </Grid>
              <Grid item xs={12} className="submit-btn-container">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  size="large"
                  fullWidth
                >
                  Send Message
                </Button>
              </Grid></Grid>

<footer className="condact-footer">
        <p>© 2025 MyApp. All rights reserved.</p>
      </footer>
          </form>
        </Box>
      </Paper>
    </Container>
    
  );
};

export default ContactPage;