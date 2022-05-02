import React from "react";
import { Button, AppBar, FormControl, InputLabel, Select, MenuItem, Slider } from "@mui/material";

const SortOptions = ({
  algorithm,
  handleAlgoChange,
  createRandomArray,
  arraySize,
  handleSizeSliderChange,
  sortArrayWithCurrentAlgorithm,
}) => {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingLeft: "15px",
        backgroundColor: "white",
        mt: "2vh",
      }}
      position="static"
    >
      <FormControl sx={{ width: "15vw" }}>
        <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
      <Button
        variant="contained"
        onClick={() => {
          createRandomArray();
        }}
      >
        {`Generate New Random Array of Size ${arraySize.current}`}
      </Button>
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
      <Button
        variant="contained"
        onClick={() => {
          sortArrayWithCurrentAlgorithm();
        }}
      >
        Sort
      </Button>
    </AppBar>
  );
};

export default SortOptions;
