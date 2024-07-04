// src/OurVision.js
import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const BackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundImage: "url('https://source.unsplash.com/random?vision')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: theme.spacing(8, 0),
  color: "#fff",
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    zIndex: 1,
  },
}));

const Content = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(6),
  backgroundColor: "whitesmoke",
  color: "black",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const VisionImage = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  overflow: "hidden",
  transition: "opacity 0.5s",
}));

const imageUrls = [
  "hgsc-hero.jpeg",
  "hero.png", // Add your image URLs here
  "hero.jpg",
  "hero1.png",
  // ...add more images if needed
];

const OurVision = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setShowImage(true);
      }, 500); // Adjust the time to match the transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer maxWidth={false}>
      <Content>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <VisionImage
              component="img"
              alt="Vision Image"
              src={imageUrls[currentImageIndex]}
              sx={{ opacity: showImage ? 1 : 0 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              style={{ color: "yellow" }}
            >
              Our Vision
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              At HGSC² Digital Skills, Our vision is to be the leading company
              of accessible digital skills training globally, creating a world
              where financial barriers no longer prevent individuals from
              achieving their full potential. <br />
              We envision a future where everyone, regardless of their economic
              background, has the opportunity to build a prosperous career and
              lead a fulfilling life through digital skills.
              <br />
              We have successfully coached over 500 individuals into experts and
              certified them for paid classes.
              <br /> And over 2000 individuals in different trainings organized
              by the company.
              <br />
              You can never regret training with us, we are famous in training
              the best. We aim to create a future where [briefly describe your
              envisioned future].
            </Typography>
            <Typography variant="body1" component="p">
              We believe that through innovation and dedication, we can
              transform lives and communities, empowering people to realize
              their dreams and contribute meaningfully to the digital economy.
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </BackgroundContainer>
  );
};

export default OurVision;
