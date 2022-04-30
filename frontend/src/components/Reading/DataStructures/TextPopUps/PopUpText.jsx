import React from "react";
import { Grid, Typography } from "@mui/material";

export const Abstract = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          An abstract data structure refers to the behavior of a data structure. It is more of a
          conceptual definition that a data structure created in the real-world. For example, an
          array can behave like many other data structures if you only have operations on that array
          respective to the data structure.
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
          using the respective remove method. The most recent element added will be the last to be
          removed.
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
          respective removed method. The most recent element added will be the first to be removed.
          While the first one added will be last.
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
          operations available are to view elements at certain pointers or to check if the data
          structure is empty.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Static = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Static just means that the structure has a limited amount of elements that can be stored.
          This allows for methods to check if the structure is empty/full.
        </Typography>
      </Grid>
    </Grid>
  );
};
