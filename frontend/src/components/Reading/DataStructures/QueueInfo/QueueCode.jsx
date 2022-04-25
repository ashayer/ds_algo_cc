/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const Queue = () => {
  const codeString = `class Queue {

  public:
   int items[SIZE], front, rear;
   
  public:
   Queue() {
     front = -1;
     rear = -1;
   }

   bool isEmpty() {
     if (front == -1)
       return true;
     else
       return false;
   }
 `;

  const codeString2 = `void enQueue(int element) {
    if (front == -1) front = 0;
    rear++;
    items[rear] = element;
 }

 int deQueue() {
   int element;
   if (isEmpty()) { return -1; } 
   else {
     element = items[front];
     if (front >= rear) {
       front = -1;
       rear = -1;
     }
     else front++;
     return element;
   }
};`;
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

const QueueCode = () => {
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
            <Queue />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is a code to implement the queue data structure. The <TextPopover text="METHODS" />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QueueCode;
