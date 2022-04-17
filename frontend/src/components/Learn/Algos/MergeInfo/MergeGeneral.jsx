/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";
import TextPopover from "../TextPopUps/TextPopover";

const MergeGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          Merge sort is an <TextPopover text="OUT-OF-PLACE" /> sorting algorithm that uses the
          principle of <TextPopover text="DIVIDE-AND-CONQUER" /> to sort the input. The typical
          Merge sort implementation will break down the original array using{" "}
          <TextPopover text="RECURSION" /> into smaller arrays of size 1. Then those smaller
          sublists will be merged together based on their values to produce a sorted array. Unlike
          insertion or selection sort, Merge sort is a <TextPopover text="LINEARITHMIC" />{" "}
          algorithm.
        </Typography>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4 }}>
        <Box>Animation here from sandbox</Box>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4, textAlign: "center" }}>
        <ComplexityTable timeComplexityArray={["O(nlogn)", "O(nlogn)", "O(nlogn)"]} space="O(n)" />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of Merge
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. In all cases Merge
          sort will be O(nlogn). Even for an already sorted array, Merge sort will require the same
          time as an unsorted array. This is because regardless of the values, the entire array but
          broken down into the size 1 sublists. The space complexity is O(n) for that same reason.
          For every element in the orginal array the algorithm will create a list containg just that
          element, so the algorithm will using at least n number of lists, where n is the length of
          the input.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MergeGeneral;
