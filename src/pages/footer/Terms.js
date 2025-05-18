import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Terms() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Terms and Conditions
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>1. Account Responsibility</Typography>
        <Typography paragraph>
          • Users are responsible for maintaining the confidentiality of their login credentials
        </Typography>
        <Typography paragraph>
          • Misuse of the platform (e.g., spamming, sharing inappropriate content) 
          will result in account suspension
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>2. Content Ownership</Typography>
        <Typography paragraph>
          All flashcard content created by users remains their intellectual property. 
          FlashLearn does not claim ownership but reserves the right to moderate content.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>3. Service Availability</Typography>
        <Typography paragraph>
          FlashLearn is not liable for data loss due to unforeseen circumstances 
          such as server outages or system updates. We recommend regular backups 
          of important flashcard sets.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>4. Account Termination</Typography>
        <Typography paragraph>
          Accounts inactive for more than 12 months may be deleted, with prior 
          notification sent via email. Users can request account reactivation 
          within 30 days of termination.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Terms;
