import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AboutUsScreen = () => {
  useScrollToTop();
  return (
    <Container>
      <Box my={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "green",
              fontWeight: "bold",
              paddingTop: "50px",
            }}
          >
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            HGSC² Digital Skills company is a registered company where a novice
            is trained into an expert with affordable skills.
          </Typography>

          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "green", fontWeight: "bold" }}
          >
            HGSC² is an acronym for:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Health Writers" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Ghostwriters" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Social Media Managers" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Copywriters" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Content Writers" />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            These are the skills we first certified as a company. Over time, we
            have launched more skills:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Public Speaking" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Graphic Designing" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Fashion Designing" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Video Editing" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn Full Course" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Professional Coaching" />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            We have successfully coached over 500 individuals into experts and
            certified them for paid classes. And over 2000 individuals in
            different trainings organized by the company. You can never regret
            training with us, we are famous in training the best.
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "green", fontWeight: "bold" }}
          >
            Mission Statement
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to empower individuals by providing affordable,
            high-quality digital skills training. We aim to help those with
            financial limitations gain access to high-paying career
            opportunities. Our commitment is to exceed expectations, delivering
            exceptional value and life-changing learning experiences.
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "green", fontWeight: "bold" }}
          >
            Vision Statement
          </Typography>
          <Typography variant="body1" paragraph>
            Our vision is to be the leading company of accessible digital skills
            training globally, creating a world where financial barriers no
            longer prevent individuals from achieving their full potential. We
            envision a future where everyone, regardless of their economic
            background, has the opportunity to build a prosperous career and
            lead a fulfilling life through digital skills.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUsScreen;
