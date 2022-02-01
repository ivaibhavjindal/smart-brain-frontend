import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

function Model() {
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleChange = (e) => setImageUrl(e.target.value);

  const handleSubmit = (e) => {
    setShowImage(true);
    // clarifai.models
    //   .predict(Clarifai.FACE_DETECTION, imageUrl)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    console.log(imageUrl);
  };
  return (
    <Grid
      container
      spacing={2}
      style={{ padding: "1rem", justifyContent: "center", marginTop: "4rem" }}
    >
      <Grid item xs={12} md={4}>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Image Url</InputLabel>
          <Input
            id="component-simple"
            value={imageUrl}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={8} md={4} style={{ margin: "auto 0" }}>
        <Button onClick={handleSubmit} variant="contained">
          Detect
        </Button>
      </Grid>
      {showImage && (
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <img src={imageUrl} width="450px" />
        </Grid>
      )}
    </Grid>
  );
}

export default Model;
