import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

function Help() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to FlashLearn Help Center
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Getting Started</Typography>
        <Typography paragraph>
          Learn how to make the most of our spaced repetition flashcard app with these guides:
        </Typography>
        <ul>
          <Typography component="li">Creating your first flashcard set</Typography>
          <Typography component="li">Understanding the dashboard</Typography>
          <Typography component="li">Setting up review schedules</Typography>
          <Typography component="li">Tracking your progress</Typography>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>FAQs</Typography>
        <Typography paragraph>
          Find answers to commonly asked questions:
        </Typography>
        <ul>
          <Typography component="li">How does spaced repetition work?</Typography>
          <Typography component="li">Can I customize review intervals?</Typography>
          <Typography component="li">How to import/export flashcards?</Typography>
          <Typography component="li">What to do if I forget my password?</Typography>
        </ul>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>Need Help?</Typography>
        <Typography paragraph>
          Contact our support team at{' '}
          <Link href="mailto:support@flashlearn.com">
            support@flashlearn.com
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Help;
