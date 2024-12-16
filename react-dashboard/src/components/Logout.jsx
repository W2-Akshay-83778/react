// src/pages/Logout.jsx
import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a logout process
    setTimeout(() => {
      navigate('/'); // Redirect to home after logout
    }, 2000);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Logging out...
      </Typography>
      <Typography variant="body1">You will be redirected shortly.</Typography>
    </Box>
  );
};

export default Logout;
