import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const InsertionStepLabels = ({ varLabelArray, idx }) => {
  const test = varLabelArray.filter((o) => o.index === idx);
  return test.map((object, index) => (
    <Typography variant="h6" sx={{ width: "6vw" }} key={index}>
      {object.label}
    </Typography>
  ));
};

const SelectionStepLabels = ({ varLabelArray, idx }) => {
  const test = varLabelArray.filter((o) => o.index === idx);
  return test.map((object, index) => (
    <Typography variant="h6" sx={{ width: "6vw" }} key={index}>
      {object.label}
    </Typography>
  ));
};

const ArrayBars = ({ algorithm, sortHistoryArray, step, varLabelArray, arrayMax }) => {
  return (
    <Grid
      item
      container
      lg={8}
      md={6}
      sx={{
        position: "relative",
        justifyContent: "space-evenly",
        mt: "2vh",
      }}
    >
      {sortHistoryArray[step].map((element, idx) => (
        <Grid
          item
          key={idx}
          sx={{ height: "35vh", width: "6vw", textAlign: "center", color: "white" }}
        >
          {algorithm === 0 ? (
            <InsertionStepLabels varLabelArray={varLabelArray[step]} idx={idx} />
          ) : algorithm === 1 ? (
            <SelectionStepLabels varLabelArray={varLabelArray[step]} idx={idx} />
          ) : (
            "mer"
          )}

          <Box
            sx={{
              height: `${(element.value * 80) / arrayMax}%`,
              backgroundColor: element.color,
              position: "absolute",
              bottom: "0",
              borderRadius: "5px 5px 0px 0px",
              transition: "all 0.15s ease",
            }}
          >
            <Typography variant="h4" sx={{ width: "6vw" }}>
              {`${element.value}`}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArrayBars;