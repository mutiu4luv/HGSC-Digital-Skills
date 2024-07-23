import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%", // Make paper fill the height of the parent grid item
  },
  [`& .MuiGrid-item`]: {
    display: "flex",
    flexDirection: "column",
  },
}));
const services = [
  {
    title: "Health Writing",
    description:
      "Providing expert health writing services to help you communicate medical information effectively.",
    image: "health.jpg",
  },
  {
    title: "Ghostwriting",
    description:
      "Professional ghostwriting services for books, articles, and more, tailored to your unique voice.",
    image: "ghostwrite.jpg",
  },
  {
    title: "Social Media Management",
    description:
      "Effective social media management to grow your online presence and engage your audience.",
    image: "social.jpg",
  },
  {
    title: "Copywriting",
    description:
      "Creative and compelling copywriting services to help your brand stand out.",
    image: "copywrite.jpg",
  },
  {
    title: "Content Writing",
    description:
      "High-quality content writing services for blogs, websites, and other platforms.",
    image: "content.jpg",
  },
  {
    title: "Public Speaking",
    description:
      "Coaching and training for effective public speaking and presentations.",
    image: "public.jpg",
  },
  {
    title: "Graphic Designing",
    description:
      "Professional graphic design services to create visually appealing content.",
    image: "graphic.jpg",
  },
  {
    title: "Fashion Designing",
    description:
      "Creative fashion designing services to bring your fashion ideas to life.",
    image: "fashion.jpg",
  },
  {
    title: "Video Editing",
    description:
      "High-quality video editing services to make your videos stand out.",
    image: "video.jpg",
  },
  {
    title: "LinkedIn Full Course",
    description:
      "Comprehensive LinkedIn courses to help you build and grow your professional network.",
    image: "linkedIn.png",
  },
  {
    title: "Professional Coaching",
    description:
      "Expert coaching services to help you achieve your personal and professional goals.",
    image: "coaching.jpg",
  },
  {
    title: "Facebook Visibility",
    description:
      "Facebook visibility course teaches you on how to setup your profile, make your posts visible and how to navigate the app.",
    image: "facebook.png",
  },
];

const courses = [
  {
    title: "Copywriting",
    description:
      "Learn how to write persuasive text to promote products or services effectively.",
  },
  {
    title: "Graphic Design",
    description:
      "Become an expert in creating visual flyers, logos etc using software for marketing or branding.",
  },
  {
    title: "Video Editing",
    description:
      "Master how to cut and arrange video clips to create polished final videos.",
  },
  {
    title: "Social Media Management",
    description:
      "Learn how to manage and grow social media profiles for businesses, personal accounts, and companies.",
  },
  {
    title: "Ghostwriting",
    description:
      "Learn how to write content for others like books, articles, blogs, etc., and get paid without receiving credit for it.",
  },
  {
    title: "Health Writing",
    description:
      "Health writers create informative newsletters, research articles, educational materials, case studies, etc., about health topics for various audiences.",
  },
  {
    title: "LinkedIn Full Course",
    description: "Get comprehensive training about LinkedIn.",
  },
  {
    title: "Content Writing",
    description:
      "Learn how to write and everything about writing for social media posts and others.",
  },
  {
    title: "Fashion Design",
    description:
      "Become a designer for clothes and accessories based on trends and creativity.",
  },
  {
    title: "Public Speaking",
    description:
      "Train to confidently speak and present in front of audiences.",
  },
  {
    title: "Professional Coach Training",
    description:
      "Do you want to learn how to teach and impact others? Register for this masterclass to become a certified professional coach.",
  },
  {
    title: "Facebook Visibility",
    description:
      "Facebook visibility course teaches you on how to setup your profile, make your posts visible and how to navigate the app.",
  },
];

const Home = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ paddingTop: "50px" }}
        >
          Courses We Offer
        </Typography>
        <Typography variant="body1" paragraph style={{ paddingTop: "30px" }}>
          We offer a variety of affordable digital skills. Go from being a
          novice to an expert in one month.
        </Typography>
        {/* <Grid container spacing={3} style={{ paddingTop: "50px" }}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className={classes.paper}>
                <Typography variant="h6" style={{ color: "green" }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={4} style={{ paddingTop: "50px" }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                  // style={{ paddingTop: "10px" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      color: "green ",
                      fontSize: "25px",
                      fontWeight: "800",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default Home;
