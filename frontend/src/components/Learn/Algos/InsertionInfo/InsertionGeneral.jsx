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

const InPlace = ({ handleClose }) => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography onMouseLeave={handleClose}>
          In-place means that the algorithm can sort the input without using auxiliary data
          strucutres and instead directly changes the input list. Typically an in-place sorting
          algorithm will always have a space complexitiy of O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};
const Quadratic = ({ handleClose }) => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography onMouseLeave={handleClose}>
          Quadractic simply means that the time it take to sort is the square of the size of the
          list. Since it has the time complexity of n&#178; it is deemed quadratic.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Stable = ({ handleClose }) => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography onMouseLeave={handleClose}>
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
          <InPlace handleClose={handleClose} />
        ) : id === 1 ? (
          <Quadratic />
        ) : id === 2 ? (
          <Stable />
        ) : null}
      </Popover>
    </>
  );
};

const InsertionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          Insertion sort is an <TextPopover text="IN-PLACE" id={0} /> sorting algorithm that builds
          the sorted array one element at a time. Similar to how one would sort a deck of cards by
          hand. It separates the original array into a sorted and unsorted section, the head of this
          sorted section will always be the largest value compared so far. Similar to other{" "}
          <TextPopover text="QUADRATIC" id={1} /> sorting algorithms it is very efficient for
          smaller data sets, however it is generally the most efficient. In fact variations of the
          quick sort algorithm use insertion sort for smaller arrays, commonly around the size of 10
          instead of its typical recursive behavior. It is also very efficient on nearly sorted
          lists as well.
        </Typography>
      </Grid>
      <Grid item md={2} sx={{ border: "1px solid black" }}>
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif"
          alt="Insertion sort animation from Wikipedia"
          title="Insertion sort animation from Wikipedia"
        />
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
          property of being a <TextPopover text="STABLE" id={2} /> algorithm. If it compares and
          finds the values are the same it simply moves to the next element in the list. Because it
          is an in-place algorithm, that gives insertion sort a space complexity of 1.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InsertionGeneral;
