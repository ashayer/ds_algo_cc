/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const Stack = () => {
  const codeString = `class Stack {
  public:
    int items[SIZE], top;
    Stack() { 
      top = -1; 
    }

    bool isEmpty() {
      return (top < 0);
    }
};`;
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

const Stack2 = () => {
  const codeString2 = `void push(int x) {
    if(top < SIZE) {
      items[++top] = x;
    } 
  }
  
  int pop() {
      if(isEmpty()) {
        return -1
      }
      else {
        int x = items[top--];
        return x;
      }
  }
`;
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      startingLineNumber={18}
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {codeString2}
    </SyntaxHighlighter>
  );
};

const StackCode = () => {
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
            <Stack />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack2 />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is the code to implement the Stack data structure class. The{" "}
            <TextPopover text="METHODS" /> as previously mentioned are to push and pop an element.
            Additionally we have another method to check if the Stack is empty on line [][][][]. On
            line 3 and line 4 we are creating the array, and only the top pointer to give the array
            the behavior of the Stack, since we only alter the topmost element.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StackCode;
