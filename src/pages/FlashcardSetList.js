import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Chip,
  Grid,
  LinearProgress,
} from '@mui/material';
import {
  School as SchoolIcon,
  Timer as TimerIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

function FlashcardSetList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual data from your state management solution
  const [cardSets] = useState([
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Basic concepts of React',
      tags: ['programming', 'web'],
      totalCards: 20,
      reviewedCards: 14,
      nextReview: '2h',
    },
    {
      id: 2,
      title: 'JavaScript ES6+',
      description: 'Modern JavaScript features',
      tags: ['programming', 'web'],
      totalCards: 15,
      reviewedCards: 7,
      nextReview: '1d',
    },
    // Add more sets here
  ]);

  const filteredSets = cardSets.filter(
    (set) =>
      set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      set.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h1">
            Your Flashcard Sets
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/create')}
            startIcon={<SchoolIcon />}
          >
            Create New Set
          </Button>
        </Box>

        {/* Search */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by title or tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* Card Sets Grid */}
        <Grid container spacing={3}>
          {filteredSets.map((set) => (
            <Grid item xs={12} sm={6} key={set.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {set.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {set.description}
                  </Typography>
                  <Box sx={{ my: 2 }}>
                    {set.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ mr: 1 }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={(set.reviewedCards / set.totalCards) * 100}
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {set.reviewedCards}/{set.totalCards} cards reviewed
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TimerIcon sx={{ fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      Next: {set.nextReview}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      sx={{ mr: 1 }}
                      onClick={() => navigate(`/edit/${set.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigate(`/review/${set.id}`)}
                    >
                      Review
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredSets.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No flashcard sets found
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/create')}
              sx={{ mt: 2 }}
            >
              Create Your First Set
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default FlashcardSetList;
