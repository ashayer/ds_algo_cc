import React from "react";
import { Grid, Typography } from "@mui/material";

export const Abstract = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          An abstract data structure refers to the model of the behavior of the structure. This does
          not necessarily mean a queue will always be created in the same way. For example, an array
          can behave like a queue if you only have operations that affect the head and tail of the
          array and add elements to the back of the array only.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Time = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          The time complexity of a data structure refers the time it takes to complete an operation
          using that structure. Typically these operations are to search, access, and insert/delete
          an element.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const FIFO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          First-in-First-Out commonly shortened to FIFO, refers to the behavior of the order of the
          elements. The first element is the FIRST element to be removed from the data structure
          using the respective delete method.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const LIFO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Last-in-First-Out commonly shortened to LIFO, refers to the behavior of the order of the
          elements. The first element is the LAST to be removed from the data structure using the
          respective delete method.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Methods = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          The methods of a data structure are the operations available to use to alter/view the data
          structure. Typically these operations are simply to delete or add an item. Other
          operations available are to view the element at the front of the structure.
        </Typography>
      </Grid>
    </Grid>
  );
};
