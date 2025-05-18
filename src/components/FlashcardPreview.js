import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography, useTheme } from '@mui/material';
import './FlashcardPreview.css';

const FlashcardPreview = () => {
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();

  return (
    <div
      style={{
        width: '280px',
        height: '200px'
      }}
      className="perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front */}
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            borderRadius: 2,
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.background.paper
          }}
          className="backface-hidden"
        >
          <Typography variant="h6" align="center" color="textPrimary">
            What is spaced repetition?
          </Typography>
        </Paper>

        {/* Back */}
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            borderRadius: 2,
            backgroundColor: theme.palette.primary.main,
            transform: 'rotateY(180deg)'
          }}
          className="backface-hidden"
        >
          <Typography variant="body1" align="center" color="primary.contrastText">
            A learning technique that increases intervals between review sessions to enhance retention.
          </Typography>
        </Paper>
      </motion.div>
    </div>
  );
};

export default FlashcardPreview;
