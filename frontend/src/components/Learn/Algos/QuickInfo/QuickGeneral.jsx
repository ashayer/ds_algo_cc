/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTable";

import TextPopover from "../TextPopUps/TextPopover";

const QuickGeneral = () => {
  return (
    <Grid container>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          Quick sort is an <TextPopover text="IN-PLACE" />.
        </Typography>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4 }}>
        <Box>Animation here from sandbox</Box>
      </Grid>
      <Grid item md={4} xs={6} sx={{ border: "1px solid black", p: 4, textAlign: "center" }}>
        <ComplexityTable timeComplexityArray={["O(n)", "O(n\u00B2)", "O(n\u00B2)"]} space="O(1)" />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black", p: 4 }}>
        <Typography variant="h6">
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of quick
          sort.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QuickGeneral;
