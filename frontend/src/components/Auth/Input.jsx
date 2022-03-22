import React from "react";
import { TextField, Grid } from "@mui/material";

const Input = ({ name, handleChange, label, type }) => (
  <Grid item xs={12} sm={12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      label={label}
      type={type}
      fullWidth
    />
  </Grid>
);

export default Input;
