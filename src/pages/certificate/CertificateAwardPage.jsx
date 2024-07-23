import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

// Sample data for certificates and awards
const certificatesAndAwards = [
  {
    title: "Best Coach Award",
    description:
      "Awarded for helping the company achieve its goals in the 4th Batch.",
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
    title: "PROFESSIONAL COACHING TRAINING",
    description: "We train aspiring coaches to become professional coaches.",
    image: "prisca.jpg",
  },
  {
    title: "OFFICIAL CERTIFICATE FOR ALL SKILLS",
    description:
      "Our students go through rigorous trainings before receiving this testament.",
    image: "ifeniwa.jpg",
  },
  {
    title: "INDUSTRIAL TRAINING CERTIFICATE",
    description: "We offer I.T programs in the company.",
    image: "abigail.png",
  },
  // Add more items as needed
];

const CertificateAwardPage = () => {
  return (
    <div
      style={{
        // backgroundColor: "black",
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
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ textAlign: "center" }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          className="hero-button"
          component="a"
          href="https://wa.me/message/UBJLJZJGN4ESE1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "25px",
            backgroundColor: "green",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          GET STARTED{" "}
        </Button>
      </Container>
    </div>
  );
};

export default CertificateAwardPage;
