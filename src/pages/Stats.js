import React from 'react';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Stats() {
  const theme = useTheme();
  // Mock data - replace with actual data from your state management solution
  const reviewData = [
    { date: '2023-05-11', known: 15, unknown: 5 },
    { date: '2023-05-12', known: 18, unknown: 3 },
    { date: '2023-05-13', known: 20, unknown: 2 },
    { date: '2023-05-14', known: 25, unknown: 5 },
    { date: '2023-05-15', known: 22, unknown: 3 },
    { date: '2023-05-16', known: 28, unknown: 2 },
    { date: '2023-05-17', known: 30, unknown: 1 },
  ];

  const tagData = [
    { name: 'Programming', value: 85 },
    { name: 'Math', value: 70 },
    { name: 'Science', value: 60 },
    { name: 'Language', value: 90 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const recentActivity = [
    { set: 'React Fundamentals', result: 'Known', time: '2 hours ago' },
    { set: 'JavaScript ES6+', result: 'Unknown', time: '3 hours ago' },
    { set: 'Python Basics', result: 'Known', time: '5 hours ago' },
  ];

  return (
    <Container maxWidth="lg">
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
          Learning Statistics
        </Typography>

        <Grid container spacing={3}>
          {/* Summary Cards */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                sx={{
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
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Total Cards Reviewed
                </Typography>
                <Typography variant="h4">158</Typography>
              </CardContent>
            </Card>
          </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                sx={{
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
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Review Streak
                </Typography>
                <Typography variant="h4">7 days</Typography>
              </CardContent>
            </Card>
          </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                sx={{
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
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Success Rate
                </Typography>
                <Typography variant="h4">85%</Typography>
              </CardContent>
            </Card>
          </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                sx={{
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
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Active Sets
                </Typography>
                <Typography variant="h4">12</Typography>
              </CardContent>
            </Card>
          </motion.div>
          </Grid>

          {/* Review Trend */}
          <Grid item xs={12} md={8}>
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
                Review Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={reviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="known"
                    stroke={theme.palette.primary.main}
                    strokeWidth={2}
                    dot={{ stroke: theme.palette.primary.main, strokeWidth: 2, r: 4 }}
                    activeDot={{ stroke: theme.palette.primary.main, strokeWidth: 2, r: 6 }}
                    name="Known"
                  />
                  <Line
                    type="monotone"
                    dataKey="unknown"
                    stroke={theme.palette.secondary.main}
                    strokeWidth={2}
                    dot={{ stroke: theme.palette.secondary.main, strokeWidth: 2, r: 4 }}
                    activeDot={{ stroke: theme.palette.secondary.main, strokeWidth: 2, r: 6 }}
                    name="Unknown"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Tag Performance */}
          <Grid item xs={12} md={4}>
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
                Performance by Tag
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tagData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tagData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Daily Performance */}
          <Grid item xs={12}>
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
                Daily Performance
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={reviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="known" 
                    name="Known" 
                    fill={theme.palette.primary.main}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="unknown" 
                    name="Unknown" 
                    fill={theme.palette.secondary.main}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12}>
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
                Recent Activity
              </Typography>
              <Grid container spacing={2}>
                {recentActivity.map((activity, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Card 
                      variant="outlined"
                      sx={{
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 4px 8px rgba(0,0,0,0.4)'
                            : '0 4px 8px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {activity.set}
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          color={activity.result === 'Known' ? 'success.main' : 'error.main'}
                        >
                          {activity.result}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Stats;
