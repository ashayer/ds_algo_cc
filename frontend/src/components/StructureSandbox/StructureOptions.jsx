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
  const localUser = JSON.parse(sessionStorage.getItem("user"));

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
            <MenuItem value={1} disabled={!localUser.dataReading[1].completed}>
              <Typography>Stack</Typography>
            </MenuItem>
            <MenuItem value={2} disabled={!localUser.dataReading[2].completed}>
              <Typography>Linked List</Typography>
            </MenuItem>
            <MenuItem value={3} disabled={!localUser.dataReading[3].completed}>
              <Typography>Binary Tree</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default StructureOptions;
