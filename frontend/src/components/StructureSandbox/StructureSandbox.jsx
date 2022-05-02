import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const SortingSandbox = () => {
  // const handleAlgoChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <>
      <Navbar page="Data Structure Sandbox" />

      <Grid container>
        <Grid item>Data</Grid>
      </Grid>
    </>
  );
};

export default SortingSandbox;
