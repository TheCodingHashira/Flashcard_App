import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About FlashLearn
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Our Mission</Typography>
        <Typography paragraph>
          To make learning smarter, not harder. We believe in optimizing memory retention 
          through strategic review schedules and proven spaced repetition techniques.
        </Typography>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Key Features</Typography>
        <ul>
          <Typography component="li">Adaptive Spaced Repetition Algorithm</Typography>
          <Typography component="li">Customizable Flashcard Sets</Typography>
          <Typography component="li">Progress Tracking and Analytics</Typography>
          <Typography component="li">Gamified Quizzes and Challenges</Typography>
          <Typography component="li">Multilingual Support</Typography>
        </ul>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Our Story</Typography>
        <Typography paragraph>
          FlashLearn started as a personal project to tackle information overload 
          and evolved into a full-fledged learning platform. We're continuously 
          improving based on user feedback and educational research.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
