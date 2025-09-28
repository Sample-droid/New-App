// src/components/Login.jsx
import React from 'react';
import { Container, Paper, Box, Typography, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <Container className="login-container" maxWidth="xs">
      <Paper elevation={3} className="login-paper">
        <Typography variant="h4" className="login-title">
          
          
         Sign in continue
        </Typography>
        <Box component="form" className="login-form">
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="Your Registered Email"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Secret Key"
            variant="outlined"
            margin="normal"
          />

          <Button
            component={RouterLink}
            to="/home"
            variant="contained"
            className="login-button"
            fullWidth
          >
            Login
          </Button> <Typography >
          
          
          
          
<a href="/signup"><br/>Dont have an account? Signup </a>     </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
export default Login;