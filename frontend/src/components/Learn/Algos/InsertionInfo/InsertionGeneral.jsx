/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";
import TextPopover from "../TextPopUps/TextPopover";

const InsertionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          Insertion sort is an <TextPopover text="IN-PLACE" /> sorting algorithm that builds the
          sorted array one element at a time. Similar to how one would sort a deck of cards by hand.
          It separates the original array into a sorted and unsorted section, the head of this
          sorted section will always be the largest value compared so far. Because of this each
          iteration does not always put the current element in the correct position. The position of
          any value can change as it seeks through the unsorted section. Similar to other{" "}
          <TextPopover text="QUADRATIC" /> sorting algorithms it is very efficient for smaller data
          sets, however it is generally the most efficient. In fact variations of the quick sort
          algorithm use insertion sort for smaller arrays, commonly around the size of 10 instead of
          its typical recursive behavior. It is also very efficient on nearly sorted lists as well.
        </Typography>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4 }}>
        <Box>Animation here from sandbox</Box>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4, textAlign: "center" }}>
        <ComplexityTable timeComplexityArray={["O(n)", "O(n\u00B2)", "O(n\u00B2)"]} space="O(1)" />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of insertion
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. As you can see it
          has the best case of O(n), which is only possible if the array is already sorted. This is
          also the reason why it is more efficient on already sorted arrays. It only has to do a
          comparison on one element at a time. Compared to an algorithm like selection sort where
          each element is compared with every other element. This also gives insertion sort the
          property of being a <TextPopover text="STABLE" /> algorithm. If it compares and finds the
          values are the same it simply moves to the next element in the list. Because it is an
          <TextPopover text="IN-PLACE" /> algorithm, that gives insertion sort a space complexity of
          O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InsertionGeneral;
