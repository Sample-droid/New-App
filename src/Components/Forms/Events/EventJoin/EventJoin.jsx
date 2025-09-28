// src/components/EventJoin.jsx
import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import './EventJoin.css';

// Replace with data from your API
const mockEvents = [
  {
    id: 'e1',
    name: 'Beach Cleanup',
    date: '2025-10-07',
    
    
    
    
    location: 'Beach',
    description: 'Join us to clean up the beach and protect marine life.'
  },
  {
    id: 'e2',
    name: 'Tree Plantation',
    date: '2025-11-12',
    location: 'Forest',
    description: 'Help plant saplings and contribute to reforestation efforts.'
  },
  {
    id: 'e3',
    name: 'Food Drive',
    date: '2025-12-01',
   
    location: 'City',
    description: 'Distribute meals to underprivileged communities.'
  }
];

const EventJoin = () => (
  <Container className="event-join__container">
    <Typography variant="h4" align="center" className="event-join__header">
      Current Events
    </Typography>

    <Grid container spacing={4}>
      {mockEvents.map(evt => (
        <Grid item xs={12} sm={6} md={4} key={evt.id}>
          <Card className="event-card">
            <CardContent>
              <Typography variant="h5" className="event-card__title">
                {evt.name}
              </Typography>
              <Typography variant="body2" className="event-card__meta">
                {new Date(evt.date).toLocaleDateString()} | {evt.location}
              </Typography>
              <Typography variant="body2" className="event-card__desc">
                {evt.description}
              </Typography>
            </CardContent>

            <CardActions className="event-card__actions">
              <Button
                component={Link}
                to={`/join/${evt.id}`}
                variant="outlined"
                className="event-card__button"
              >
                Join Event
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default EventJoin;