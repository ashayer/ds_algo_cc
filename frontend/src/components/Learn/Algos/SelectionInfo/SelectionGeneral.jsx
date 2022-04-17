/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import {
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material/";

import TextPopover from "../TextPopUps/TextPopover";

const SelectionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          Selection sort is yet another <TextPopover text="IN-PLACE" /> sorting algorithm that
          builds the sorted array one element at a time. It also creates a sorted and unsorted
          section but the unsorted section has been searched through, unlike insertion sort. This is
          because at each iteration the algorithm finds the smallest value in entirety of the
          unsorted section and swaps that element with the element at the start of the unsorted
          section. The sorted section will always be built in the final order. Meaning that as soon
          as an element is swapped into its position at the current iteration it will stay there,
          throughout the rest of the algorithm. Selection sort although also a{" "}
          <TextPopover text="QUADRATIC" /> sorting algorithm it is much less efficient, compared to
          insertion sort.
        </Typography>
      </Grid>
      <Grid item md={2} sx={{ border: "1px solid black" }}>
        <Box>Animation here from sandbox</Box>
      </Grid>
      <Grid item md={4} sx={{ border: "1px solid black" }}>
        <Typography>Time Complexities</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Best</TableCell>
                <TableCell>Average</TableCell>
                <TableCell>Worst</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>n&#178;</TableCell>
                <TableCell>n&#178;</TableCell>
                <TableCell>n&#178;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography>Space Complexity</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>O(1)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          The time and space complexities of selection sort can be seen in the table. In all cases
          selection sort will have a time complexity of O(n&#178;). It will always search through
          the entire unsorted section to find the smallest value. Selection sort is also UNSTABLE,
          given that the swaps are based on the minium value.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SelectionGeneral;
