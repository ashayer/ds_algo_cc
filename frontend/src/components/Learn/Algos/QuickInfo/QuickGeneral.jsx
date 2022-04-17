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

import TextPopover from "../TextPopover";

const QuickGeneral = () => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">I</Typography>
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
                <TableCell>n</TableCell>
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
                <TableCell>n</TableCell>
                <TableCell>n&#178;</TableCell>
                <TableCell>n&#178;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          The time and space complexities of insertion sort can be seen in the table. As you can see
          it has the best case of O(n), which is only possible if the array is already sorted. This
          is also the reason why it is more efficient on already sorted arrays. It only has to do a
          comparison on one element at a time. Compared to an algorithm like selection sort where
          each element is compared with every other element. This also gives insertion sort the
          property of being a <TextPopover text="STABLE" /> algorithm. If it compares and
          finds the values are the same it simply moves to the next element in the list. Because it
          is an in-place algorithm, that gives insertion sort a space complexity of 1.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QuickGeneral;
