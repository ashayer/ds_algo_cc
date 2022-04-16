/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import { Grid, Typography, Popover } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";

const NestedForLoop = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          A nested for loop is a common pattern used in programming. The inner loop with the J
          iterator will iterate J times every time we increment I.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Line2 = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <SyntaxHighlighter language="cpp">
          {"for(int i = 1; i < arr.size(); i++) {"}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  );
};

const Line3 = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <SyntaxHighlighter language="cpp">{"for(int j = i; j > 0; j--) {"}</SyntaxHighlighter>
      </Grid>
    </Grid>
  );
};

const InsertionSortCPP = () => {
  const codeString = `void InsertionSort(vector<int> arr) {
  for(int i = 1; i < arr.size(); i++) {
    for(int j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr[j], arr[j-1]);
      }
      else break;
  }
}`;
  return (
    <SyntaxHighlighter language="cpp" showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
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
        {id === 0 ? <NestedForLoop /> : id === 1 ? <Line2 /> : id === 2 ? <Line3 /> : null}
      </Popover>
    </>
  );
};

const MergeCode = () => {
  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            border: "1px solid black",
            backgroundColor: "#F0F0F0",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <InsertionSortCPP />
        </Grid>
        <Grid item md={8} xs={12} sx={{ border: "1px solid black" }}>
          <Typography variant="h6">
            This is a code snippet of the insertion sort algorithm in C++. It utilizes a{" "}
            <TextPopover text="NESTED FOR LOOP" id={0} />. The outer loop{" "}
            <TextPopover text="(line 2)" id={1} /> dictates the place in the array we are currently
            starting at for the inner loop. At each iteration all values to left of the ith place
            will be currently sorted where everything to the right is untouched. Therefore we need
            to start at the 2nd element. That is why i=1 instead of i=0. The inner loop{" "}
            <TextPopover text="(line 3)" id={2} /> will function as a comparison pointer where it
            will compare the current jth element to the jth-1 element, or the one directly to its
            left. It will keep repeating this behavior until two conditions. J reaches the first
            element of the list OR it finds a value that is less than or equal to the current value.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MergeCode;
