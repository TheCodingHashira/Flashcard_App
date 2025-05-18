import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  LinearProgress,
  IconButton,
} from '@mui/material';
import {
  Timer as TimerIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';

function FlashcardViewer() {
  const { setId } = useParams();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Mock data - replace with actual data from your state management solution
  const [cards] = useState([
    { id: 1, front: 'What is React?', back: 'A JavaScript library for building user interfaces' },
    { id: 2, front: 'What is JSX?', back: 'A syntax extension for JavaScript that allows you to write HTML-like code in JavaScript' },
    // Add more cards here
  ]);

  useEffect(() => {
    setProgress((currentCardIndex / cards.length) * 100);
  }, [currentCardIndex, cards.length]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (known) => {
    // Here you would implement spaced repetition logic
    // For now, we'll just move to the next card
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const resetReview = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setProgress(0);
  };

  if (cards.length === 0) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" sx={{ mt: 4 }}>
          No cards found in this set
        </Typography>
      </Container>
    );
  }

  const currentCard = cards[currentCardIndex];

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {/* Progress Bar */}
        <Box sx={{ mb: 2 }}>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="body2" color="text.secondary" align="right" sx={{ mt: 1 }}>
            {currentCardIndex + 1} / {cards.length} cards
          </Typography>
        </Box>

        {/* Flashcard */}
        <Card
          sx={{
            minHeight: 300,
            cursor: 'pointer',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s',
            position: 'relative',
            mb: 3,
          }}
          onClick={handleFlip}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backfaceVisibility: 'hidden',
              position: isFlipped ? 'absolute' : 'relative',
              width: '100%',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            <Typography variant="h5" component="div" align="center">
              {isFlipped ? currentCard.back : currentCard.front}
            </Typography>
          </CardContent>
        </Card>

        {/* Control Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<ThumbDownIcon />}
            onClick={() => handleResponse(false)}
            disabled={!isFlipped}
          >
            Don't Know
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<ThumbUpIcon />}
            onClick={() => handleResponse(true)}
            disabled={!isFlipped}
          >
            Know
          </Button>
        </Box>

        {/* Timer and Reset */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TimerIcon sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Next review in 3 days
            </Typography>
          </Box>
          <IconButton onClick={resetReview} color="primary" title="Reset Review">
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default FlashcardViewer;
