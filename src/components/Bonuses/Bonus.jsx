import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Bonuses = () => {
  const bonuses = [
    "A certificate",
    "Direct referrals",
    "Industrial trainings",
    "Best student awards",
    "Training on tools for job search",
    "Access to our community of experts in different skills",
  ];

  return (
    <Box
      mt={5}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      style={{ backgroundColor: "black", color: "whitesmoke" }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          style={{
            color: "green",
            textAlign: "center",
            paddingTop: "90px",
          }}
        >
          These are the free bonuses you stand to get when you register with us:
        </Typography>
        <List style={{ paddingTop: "60px" }}>
          {bonuses.map((bonus, index) => (
            <Box key={index} mb={2} width="100%">
              <Card>
                <CardContent>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={bonus} />
                  </ListItem>
                </CardContent>
              </Card>
            </Box>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Bonuses;
