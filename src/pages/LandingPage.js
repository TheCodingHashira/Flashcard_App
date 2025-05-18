import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  LinearProgress,
  Switch,
  FormControlLabel,
  Card,
} from '@mui/material';
import {
  Timer as TimerIcon,
  Create as CreateIcon,
  Assessment as AssessmentIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';
import FlashcardPreview from '../components/FlashcardPreview';

function LandingPage({ toggleDarkMode, darkMode }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [progress, setProgress] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    // Animate counter
    const counter = setInterval(() => {
      setStudentsCount((old) => Math.min(old + 1, 1000));
    }, 20);

    return () => {
      clearInterval(timer);
      clearInterval(counter);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <Container maxWidth="lg">
      {/* Dark Mode Toggle */}
      <Box sx={{ position: 'absolute', right: 20, top: 20 }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                icon={<LightModeIcon />}
                checkedIcon={<DarkModeIcon />}
              />
            }
            label={darkMode ? "Dark Mode" : "Light Mode"}
          />
        </motion.div>
      </Box>

      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            pt: { xs: 4, md: 8 },
            pb: 6,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            <motion.div variants={itemVariants}>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                    : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                Master Anything with Spaced Repetition
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h5" color="text.secondary" paragraph>
                Create, study, and track your progress with our intelligent flashcard system
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/sets')}
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 10px 4px rgba(33, 203, 243, .3)',
                    },
                  }}
                >
                  Start Learning
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/create')}
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  Create Cards
                </Button>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <SchoolIcon color="primary" />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Joined by <strong>{studentsCount.toLocaleString()}+</strong> students
                </Typography>
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, maxWidth: isMobile ? '100%' : '50%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
                <FlashcardPreview />
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 8 }}>
          <motion.div variants={containerVariants}>
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
              Why Choose Our Flashcard App?
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  icon: <SpeedIcon fontSize="large" />,
                  title: 'Fast Learning',
                  description: 'Optimize your study time with our spaced repetition algorithm',
                  color: '#2196F3'
                },
                {
                  icon: <PsychologyIcon fontSize="large" />,
                  title: 'Smart Review',
                  description: 'AI-powered system adapts to your learning pace',
                  color: '#4CAF50'
                },
                {
                  icon: <TrendingUpIcon fontSize="large" />,
                  title: 'Track Progress',
                  description: 'Visualize your improvement with detailed analytics',
                  color: '#FF4081'
                }
              ].map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        background: theme.palette.mode === 'dark' 
                          ? 'linear-gradient(45deg, rgba(33,150,243,0.1) 0%, rgba(33,203,243,0.1) 100%)'
                          : 'white',
                        border: theme.palette.mode === 'dark' 
                          ? '1px solid rgba(255,255,255,0.1)'
                          : 'none',
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: feature.color,
                          background: `${feature.color}20`,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom align="center">
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" align="center" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Progress Section */}
        <Box sx={{ my: 8 }}>
          <motion.div variants={containerVariants}>
            <Typography variant="h6" gutterBottom align="center">
              Overall Learning Progress
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 10, 
                borderRadius: 5,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                }
              }} 
            />
          </motion.div>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              icon: <TimerIcon sx={{ fontSize: 40, mb: 2 }} />,
              title: 'Spaced Repetition',
              description: 'Learn efficiently with our scientifically-proven spaced repetition algorithm'
            },
            {
              icon: <CreateIcon sx={{ fontSize: 40, mb: 2 }} />,
              title: 'Easy Creation',
              description: 'Create and organize your flashcards with our intuitive interface'
            },
            {
              icon: <AssessmentIcon sx={{ fontSize: 40, mb: 2 }} />,
              title: 'Track Progress',
              description: 'Monitor your learning with detailed statistics and insights'
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(to bottom, rgba(30,30,30,0.8), rgba(20,20,20,0.8))'
                      : 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(240,240,240,0.8))',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0,0,0,0.3)'
                      : '0 8px 32px rgba(31,38,135,0.15)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0,0,0,0.4)'
                        : '0 12px 40px rgba(31,38,135,0.2)',
                    }
                  }}
                >
                  {feature.icon}
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default LandingPage;
