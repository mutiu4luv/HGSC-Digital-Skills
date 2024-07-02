// src/OurMission.js
import React from "react";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";

const OurMission = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                borderRadius: 2,
                height: "100%",
              }}
              alt="Mission Image"
              src="ceos.jpg"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              style={{ color: "red" }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              At HGSC² Digital Skills, our mission is to empower individuals by
              providing affordable, high-quality digital skills training. <br />
              We aim to help those with financial limitations gain access to
              high-paying career opportunities. <br />
              Our commitment is to exceed expectations, delivering exceptional
              value and life-changing learning experiences. We strive to achieve
              this through a combination of comprehensive online courses,
              personalized mentorship, industrial trainings, in-depth training
              on tools for job search and partnerships with industry leaders to
              ensure up-to-date and relevant skill development..
            </Typography>
            <Typography variant="body1" component="p">
              Join us on our journey to make a difference. Together, we can
              bridge the digital divide and create a more equitable future for
              all.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OurMission;
