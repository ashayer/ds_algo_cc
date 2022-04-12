import React from "react";
import { Grid, Typography } from "@mui/material/";

const InsertionGeneral = () => {
  const text = `Insertion sort is an in-place sorting algorithm that builds
  the sorted array one element at a time. Similar to how one would sort a deck of cards by hand. 
  It sorts by iterating through the array and creating the sorted list behind it created a "sorted" and 
  "unsorted" sections of the original array. Compared to other quadratic sorting algorithms it is very efficient 
  for smaller data sets. In fact variations of the quick sort algorithms for example, use insertion sort for smaller arrays, 
  commonly around the size of ten instead of its typical recursive behavior. It is also very efficient on nearly sorted lists as well as well.
  

  `;

  return (
    <Grid container>
      <Typography variant="h5" sx={{ whiteSpace: "pre-line", border: "1px solid black" }}>
        {text}
      </Typography>
    </Grid>
  );
};

export default InsertionGeneral;
