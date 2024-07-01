// src/components/AboutUs.js
import React from "react";
import { Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "AboutUs";

const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
  avatar: `${PREFIX}-avatar`,
  teamMember: `${PREFIX}-teamMember`,
  heading: `${PREFIX}-heading`,
  paragraph: `${PREFIX}-paragraph`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(3),
    textAlign: "center", // Center the text
    backgroundColor: "whitesmoke",
  },

  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
  },
  [`& .${classes.avatar}`]: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "auto",
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.teamMember}`]: {
    textAlign: "center",
  },
}));

const AboutUs = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={classes.heading}
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "red",
            paddingTop: "60px",
          }}
        >
          ABOUT US
        </Typography>
        <Typography variant="body1" paragraph className={classes.paragraph}>
          We are a dedicated team of professionals committed to delivering
          top-notch solutions for our clients. Our mission is to provide
          exceptional service and innovative products that help our clients
          achieve their goals.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontSize: "2rem", fontWeight: "bold", paddingTop: "50px" }}
        >
          Our Team
        </Typography>
        <Grid container spacing={3} sx={{ paddingTop: "50px" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Avatar
                alt="Benedicta Chinenye Nwokedi"
                src="/ceo.jpg"
                className={classes.avatar}
              />
              <Typography
                variant="h6"
                component="h3"
                className={classes.teamMember}
              >
                Benedicta Chinenye Nwokedi
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.teamMember}
              >
                CEO
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Avatar
                alt="John Doe"
                src="/path-to-image.jpg"
                className={classes.avatar}
              />
              <Typography
                variant="h6"
                component="h3"
                className={classes.teamMember}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.teamMember}
              >
                CEO
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Avatar
                alt="John Doe"
                src="/path-to-image.jpg"
                className={classes.avatar}
              />
              <Typography
                variant="h6"
                component="h3"
                className={classes.teamMember}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.teamMember}
              >
                CEO
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Avatar
                alt="John Doe"
                src="/path-to-image.jpg"
                className={classes.avatar}
              />
              <Typography
                variant="h6"
                component="h3"
                className={classes.teamMember}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.teamMember}
              >
                CEO
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Avatar
                alt="John Doe"
                src="/path-to-image.jpg"
                className={classes.avatar}
              />
              <Typography
                variant="h6"
                component="h3"
                className={classes.teamMember}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.teamMember}
              >
                CEO
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Avatar
                alt="John Doe"
                src="/path-to-image.jpg"
                className={classes.avatar}
              />
              <Typography
                variant="h6"
                component="h3"
                className={classes.teamMember}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.teamMember}
              >
                CEO
              </Typography>
            </Paper>
          </Grid>
          {/* Repeat Grid item for other team members */}
        </Grid>
      </Container>
    </Root>
  );
};

export default AboutUs;
