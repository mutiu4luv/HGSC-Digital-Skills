import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/system";
import { red } from "@mui/material/colors";
import GmailIcon from "../components/Gmail/GmailIcon"; // Adjust the path as needed
import useScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Contact = () => {
  const GreenIconButton = styled(IconButton)({
    color: "#25D366", // WhatsApp green color
  });

  const RedIconButton = styled(IconButton)({
    color: red[500], // Gmail red color
  });
  useScrollToTop();

  return (
    <Container style={{ paddingTop: "60px" }}>
      <Box my={4}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "green",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph style={{ paddingTop: "50px" }}>
          We would love to hear from you! Connect with us through any of the
          following platforms:
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ paddingTop: "40px" }}
        >
          <Grid item>
            <MuiLink
              href="https://www.facebook.com/profile.php?id=61553370504723&mibextid=LQQJ4d"
              target="_blank"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1" display="inline">
                Facebook
              </Typography>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink
              href="https://www.linkedin.com/company/hgsc%C2%B2-community/"
              target="_blank"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1" display="inline">
                LinkedIn
              </Typography>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink
              href="https://wa.me/message/UBJLJZJGN4ESE1"
              target="_blank"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <GreenIconButton aria-label="WhatsApp">
                <WhatsAppIcon fontSize="large" />
              </GreenIconButton>
              <Typography variant="body1" display="inline">
                WhatsApp
              </Typography>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink
              href="mailto:bennypresh42@gmail.com"
              target="_blank"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <RedIconButton aria-label="Gmail">
                <GmailIcon fontSize="large" />
              </RedIconButton>
              <Typography variant="body1" display="inline">
                Gmail
              </Typography>
            </MuiLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
