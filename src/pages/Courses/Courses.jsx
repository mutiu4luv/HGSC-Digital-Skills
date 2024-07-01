import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "Home";

const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "black",
    color: "wheat",
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
  },
}));

const Home = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Courses We Offer{" "}
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a variety of affordable digital skills. Go from being a
          novice to an expert in one month.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Copywriting</Typography>
              <Typography variant="body2" color="textSecondary">
                Learn how to write persuasive text to promote products or
                services effectively.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Graphic Design</Typography>
              <Typography variant="body2" color="textSecondary">
                Become an expert in creating visual flyers, logos etc using
                software for marketing or branding.{" "}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Video Editing</Typography>
              <Typography variant="body2" color="textSecondary">
                Master how to cut and arrange video clips to create polished
                final videos.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Social Media Management</Typography>
              <Typography variant="body2" color="textSecondary">
                Learn how to Manage and grow social media profiles for
                businesses, personal accounts and companies.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6"> Ghostwriting</Typography>
              <Typography variant="body2" color="textSecondary">
                Learn how to write content for others like books, articles,
                blogs etc and get paid without receiving credit for it.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Health Writing</Typography>
              <Typography variant="body2" color="textSecondary">
                Health writers create informative newsletters, research
                articles, educational materials, case studies etc about health
                topics for various audiences.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">LinkedIn Full Course</Typography>
              <Typography variant="body2" color="textSecondary">
                Get comprehensive training to about linkedin.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Content Writing</Typography>
              <Typography variant="body2" color="textSecondary">
                Learn how to write and everything about writing for social media
                posts and others.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Fashion Design</Typography>
              <Typography variant="body2" color="textSecondary">
                Become a designer for clothes and accessories based on trends
                and creativity.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Public Speaking</Typography>
              <Typography variant="body2" color="textSecondary">
                Train to confidently speak and present in front of audiences.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Professional Coach Training</Typography>
              <Typography variant="body2" color="textSecondary">
                Do you want to learn how to teach and impact others? Register
                for this masterclass to become a certified professional coach.{" "}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Home;
