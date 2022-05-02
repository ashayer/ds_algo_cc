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
  arraySize,
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
        mt: "2vh",
        p: 1,
      }}
    >
      <Grid item>
        <FormControl>
          <InputLabel id="algo-select-label">Algorithm</InputLabel>
          <Select
            labelId="algo-select-label"
            id="algo-select"
            value={algorithm}
            label="Algorithm"
            onChange={handleAlgoChange}
          >
            <MenuItem value={0}>Insertion Sort</MenuItem>
            <MenuItem value={1}>Selection Sort</MenuItem>
            <MenuItem value={2}>Merge Sort</MenuItem>
            {/*
        <MenuItem value={4}>Quick Sort</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            createRandomArray();
          }}
        >
          <Typography>{`Generate New Random Array of Size ${arraySize.current}`}</Typography>
        </Button>
      </Grid>
      <Grid item textAlign="center">
        <Typography>Array Size</Typography>
        <Slider
          defaultValue={10}
          onChangeCommitted={(e, value) => {
            handleSizeSliderChange(e, value);
          }}
          valueLabelDisplay="auto"
          step={1}
          min={5}
          max={10}
          sx={{ width: "15vw" }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            sortArrayWithCurrentAlgorithm();
          }}
        >
          <Typography>CREATE STEPS</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={prevStep} disabled={sortHistoryArray.length === 1}>
          Prev Step
        </Button>
        <Button variant="contained" onClick={nextStep} disabled={sortHistoryArray.length === 1}>
          Next Step
        </Button>
      </Grid>
      <Grid item textAlign="center">
        <Typography gutterBottom>
          {sortHistoryArray.length > 1
            ? `Step ${step} of ${sortHistoryArray.length - 1}`
            : "Press Sort"}
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
