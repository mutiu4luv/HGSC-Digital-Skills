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
    title: "Best Coach Award",
    description: "Awarded for being outstanding  in the 2023 project.",
    image: "coach.png",
  },
  {
    title: "Best Student Award",
    description: "Recognized for exceptional innovation and creativity.",
    image: "student.jpg",
  },
  {
    title: "Best Student Award",
    description: "Honored for exemplary dedication and hard work.",
    image: "copy.jpg",
  },
  {
    title: "PRISCA CHIDERA NWAOKORO",
    description: "Awarded for achieving top performance metrics.",
    image: "prisca.jpg",
  },
  {
    title: "AKWUNECHE  IFEYINWA",
    description: "Awarded for achieving top performance metrics.",
    image: "ifeniwa.jpg",
  },
  {
    title: "ABIGAIL CHIDERAH",
    description: "Awarded for achieving top performance metrics.",
    image: "abigail.png",
  },
  // Add more items as needed
];

const CertificateAwardPage = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        marginTop: "40px",
        paddingBottom: "60px",
        height: "100%",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{ color: "green", textAlign: "center", paddingTop: "90px" }}
        >
          Certificates & Awards
        </Typography>

        <Grid container spacing={3} style={{ paddingTop: "90px" }}>
          {certificatesAndAwards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image={item.image}
                  style={{ height: "320px" }}
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
    </div>
  );
};

export default CertificateAwardPage;
