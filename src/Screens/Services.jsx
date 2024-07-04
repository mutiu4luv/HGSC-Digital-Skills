import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const services = [
  {
    title: "Health Writing",
    description:
      "Providing expert health writing services to help you communicate medical information effectively.",
    image: "health.jpeg",
  },
  {
    title: "Ghostwriting",
    description:
      "Professional ghostwriting services for books, articles, and more, tailored to your unique voice.",
    image: "ghost.png",
  },
  {
    title: "Social Media Management",
    description:
      "Effective social media management to grow your online presence and engage your audience.",
    image: "social.png",
  },
  {
    title: "Copywriting",
    description:
      "Creative and compelling copywriting services to help your brand stand out.",
    image: "copywrite.jpeg",
  },
  {
    title: "Content Writing",
    description:
      "High-quality content writing services for blogs, websites, and other platforms.",
    image: "content.png",
  },
  {
    title: "Public Speaking",
    description:
      "Coaching and training for effective public speaking and presentations.",
    image: "public.jpeg",
  },
  {
    title: "Graphic Designing",
    description:
      "Professional graphic design services to create visually appealing content.",
    image: "graphic.jpeg",
  },
  {
    title: "Fashion Designing",
    description:
      "Creative fashion designing services to bring your fashion ideas to life.",
    image: "fashion.jpeg",
  },
  {
    title: "Video Editing",
    description:
      "High-quality video editing services to make your videos stand out.",
    image: "video.png",
  },
  {
    title: "LinkedIn Full Course",
    description:
      "Comprehensive LinkedIn courses to help you build and grow your professional network.",
    image: "linkedin.jpeg",
  },
  {
    title: "Professional Coaching",
    description:
      "Expert coaching services to help you achieve your personal and professional goals.",
    image: "coaching.jpeg",
  },
];

const Services = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "green",
            fontWeight: "bold",
            paddingTop: "60px",
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} style={{ paddingTop: "50px" }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
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
      </Box>
    </Container>
  );
};

export default Services;
