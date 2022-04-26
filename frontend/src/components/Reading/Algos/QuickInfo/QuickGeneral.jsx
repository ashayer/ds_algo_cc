/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";

import TextPopover from "../TextPopUps/TextPopover";

const QuickGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          Quick sort is an <TextPopover text="IN-PLACE" /> sorting algorithm. Similar to merge sort
          it uses <TextPopover text="DIVIDE-AND-CONQUER" /> as its guiding principle. Naturally, it
          also can be implemented using <TextPopover text="RECURSION" />. Instead of breaking down
          every element into a list of size 1 then merging together, Quick sort uses a pivot element
          the separate the array into two subsists, where one list contains elements smaller than
          the pivot and the other larger than the pivot. The smallest possible sub-list being a size
          of 2. The choice of a pivot value can change the performance of the algorithm.certain
          cases. All questions and implementations on this site use the leftmost element as the
          pivot, for the sake of simplicity. However, this choice can lead to the worst case
          performance. Typically, the best method for choosing the pivot is the (median of three),
          where you choose the median of the first, middle, and last elements.
        </Typography>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4 }}>
        <Box>Animation here from sandbox</Box>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4, textAlign: "center" }}>
        <ComplexityTable
          timeComplexityArray={["O(nlogn)", "O(nlogn)", "O(n\u00B2)"]}
          space="O(1)"
        />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of Quick
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. Just like merge
          sort, it has an best and average performance of O(nlogn). But it also can have a worst
          case performance of O(n&#178;). As mentioned previously, this can occur if the left most
          element is chosen as the pivot. If that is pivot then an input array of a sorted list,
          (ascending or descending) and an array with the exact same values, which give us the worst
          case. This because in all of these cases the pivot will create unbalanced sub-lists of
          wildly different sizes. With an already sorted list, the algorithm will create two
          sub-lists of size 0 and size n-1.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QuickGeneral;
