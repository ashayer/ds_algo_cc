import React from "react";
import { Grid, Typography } from "@mui/material/";

const InsertionGeneral = () => {
  const text = `Insertion sort is an in-place sorting algorithm that builds
  the sorted array one element at atime.Compared to other quadratic 
  sorting algorithms it is efficient for smaller data sets. It sorts by iterating 
  through the array and creating the sorted list behind it. In fact more 
  efficient quick sort algorithms use insertion sort for smaller arrays, 
  commonly around size ten.`;

  return (
    <Grid container>
      <Typography variant="h5" sx={{ whiteSpace: "pre-line", border: "1px solid black" }}>
        {text}
      </Typography>
    </Grid>
  );
};

export default InsertionGeneral;
