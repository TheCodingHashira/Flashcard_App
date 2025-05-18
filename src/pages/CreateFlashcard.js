import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Typography, TextField, Button, Card, CardContent, Box, IconButton, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';


function CreateFlashcard() {
  const theme = useTheme();
  const [cards, setCards] = useState([{ front: '', back: '' }]);
  const [title, setTitle] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleAddCard = () => {
    setCards([...cards, { front: '', back: '' }]);
  };

  const handleRemoveCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  const handleCardChange = (index, side, value) => {
    const newCards = [...cards];
    newCards[index][side] = value;
    setCards(newCards);
  };

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)'
              : 'linear-gradient(45deg, #2196F3 30%, #1976D2 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            mb: 3
          }}
        >
          Create New Flashcard Set
        </Typography>

        <TextField
          fullWidth
          label="Set Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 4 }}
          variant="outlined"
        />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Preview
          </Typography>
          <motion.div
            style={{
              perspective: 1000,
              cursor: 'pointer'
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={isFlipped ? 'back' : 'front'}
              variants={flipVariants}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: 200,
                transformStyle: 'preserve-3d'
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  position: 'absolute',
                  width: '100%',
                  backfaceVisibility: 'hidden'
                }}
              >
                <CardContent>
                  <Typography variant="h5" align="center">
                    {cards[previewIndex]?.front || 'Front side'}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '100%',
                  position: 'absolute',
                  width: '100%',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <CardContent>
                  <Typography variant="h5" align="center">
                    {cards[previewIndex]?.back || 'Back side'}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Box>

        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
            sx={{ 
              mb: 2, 
              position: 'relative',
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                transform: 'translateY(-2px)',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 8px 16px rgba(0,0,0,0.4)' 
                  : '0 8px 16px rgba(0,0,0,0.1)',
              }
            }}>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <TextField
                      fullWidth
                      label="Front"
                      value={card.front}
                      onChange={(e) => handleCardChange(index, 'front', e.target.value)}
                      onFocus={() => setPreviewIndex(index)}
                    />
                    <TextField
                      fullWidth
                      label="Back"
                      value={card.back}
                      onChange={(e) => handleCardChange(index, 'back', e.target.value)}
                      onFocus={() => setPreviewIndex(index)}
                    />
                  </Box>
                  <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveCard(index)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          mt: 3,
          position: 'sticky',
          bottom: 16,
          zIndex: 10,
          p: 2,
          borderRadius: 2,
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 12px rgba(0,0,0,0.4)'
            : '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleAddCard}
              sx={{
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                }
              }}
            >
              Add Card
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="contained"
              startIcon={saving ? null : <SaveIcon />}
              onClick={handleSave}
              color="primary"
              disabled={saving}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'translateX(100%)',
                }
              }}
            >
              {saving ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid', borderTopColor: 'transparent', marginRight: 8 }}
                  />
                  Saving...
                </Box>
              ) : 'Save Set'}
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        message="Flashcard set saved successfully!"
      />
    </Container>
  );
}

export default CreateFlashcard;
