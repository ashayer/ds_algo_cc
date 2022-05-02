import React from "react";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";

const SortOptions = ({
  algorithm,
  handleAlgoChange,
  createRandomArray,
  handleSizeSliderChange,
  sortArrayWithCurrentAlgorithm,
  prevStep,
  nextStep,
  sortHistoryArray,
  step,
  handleHistorySliderChange,
}) => {
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
            value={algorithm}
            label="Algorithm"
            onChange={handleAlgoChange}
          >
            <MenuItem value={0}>
              <Typography>INSERTION</Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography>SELECTION</Typography>
            </MenuItem>
            <MenuItem value={2}>
              <Typography>MERGE</Typography>
            </MenuItem>
            {/*
        <MenuItem value={4}>Quick Sort</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item sx={{}}>
        <Button
          variant="contained"
          onClick={() => {
            createRandomArray();
          }}
        >
          <Typography>MAKE NEW ARRAY</Typography>
        </Button>
      </Grid>
      <Grid item textAlign="center" sx={{}}>
        <Typography>ARRAY SIZE</Typography>
        <Slider
          defaultValue={10}
          onChangeCommitted={(e, value) => {
            handleSizeSliderChange(e, value);
          }}
          valueLabelDisplay="on"
          step={1}
          min={5}
          max={10}
          sx={{ width: "15vw" }}
        />
      </Grid>
      <Grid item sx={{}}>
        <Button
          variant="contained"
          onClick={() => {
            sortArrayWithCurrentAlgorithm();
          }}
        >
          <Typography>CREATE STEPS</Typography>
        </Button>
      </Grid>
      <Grid item sx={{}}>
        <Button variant="contained" onClick={prevStep} disabled={sortHistoryArray.length === 1}>
          <Typography>PREV STEP</Typography>
        </Button>
        <Button variant="contained" onClick={nextStep} disabled={sortHistoryArray.length === 1}>
          <Typography>NEXT STEP</Typography>
        </Button>
      </Grid>
      <Grid item textAlign="center" sx={{}}>
        <Typography gutterBottom>
          {sortHistoryArray.length > 1
            ? `STEP ${step} OF ${sortHistoryArray.length - 1}`
            : "PRESS SORT"}
        </Typography>
        <Slider
          value={step}
          onChange={(e, value) => {
            handleHistorySliderChange(e, value);
          }}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={sortHistoryArray.length - 1}
          sx={{ width: "15vw" }}
        />
      </Grid>
    </Grid>
  );
};

export default SortOptions;
