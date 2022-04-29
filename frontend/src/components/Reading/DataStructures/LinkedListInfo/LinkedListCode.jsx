/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const mergeString = `// Singly-Linked-List
class NodeSL {
  public:
    int value;
    NodeSL* next;
};

//Doubly-Linked-List
class NodeDL {
  int value;
  NodeDL* next;
  NodeDL* prev;
}



`;

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

const mergeSortString = `Node* head;
Node* one = NULL;
Node* two = NULL;
Node* three = NULL;

// allocate 3 nodes in the heap
one = new Node();
two = new Node();
three = new Node();

// Assign value values
one->value = 1;
two->value = 2;
three->value = 3;

// Connect nodes
one->next = two;
two->next = three;
three->next = NULL;`;

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
            This is some code snippets of linked lists. Here we have the{" "}
            <TextPopover text="CLASS" />{" "}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MergeCode;
