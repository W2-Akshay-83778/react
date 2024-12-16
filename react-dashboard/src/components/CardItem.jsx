// src/components/CardItem.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const CardItem = ({ title, value }) => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
  );
};

export default CardItem;
