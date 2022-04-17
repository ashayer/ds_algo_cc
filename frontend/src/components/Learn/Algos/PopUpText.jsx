import React from "react";
import { Grid, Typography } from "@mui/material";

export const InPlace = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          In-place means that the algorithm can sort the input without using auxiliary data
          structures and instead directly changes the input list. Typically an in-place sorting
          algorithm will always have a space complexity of O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};
export const Quadratic = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Quadratic simply means that the time it take to sort is the square of the size of the
          list. Since it has the time complexity of n&#178; it is deemed quadratic.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Stable = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Stability refers to how the algorithm handles two elements of equal value. A stable
          algorithm will keep the the elements of the same value in the same original order.
          Consider the example below.
        </Typography>
        <Typography>Imagine we are sorting the tuples below by the letter only.</Typography>
        <Typography>(A, 1), (C, 2), (B, 1),(C, 1)</Typography>
        <Typography>
          A stable algorithm will always give us (A, 1), (B, 1), (C, 2),(C, 1) since we care only
          about the letter. An unstable algorithm may switch the position of (C,2) (C, 1).
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Time = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Time complexity simply refers to the time it takes for an algorithm to run. For sorting
          algorithms the input can change in size, therefore the time complexity of an algorithm is
          usually described by its WORST performing time given a size. It is typically described in
          Big O notation.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Space = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Space complexity refers to the amount of memory required to run a certain algorithm. For
          in-place algorithms this is typically O(1), meaning it export constant regardless of the
          input.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const BigO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Big O notation is a mathematical notation that refers to the behavior of an algorithm
          under an asymptotic condition. In the case of sorting algorithm it refers to the behavior
          of the algorithm if the input was infinity large. Since we only care about the worst cases
          of algorithms we use Big O notation.
        </Typography>
      </Grid>
    </Grid>
  );
};
