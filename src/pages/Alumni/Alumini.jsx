// src/components/FlyerCard.js
import React from "react";
import { Card, CardMedia, Grid, Container, Typography } from "@mui/material";

const flyerImages = ["3rs batch.jpg", "award.png", "2nd batch.jpg"];

const FlyerCard = () => {
  return (
    <div style={{ backgroundColor: "black", paddingBottom: "80px" }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{
            color: "green",
            textAlign: "center",
            paddingTop: "70px",
            textTransform: "uppercase",
          }}
        >
          Meet Some of Our Alumni (Former Students){" "}
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ paddingTop: "70px" }}
        >
          {flyerImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={image}
                  alt={`Flyer ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default FlyerCard;
