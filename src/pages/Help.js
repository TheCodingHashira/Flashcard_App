import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function Help() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Help & FAQ
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            How to use the Flashcard App
          </Typography>
          <Typography paragraph>
            1. Create flashcard sets by clicking the "Create New Set" button
          </Typography>
          <Typography paragraph>
            2. Review your flashcards using the spaced repetition system
          </Typography>
          <Typography paragraph>
            3. Track your progress in the Statistics page
          </Typography>
          <Typography paragraph>
            4. Customize your review schedule in Settings
          </Typography>
          
          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            About Spaced Repetition
          </Typography>
          <Typography paragraph>
            Spaced repetition is a learning technique that incorporates increasing intervals of time between subsequent review of previously learned material to exploit the psychological spacing effect.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Help;
