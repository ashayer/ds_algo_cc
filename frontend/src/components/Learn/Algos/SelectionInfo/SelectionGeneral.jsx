/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import {
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Popover,
  Box,
} from "@mui/material/";

const InPlace = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          In-place means that the algorithm can sort the input without using auxiliary data
          strucutres and instead directly changes the input list. Typically an in-place sorting
          algorithm will always have a space complexitiy of O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};
const Quadratic = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Quadractic simply means that the time it take to sort is the square of the size of the
          list. Since it has the time complexity of n&#178; it is deemed quadratic.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Stable = () => {
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

const Time = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>Time complexity refers to</Typography>
      </Grid>
    </Grid>
  );
};

const Space = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>Space complexity refers to</Typography>
      </Grid>
    </Grid>
  );
};

const BigO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>Space complexity refers to</Typography>
      </Grid>
    </Grid>
  );
};

const TextPopover = ({ text, id }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <span
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        style={{ color: "red", cursor: "pointer" }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        role="button"
        aria-hidden="true"
      >
        {text}
      </span>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableRestoreFocus
      >
        {id === 0 ? (
          <InPlace />
        ) : id === 1 ? (
          <Quadratic />
        ) : id === 2 ? (
          <Stable />
        ) : id === 3 ? (
          <Time />
        ) : id === 4 ? (
          <Space />
        ) : id === 5 ? (
          <BigO />
        ) : null}
      </Popover>
    </>
  );
};

const SelectionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          Selection sort is yet another <TextPopover text="IN-PLACE" id={0} /> sorting algorithm
          that builds the sorted array one element at a time. It also creates a sorted and unsorted
          section but the unsorted section has been touched and searched through. This is because at
          each iteration the algorithm finds the smallest value in entirety of the unsorted section
          and swaps that value with the value at the end of the sorted section. Unlike insertion
          sort the sorted section will always be built in the final order. Meaning that as soon as
          an element is swapped into its correct position at the current iteration it will stay
          there. Selection sort although also a <TextPopover text="QUADRATIC" id={1} /> sorting
          algorithm it is much less efficient.
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
          selection sort will have a time complexity of O(n&#178;).
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SelectionGeneral;
