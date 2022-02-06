import React from "react";
import Grid from "@mui/material/Grid";
import ModelCard from "./ModelCard";

const models = [
  {
    name: "Food Detection",
    description:
      "Recognize more than 1,000 food items in images down to the ingredient level.",
    image:
      "https://blog.qburst.com/wp-content/uploads/2019/08/Food-Image-Detector.jpg",
    link: "/models/images/food",
  },
];

function Models() {
  return (
    <Grid container spacing={2}>
      {models.map((model) => (
        <Grid key={model} item xs={12} md={6} lg={4}>
          <ModelCard {...model} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Models;
