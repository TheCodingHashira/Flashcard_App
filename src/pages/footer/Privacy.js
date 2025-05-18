import React from 'react';
import { Container, Typography, Box, Link, Paper } from '@mui/material';

function Privacy() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Privacy Policy
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Data Collection</Typography>
        <Typography paragraph>
          We collect data such as email addresses, study habits, and quiz performance 
          to improve your learning experience. This information helps us personalize 
          your learning journey and improve our services.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Data Usage</Typography>
        <Typography paragraph>
          Your data is solely used for personalized scheduling and analytics. 
          We do not sell or share your information with third parties under any circumstances.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Data Security</Typography>
        <Typography paragraph>
          All data is securely stored using AES-256 encryption with regular backups. 
          We implement industry-standard security measures to protect your information.
        </Typography>
      </Paper>

      <Box>
        <Typography variant="h5" gutterBottom>Your Rights</Typography>
        <Typography paragraph>
          You can request data deletion or download your data at any time by 
          contacting us at{' '}
          <Link href="mailto:privacy@flashlearn.com">
            privacy@flashlearn.com
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Privacy;
