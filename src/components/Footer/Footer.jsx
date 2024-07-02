import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div style={{}}>
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="md">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            textAlign="center"
          >
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                About My Skills
              </Typography>
              <Typography variant="body1" color="textSecondary">
                I specialize in a variety of digital skills, including Writing,
                graphic design, and digital marketing. With a strong background
                in Coaching Young Guys. My graphic design skills help in
                creating visually appealing content, and my digital marketing
                expertise ensures effective online presence and engagement.
                Connect with me to learn more about how I can help you with your
                digital needs.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IconButton
                color="primary"
                aria-label="LinkedIn"
                component="a"
                href=" https://www.linkedin.com/company/hgsc%C2%B2-community/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IconButton
                color="primary"
                aria-label="Facebook"
                component="a"
                href="https://www.facebook.com/profile.php?id=61553370504723&mibextid=LQQJ4d"
                target="_blank"
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IconButton
                color="primary"
                aria-label="Email"
                component="a"
                href="mailto:bennypresh42@gmail.com"
                target="_blank"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IconButton
                color="primary"
                aria-label="WhatsApp"
                component="a"
                href="https://wa.me/message/UBJLJZJGN4ESE1"
                target="_blank"
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{ marginTop: "16px" }}
          >
            {"© "}
            {new Date().getFullYear()} Your Website. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
