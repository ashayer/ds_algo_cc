import React from "react";
import { Grid, Typography } from "@mui/material";

//! replace sx with something mui styles thing
export const Abstract = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>Abstract</Typography>
      </Grid>
    </Grid>
  );
};

export const Time = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>Time</Typography>
      </Grid>
    </Grid>
  );
};

export const FIFO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>FIFO</Typography>
      </Grid>
    </Grid>
  );
};

export const Methods = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>Methods</Typography>
      </Grid>
    </Grid>
  );
};
