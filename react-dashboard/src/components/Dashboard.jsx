import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { fetchDashboardData } from '../services/mockApi';
import Navbar from './Navbar'; // Ensure correct import path for Navbar

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!dashboardData) {
    return (
      <Typography variant="h6" align="center">
        No data available.
      </Typography>
    );
  }

  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 3 }}>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h4">{dashboardData.totalUsers}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Orders</Typography>
                <Typography variant="h4">{dashboardData.totalOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4">{dashboardData.revenue}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Recent Transactions</Typography>
                <Box sx={{ height: 300, width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dashboardData.recentTransactions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
