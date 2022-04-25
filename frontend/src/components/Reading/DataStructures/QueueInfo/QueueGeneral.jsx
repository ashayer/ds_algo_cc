/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";
import TextPopover from "../TextPopUps/TextPopover";

const QueueGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <>
          <Typography variant="h6" gutterBottom>
            A queue is an <TextPopover text="ABSTRACT" /> data structure to store data in a{" "}
            <TextPopover text="FIRST-IN-FIRST-OUT" /> order, similar to waiting in line in real
            life. This means that the front of the queue will be the first item to be available to
            have access to using the <TextPopover text="METHODS" /> of the structure.
          </Typography>
          <Typography variant="h6">
            The operation of queue are typically to Enqueue - add an element to the end of the queue
            Dequeue - remove the element in the front IsEmpty - check if queue is empty
          </Typography>
        </>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4 }}>
        <Box>Diagram</Box>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4, textAlign: "center" }}>
        <ComplexityTable complexityArray={["O(n)", "O(n)", "O(1)"]} />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          The <TextPopover text="TIME" /> complexities for common operations are shown here. Since
          the only insert or delete operations affect the head or tale of the queue the
          insert/delete have a complexity of O(1). We can immediately insert or delete items.
          However, to access or change the last element in the array for example, we have to go
          through every element before it.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QueueGeneral;
