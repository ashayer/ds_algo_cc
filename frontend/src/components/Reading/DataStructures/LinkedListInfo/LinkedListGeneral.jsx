/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";
import TextPopover from "../TextPopUps/TextPopover";

const MergeGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <>
          <Typography variant="h6" gutterBottom>
            A Linked List is a data structure that stores its data using nodes which contain the
            element value and a pointer/reference to the next node. Together each node represent the
            list in a sequence where each node is linked to the next.
          </Typography>
          <Typography variant="h6">
            The operations available to a stack are to Push - add an item onto the stack Pop -
            remove the topmost item of the stack.
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
          The <TextPopover text="TIME" /> complexities for common operations are shown here. A stack
          is simply the reverse behavior of a queue. Therefore the time complexities are the same
          for all operations. To access the bottommost element we have to pop off all the ones on
          top and store them temporarily in another stack.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MergeGeneral;
