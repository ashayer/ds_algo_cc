/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const Queue = () => {
  const codeString = `class Queue {

  public:
   int items[SIZE];
   int front, rear;
   
  public:
   Queue() {
     front = -1;
     rear = -1;
   }

   bool isEmpty() {
     return (front < 0);
   }
  `;
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

const Queue2 = () => {
  const codeString2 = `void enQueue(int element) {
    if (isEmpty()) front = 0;
    items[rear++] = element;
 }

 int deQueue() {
   if (isEmpty()) return -1; 
   else {
    int element = items[front];
     if (front >= rear) {
       front = -1;
       rear = -1;
     }
     else front++;
    return element;
  }
};`;
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

const QueueCode = () => {
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
            <Queue />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Queue2 />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is the code to implement the queue data structure class. The{" "}
            <TextPopover text="METHODS" /> as previously mentioned are to enqueue and dequeue an
            element. Additionally we have another method to check if the queue is empty on line 11.
            On line 3 and line 4 we are creating the array, front and rear pointers to give the
            array the behavior of the queue. These two variables are the only indexes of the array
            that we have access to, to fulfill the behavior of the array.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QueueCode;
