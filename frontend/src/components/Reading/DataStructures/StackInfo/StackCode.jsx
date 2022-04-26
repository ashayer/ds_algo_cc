/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const Stack = () => {
  const codeString = `void Stack(vector<int> arr) {
  for(int i = 0; i < arr.size(); i++) {
    int min = i;
    for(int j = i + 1; j < arr.size(); j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    swap(array[min], array[i]);
  }
}`;
  const codeString2 = `void Stack(vector<int> arr) {
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
    <>
      <SyntaxHighlighter
        language="cpp"
        style={lightfair}
        showLineNumbers
        customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
      >
        {codeString}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="cpp"
        style={lightfair}
        showLineNumbers
        customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
      >
        {codeString2}
      </SyntaxHighlighter>
    </>
  );
};

const StackCode = () => {
  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">This is the code for a basic stack implementation.</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StackCode;
