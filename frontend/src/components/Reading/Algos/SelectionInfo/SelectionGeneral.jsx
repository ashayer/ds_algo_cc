/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";
import TextPopover from "../TextPopUps/TextPopover";

const SelectionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          Selection sort is yet another <TextPopover text="IN-PLACE" /> sorting algorithm that
          builds the sorted array one element at a time. It also creates a sorted and unsorted
          section but the unsorted section has been searched through, unlike insertion sort. This is
          because at each iteration the algorithm finds the smallest value in entirety of the
          unsorted section and swaps that element with the element at the start of the unsorted
          section. The sorted section will always be built in the final order. Meaning that as soon
          as an element is swapped into its position it will stay there, for the rest of the
          algorithm. Selection sort although also is a <TextPopover text="QUADRATIC" /> sorting
          algorithm but it is much less efficient compared to Insertion sort.
        </Typography>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4 }}>
        <Box>Animation here from sandbox</Box>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4, textAlign: "center" }}>
        <ComplexityTable
          timeComplexityArray={["O(n\u00B2)", "O(n\u00B2)", "O(n\u00B2)"]}
          space="O(1)"
        />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of selection
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. In all cases
          selection sort will have a time complexity of O(n&#178;). This is because it will always
          have tos search through the entire unsorted section to find the smallest value. Selection
          sort is also <TextPopover text="UNSTABLE" />, given that the swaps are based on the
          minimum value found. Selection sort also has a space complexity of O(1) since it is
          in-place.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SelectionGeneral;
