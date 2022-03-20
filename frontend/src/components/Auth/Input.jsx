import React from "react";
import { TextField, Grid } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({ name, handleChange, label, type }) => (
  <Grid item xs={12} sm={12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      type={type}
    />
  </Grid>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
