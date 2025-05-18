import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Alert,
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  Notifications as NotificationsIcon,
  Palette as PaletteIcon,
  Timer as TimerIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

function Settings() {
  const theme = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [reminderTime, setReminderTime] = useState(new Date());
  const [fontSize, setFontSize] = useState('medium');
  const [intervals, setIntervals] = useState({
    easy: 7,
    medium: 3,
    hard: 1,
  });

  const handleExportData = () => {
    // Implement export functionality
    console.log('Exporting data...');
  };

  const handleResetData = () => {
    // Implement reset functionality
    console.log('Resetting data...');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, minHeight: '100vh' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)'
              : 'linear-gradient(45deg, #2196F3 30%, #1976D2 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            mb: 4
          }}
        >
          Settings
        </Typography>

        <Grid container spacing={3}>
          {/* Appearance Settings */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                sx={{ 
                  p: 3,
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 16px rgba(0,0,0,0.4)'
                      : '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}
              >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  '& .MuiSvgIcon-root': {
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }
                }}
              >
                <PaletteIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Appearance</Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                }
                label="Dark Mode"
              />
              <Box sx={{ mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>Font Size</InputLabel>
                  <Select
                    value={fontSize}
                    label="Font Size"
                    onChange={(e) => setFontSize(e.target.value)}
                  >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Paper>
          </motion.div>
          </Grid>

          {/* Spaced Repetition Settings */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                sx={{ 
                  p: 3,
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 16px rgba(0,0,0,0.4)'
                      : '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}
              >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  '& .MuiSvgIcon-root': {
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }
                }}
              >
                <TimerIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Spaced Repetition</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Easy Interval (days)"
                    type="number"
                    value={intervals.easy}
                    onChange={(e) =>
                      setIntervals({ ...intervals, easy: parseInt(e.target.value) })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Medium Interval (days)"
                    type="number"
                    value={intervals.medium}
                    onChange={(e) =>
                      setIntervals({ ...intervals, medium: parseInt(e.target.value) })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Hard Interval (days)"
                    type="number"
                    value={intervals.hard}
                    onChange={(e) =>
                      setIntervals({ ...intervals, hard: parseInt(e.target.value) })
                    }
                  />
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
          </Grid>

          {/* Notification Settings */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                sx={{ 
                  p: 3,
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 16px rgba(0,0,0,0.4)'
                      : '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}
              >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  '& .MuiSvgIcon-root': {
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }
                }}
              >
                <NotificationsIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Notifications</Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                }
                label="Enable Daily Reminders"
              />
              {notifications && (
                <Box sx={{ mt: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Reminder Time"
                      value={reminderTime}
                      onChange={(newValue) => setReminderTime(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              )}
            </Paper>
          </motion.div>
          </Grid>

          {/* Data Management */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                sx={{ 
                  p: 3,
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 16px rgba(0,0,0,0.4)'
                      : '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}
              >
              <Typography variant="h6" gutterBottom>
                Data Management
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={handleExportData}
                    sx={{
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Export Data
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={handleResetData}
                    sx={{
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Reset All Data
                  </Button>
                </motion.div>
              </Box>
              <Alert 
                severity="warning"
                sx={{
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(237, 108, 2, 0.1)' : 'rgba(255, 152, 0, 0.1)',
                  '& .MuiAlert-icon': {
                    color: theme.palette.warning.main
                  }
                }}
              >
                Resetting data will permanently delete all your flashcards and progress.
                This action cannot be undone.
              </Alert>
            </Paper>
          </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Settings;
