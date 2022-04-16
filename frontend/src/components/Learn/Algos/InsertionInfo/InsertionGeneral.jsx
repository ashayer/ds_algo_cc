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
        <Typography>
          Time complexity simply refers to the time it takes for an algorithm to run. For sorting
          algorithms the input can change in size, therefore the time complexity of an algorithm is
          usually descirbed by its WORST performing time given a size. It is typically descirbed in
          Big O notation.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Space = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Space complexity refers to the amount of memory required to run a certain algorithm. For
          in-place algorithms this is typically O(1), meaning it is constant regardless of the
          input.
        </Typography>
      </Grid>
    </Grid>
  );
};

const BigO = () => {
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

const InsertionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          Insertion sort is an <TextPopover text="IN-PLACE" id={0} /> sorting algorithm that builds
          the sorted array one element at a time. Similar to how one would sort a deck of cards by
          hand. It separates the original array into a sorted and unsorted section, the head of this
          sorted section will always be the largest value compared so far. Because of this each
          iteration does not always put the current element in the correct position. The position of
          any value can change as it seeks through the unsorted section. Similar to other{" "}
          <TextPopover text="QUADRATIC" id={1} /> sorting algorithms it is very efficient for
          smaller data sets, however it is generally the most efficient. In fact variations of the
          quick sort algorithm use insertion sort for smaller arrays, commonly around the size of 10
          instead of its typical recursive behavior. It is also very efficient on nearly sorted
          lists as well.
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
          The <TextPopover text="TIME" id={3} /> and <TextPopover text="SPACE" id={4} />{" "}
          complexities of insertion sort in <TextPopover text="BIG O" id={5} /> notation can be seen
          in the table. As you can see it has the best case of O(n), which is only possible if the
          array is already sorted. This is also the reason why it is more efficient on already
          sorted arrays. It only has to do a comparison on one element at a time. Compared to an
          algorithm like selection sort where each element is compared with every other element.
          This also gives insertion sort the property of being a{" "}
          <TextPopover text="STABLE" id={2} /> algorithm. If it compares and finds the values are
          the same it simply moves to the next element in the list. Because it is an in-place
          algorithm, that gives insertion sort a space complexity of O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InsertionGeneral;
