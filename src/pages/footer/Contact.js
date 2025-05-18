import React from 'react';
import { Container, Typography, Box, Link, Paper, Grid } from '@mui/material';
import { Email, Phone, Chat } from '@mui/icons-material';

function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="h6">Email</Typography>
            </Box>
            <Link href="mailto:contact@flashlearn.com">
              contact@flashlearn.com
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="h6">Phone</Typography>
            </Box>
            <Typography>+1-234-567-890</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Chat sx={{ mr: 1 }} />
              <Typography variant="h6">Live Chat</Typography>
            </Box>
            <Typography>9 AM - 6 PM (UTC)</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Business Inquiries</Typography>
        <Typography paragraph>
          For partnerships or bulk licenses for educational institutions, 
          please contact us at{' '}
          <Link href="mailto:business@flashlearn.com">
            business@flashlearn.com
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
