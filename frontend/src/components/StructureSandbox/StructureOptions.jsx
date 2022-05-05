import React from "react";
import {
  // Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // Slider,
  Typography,
} from "@mui/material";

const StructureOptions = ({ handleStructureChange, dataStructure }) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        mt: 1,
        p: 1,
      }}
    >
      <Grid item lg={1} sx={{}}>
        <FormControl>
          <InputLabel id="algo-select-label">Algorithm</InputLabel>
          <Select
            labelId="algo-select-label"
            id="algo-select"
            label="Algorithm"
            value={dataStructure}
            onChange={handleStructureChange}
          >
            <MenuItem value={0}>
              <Typography>Queue</Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography>Stack</Typography>
            </MenuItem>
            <MenuItem value={2}>
              <Typography>Linked List</Typography>
            </MenuItem>
            <MenuItem value={3}>
              <Typography>Binary Tree</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default StructureOptions;
