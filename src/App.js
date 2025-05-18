import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page components
import LandingPage from './pages/LandingPage';
import FlashcardViewer from './pages/FlashcardViewer';
import FlashcardSetList from './pages/FlashcardSetList';
import CreateFlashcard from './pages/CreateFlashcard';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
// Footer pages
import Help from './pages/footer/Help';
import About from './pages/footer/About';
import Contact from './pages/footer/Contact';
import Privacy from './pages/footer/Privacy';
import Terms from './pages/footer/Terms';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#6B4EFF',
            light: '#9B8AFB',
            dark: '#4930E3',
            contrastText: '#fff',
          },
          secondary: {
            main: '#FF6B6B',
            light: '#FF9B9B',
            dark: '#E34930',
            contrastText: '#fff',
          },
          background: {
            default: '#FAFAFA',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#666666',
          },
          divider: 'rgba(0, 0, 0, 0.12)',
        }
      : {
          primary: {
            main: '#90CAF9',
            light: '#E3F2FD',
            dark: '#42A5F5',
            contrastText: '#000',
          },
          secondary: {
            main: '#F48FB1',
            light: '#F8BBD0',
            dark: '#EC407A',
            contrastText: '#000',
          },
          background: {
            default: '#121212',
            paper: '#1E1E1E',
          },
          text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.7)',
          },
          divider: 'rgba(255, 255, 255, 0.12)',
        }),
    action: {
      active: mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)',
      hover: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
      selected: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)',
      disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
      disabledBackground: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('light');
  
  const theme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={mode === 'dark'} />
          <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
            <Routes>
              <Route path="/" element={<LandingPage toggleDarkMode={toggleDarkMode} darkMode={mode === 'dark'} />} />
              <Route path="/review/:setId" element={<FlashcardViewer />} />
              <Route path="/sets" element={<FlashcardSetList />} />
              <Route path="/create" element={<CreateFlashcard />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/footer/help" element={<Help />} />
              <Route path="/footer/about" element={<About />} />
              <Route path="/footer/contact" element={<Contact />} />
              <Route path="/footer/privacy" element={<Privacy />} />
              <Route path="/footer/terms" element={<Terms />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
