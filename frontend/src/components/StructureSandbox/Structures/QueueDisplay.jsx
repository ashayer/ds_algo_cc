import React from "react";
import { Grid, Slider, Typography, Button } from "@mui/material";

const QueueDisplay = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        mt: 1,
        p: 1,
      }}
    >
      <Grid item textAlign="center" sx={{}}>
        <Typography gutterBottom>Queue Size</Typography>
        <Slider
          value={0}
          onChange={(e, value) => {
            console.log(e, value);
          }}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={10}
          sx={{ width: "15vw" }}
        />
      </Grid>
      <Grid item sx={{}}>
        <Button variant="contained">
          <Typography>Enqueue</Typography>
        </Button>
        <Button variant="contained">
          <Typography>Dequeue</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default QueueDisplay;
