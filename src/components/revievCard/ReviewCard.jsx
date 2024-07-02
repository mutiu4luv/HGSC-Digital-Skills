import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ReviewCard = ({ review }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="390"
        image={review.image}
        alt="review image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {review.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ height: "490px" }}
        >
          {review.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
