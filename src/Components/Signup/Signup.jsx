// src/components/Signup.jsx
import React from 'react';


import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <Container className="signup-container" maxWidth="xs">
      <Paper elevation={3} className="signup-paper">
        <Box p={4}>
          <Typography variant="h4" className="signup-title" align="center">
            Create Account
          </Typography>
          <Box component="form" className="signup-form">
            <TextField
              fullWidth
              label="Username"
              type="text"
              placeholder="Username"
              margin="normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="Email"
              margin="normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Secret key"
              margin="normal"
              variant="outlined"/>

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Confirm Secret key"
              margin="normal"
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
             component={RouterLink}
                         to="/home"
              className='signup-button'
                        fullWidth>
              
              Sign Up
            </Button>

            <Typography variant="body2" className="signup-text" align="center">
              <br/>Already have an account?{' '}
              <MuiLink component={RouterLink} to="/login">
                Login
              </MuiLink>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;