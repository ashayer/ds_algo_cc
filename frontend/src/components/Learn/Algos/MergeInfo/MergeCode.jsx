/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const mergeString = `void merge(vector<int>& arr, int left, int middle, int right) {
  int i = left;
  int j = middle + 1;
  vector<int> temp = arr;

  for(int k = left; k <= right; k++) {
      if(i > middle){
          a[k] = temp[j++];
      }
      else if(j > right){
          a[k] = temp[i++];
      }
      else if(temp[j] < temp[i]){
          a[k] = temp[j++];
      }
      else {
          a[k] = temp[i++];
      }
  }
}`;

const Merge = () => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {mergeString}
    </SyntaxHighlighter>
  );
};

const mergeSortString = `void mergeSort(vector<int>& arr, int left, int right) {
    if(left < right) {
      int middle = left + (right - left) / 2;
      mergeSort(arr, left, middle);
      mergeSort(arr, middle + 1, right);
      merge(arr, left, middle, right);
    }
  }`;

const MergeSort = () => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {mergeSortString}
    </SyntaxHighlighter>
  );
};

const MergeCode = () => {
  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Merge />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MergeSort />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is the code for the merge sort algorithm in C++. The algorithm can be implemented
            using two functions. The mergeSort function takes in on top of the array to be sorted, a
            left and right index.It will keep using <TextPopover text="RECURSION" /> to call itself
            until the right index is equal to the left index, which means the current array is of
            size 1 and can no longer be split. At each call, middle value is chosen that allows for
            the split. After all the arrays have been split in a size of 1, the merge function is
            called. In this implementation we use an auxillary vector that stores the current values
            of the passed in subarray (line 4), to be used later. Then we use a for loop that
            iterates from the left index to the right index of the subarray. There are four
            conditions we need to look out for. If i which is the first index of the left subarray
            is greater than the middle, it means that only the right subarray remains. So just add
            the values of the right subarray. If the j the first index of the right subarray is
            greater than the right index means only the left subarray remains. So just add the
            values of the left subarray. Otherwise we add the value at the i or j index which is
            smaller.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MergeCode;
