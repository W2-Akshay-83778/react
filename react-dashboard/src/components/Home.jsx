// src/pages/Home.jsx
import React from 'react';
import { faker } from '@faker-js/faker';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Home = () => {
  const products = Array.from({ length: 6 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
  }));

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <img src={product.image} alt={product.name} style={{ width: '100%' }} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">Price: ${product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
