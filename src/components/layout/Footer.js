import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link, Typography, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/TheCodingHashira', label: 'GitHub' },
    { icon: <TwitterIcon />, url: 'https://x.com/VivekPatnaik204', label: 'Twitter' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/vivek-patnaik-19724a30a/', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { text: 'Help', path: '/footer/help' },
    { text: 'About', path: '/footer/about' },
    { text: 'Contact', path: '/footer/contact' },
    { text: 'Privacy', path: '/footer/privacy' },
    { text: 'Terms', path: '/footer/terms' },
  ];
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.2)'
          : 'rgba(0, 0, 0, 0.03)',
        borderTop: `1px solid ${theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(0, 0, 0, 0.05)'}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, md: 3 },
            }}
          >
            {footerLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  component={RouterLink}
                  to={link.path}
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(144, 202, 249, 0.08)'
                        : 'rgba(33, 150, 243, 0.08)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                opacity: 0.8,
                '& a': {
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                },
              }}
            >
              © {new Date().getFullYear()} FlashLearn. Made with ❤️ for learners.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
