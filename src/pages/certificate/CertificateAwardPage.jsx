import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// Sample data for certificates and awards
const certificatesAndAwards = [
  {
    title: "Certificate of Excellence",
    description: "Awarded for outstanding performance in the 2023 project.",
    image: "certificate_excellence.jpg",
  },
  {
    title: "Best Innovator Award",
    description: "Recognized for exceptional innovation and creativity.",
    image: "best_innovator.jpg",
  },
  {
    title: "Employee of the Year",
    description: "Honored for exemplary dedication and hard work.",
    image: "employee_of_the_year.jpg",
  },
  {
    title: "Top Performer Award",
    description: "Awarded for achieving top performance metrics.",
    image: "top_performer.jpg",
  },
  // Add more items as needed
];

const CertificateAwardPage = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ color: "blue", textAlign: "center", paddingTop: "70px" }}
      >
        Certificates & Awards
      </Typography>

      <Grid container spacing={3}>
        {certificatesAndAwards.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={item.title}
                height="140"
                image={item.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CertificateAwardPage;