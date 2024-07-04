import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import "./HeroPage.css";

const Hero = () => {
  return (
    <Box className="hero-container">
      <Box className="hero-content">
        <Typography variant="h2" className="hero-title">
          <span className="hero-title-text">
            <Typewriter
              words={["Welcome to HGSC² Digital Skills Company"]}
              loop={true}
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Master the skills you need to succeed
        </Typography>
        <Button
          variant="contained"
          className="hero-button"
          component="a"
          href="https://wa.me/message/UBJLJZJGN4ESE1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "25px" }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
