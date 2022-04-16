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
  const codeString = `void SelectionSort(vector<int> arr) {
  for(int i = 0; i < arr.size(); i++) {
    int min = i;
    for(int j = i + 1; j < arr.size(); j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    swap(array[min], array[i]);
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

const SelectionCode = () => {
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
            This is the code for selection sort in C++. It also be written using a{" "}
            <TextPopover text="NESTED FOR LOOP" id={0} />. On <TextPopover text="LINE 3" id={0} />
            the minimum value is set as I, the outer most index. The min will always start as the
            first element in the unsorted section. The inner loop will increment through the rest of
            the array to find the element with the smallest value, if the value is found then the
            index of the minium value is set as J LINE 6. Then the index of the minimum value and i,
            will be swapped. It will repeat this loop until I reaches the end of the array.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectionCode;
