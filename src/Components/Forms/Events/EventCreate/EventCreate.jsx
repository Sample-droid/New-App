// src/components/EventCreate.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import RefreshIcon from '@mui/icons-material/Refresh';
import './EventCreate.css';

const generateCode = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const EventCreate = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    code: '',
    date: null,
    location: '',
    description: '',
    image: null
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setForm(prev => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDateChange = (newDate) => {
    setForm(prev => ({ ...prev, date: newDate }));
  };

  const handleGenerateCode = () => {
    setForm(prev => ({ ...prev, code: generateCode() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Container maxWidth="sm" className="event-create__container">
      <Typography variant="h4" align="center" gutterBottom>
        Create New Event
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="event-create__form"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Event Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="event-create__field"
          required
        /><br/>

        
       <TextField  
         fullWidth
  
  label="Event Code"
  value={form.code}
  InputProps={{
    readOnly: true,
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={handleGenerateCode}
          edge="end"
          size="small"
        >
          <RefreshIcon fontSize="small" />
        </IconButton>
      </InputAdornment>
    ),
  }}
 /><br/>


        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Event Date"
            value={form.date}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                className="event-create__field"
                required
              />
            )}/><br/>
       
        </LocalizationProvider>
<TextField
          
          fullWidth
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="event-create__field"
          required
        /><br/>

        <TextField
          fullWidth
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="event-create__field"
          multiline
          rows={4}
        /><br/>

        <Button
          variant="outlined"
          component="label"
          className="event-create__upload"
        >
          Upload Image
          <input
            type="file"
            name="image"
            accept="image/*"
            hidden
            onChange={handleChange}
          />
        </Button><br/>

        {preview && (
          <Box className="event-create__preview">
            <Typography variant="subtitle1">Image Preview:</Typography>
            <img src={preview} alt="Event Preview" />
          </Box>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="event-create__submit"
        >
          Create Event
        </Button>
      </Box>
    </Container>
  );
};
export default EventCreate;