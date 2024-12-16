import React from "react";
import { faker } from "@faker-js/faker";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import Navbar from "./Navbar"; // Ensure correct path to your Navbar component

const Profile = () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
    phone: faker.phone.number(),
  };

  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Profile Content */}
      <Box
        sx={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Profile Page
        </Typography>

        {/* Profile Card */}
        <Card
          sx={{
            width: "100%",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              {/* Avatar */}
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{
                  width: 100,
                  height: 100,
                  border: "2px solid #1976d2",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />

              {/* User Details */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user.phone}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user.address}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
