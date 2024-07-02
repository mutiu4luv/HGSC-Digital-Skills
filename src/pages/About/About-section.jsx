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
  lastTwo: `${PREFIX}-lastTwo`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "whitesmoke",
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
  },
  [`& .${classes.avatar}`]: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: "50%",
    objectFit: "cover",
    margin: "auto",
    display: "block",
  },
  [`& .${classes.teamMember}`]: {
    textAlign: "center",
  },
  [`& .${classes.lastTwo}`]: {
    marginTop: theme.spacing(5),
  },
}));

const teamMembers = [
  {
    name: "Benedicta Chinenye Nwokedi",
    title: "CEO",
    img: "/ceo.jpg",
  },
  {
    name: "Igwe, Victoria Chinecherem.",
    title: "DIGITAL COMPANY MANAGER",
    img: "/digital.jpg",
  },
  {
    name: "NDIUKWU EZINNE CHIOMA",
    title: "SENIOR ACCOUNT OFFICER",
    img: "/account.jpg",
  },
  {
    name: "Chimerenma Cynthia Egboghu",
    title: "SOCIAL MEDIA MANAGER",
    img: "/social.jpg",
  },
  {
    name: "Okeke Obiajulu Divine",
    title: "GRAPHIC DESIGNER",
    img: "/graphics.jpg",
  },
  {
    name: "CHIKA IBE",
    title: "BRAND AMBASSADOR",
    img: "/brand.jpg",
  },
  {
    name: "PECULIAR OGEDE",
    title: "COMMUNITY MANAGER",
    img: "/ogede.jpg",
  },
  {
    name: "DANIEL JOSEPH",
    title: "ASSISTANT COMMUNITY MANAGER",
    img: "/assistant.jpg",
  },
];

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
          HGSC² Digital Skills company is a registered company where a novice is
          trained into an expert with affordable skills.
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
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={index >= teamMembers.length - 2 ? classes.lastTwo : ""}
              key={member.name}
            >
              <Paper className={classes.paper}>
                <Avatar
                  alt={member.name}
                  src={member.img}
                  className={classes.avatar}
                  style={{ verticalAlign: "middle" }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  className={classes.teamMember}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.teamMember}
                >
                  {member.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default AboutUs;
