import React from "react";
import Grid from "@mui/material/Grid";
import ModelCard from "./ModelCard";

const models = [
  {
    name: "Face Detection",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam dolor dolorum fugiat perferendis, id ipsa veritatis maiores doloribus iste.",
    image:
      "https://analyticsindiamag.com/wp-content/uploads/2020/04/Learn-Facial-Recognition-scaled.jpg",
    link: "/models/facedetection",
  },
];

function Models() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        {models.map((model) => (
          <ModelCard {...model} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Models;
