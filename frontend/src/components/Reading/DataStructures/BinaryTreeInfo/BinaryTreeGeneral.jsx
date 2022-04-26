/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";

import TextPopover from "../TextPopUps/TextPopover";

const BinaryTreeGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <>
          <Typography variant="h6" gutterBottom>
            A stack is also an <TextPopover text="ABSTRACT" /> data structure to store data in a{" "}
            <TextPopover text="LAST-IN-FIRST-OUT" /> order. This means that that the front item of
            the stack is the most recent item added to the stack and the last item in the stack is
            the first one that was added. That means that the <TextPopover text="METHODS" /> of the
            structure, only affect the most recently added item.
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

export default BinaryTreeGeneral;
