import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const ReviewCard = ({ review }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="390"
        image={review.image}
        alt="review image"
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "black", fontSize: "22px", fontWeight: "800" }}
        >
          {review.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.seconwhitedary"
          sx={{ flexGrow: 1 }}
          style={{ maxHeight: "200px", overflow: "auto" }} // Add scroll for long text
        >
          {review.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
