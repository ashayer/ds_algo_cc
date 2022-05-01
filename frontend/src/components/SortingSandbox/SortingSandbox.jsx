import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  AppBar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import sortArrayInsertion from "./AlgoGenerators/insertionGen";
import sortArraySelection from "./AlgoGenerators/selectionGen";
import sortArrayMerge from "./AlgoGenerators/mergeGen";
import CodeBlock from "../Reading/CodeBlock";

let pseudoCodeStringArray = [];

const SortingSandbox = () => {
  const [algorithm, setAlgorithm] = useState(1);
  const arraySize = useRef(10);
  const [arrayElements, setArrayElements] = useState([]);
  const [arrayMax, setArrayMax] = useState(1);
  const [sortHistoryArray, setSortHistoryArray] = useState([[{}]]);
  const [codeHighlight, setCodeHighlight] = useState([]);
  const [step, setStep] = useState(0);

  const createRandomArray = () => {
    setStep(0);
    const tempArray = [];
    const tempCodeArray = [];

    for (let i = 0; i < arraySize.current; i += 1) {
      const elementObject = {
        value: Math.floor(Math.random() * (99 - 10) + 10),
        color: "blue",
      };
      tempArray.push(elementObject);
    }
    setArrayElements(tempArray);
    let max = tempArray[0].value;
    for (let i = 1; i < tempArray.length; i += 1) {
      if (tempArray[i].value > max) max = tempArray[i].value;
    }
    setArrayMax(max);
    setSortHistoryArray([tempArray]);
    setCodeHighlight(tempCodeArray);
  };

  const sortArrayWithCurrentAlgorithm = () => {
    if (algorithm === 1) {
      const [tempArray, tempCodeArray, code] = sortArrayInsertion(arrayElements);
      pseudoCodeStringArray = code;
      setSortHistoryArray(tempArray);
      setCodeHighlight(tempCodeArray);
      console.log(tempArray.length);
    } else if (algorithm === 2) {
      const [tempArray, tempCodeArray, code] = sortArraySelection(arrayElements);
      pseudoCodeStringArray = code;
      setSortHistoryArray(tempArray);
      setCodeHighlight(tempCodeArray);
    } else if (algorithm === 3) {
      const [tempArray, tempCodeArray, code] = sortArrayMerge(arrayElements);
      pseudoCodeStringArray = code;
      setSortHistoryArray(tempArray);
      setCodeHighlight(tempCodeArray);
    }
  };

  const nextStep = () => {
    if (step < sortHistoryArray.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((pStep) => pStep - 1);
    }
  };

  useEffect(() => {
    createRandomArray();
  }, []);

  const handleAlgoChange = (e) => {
    createRandomArray();
    setAlgorithm(e.target.value);
  };

  const handleSizeSliderChange = (e, value) => {
    if (!(arraySize.current === value)) {
      arraySize.current = value;
      createRandomArray();
    }
  };

  const handleHistorySliderChange = (e, value) => {
    if (!(step === value)) {
      setStep(value);
    }
  };

  return (
    <>
      <Navbar page="Sorting Algorithm Sandbox" />
      <Box>
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
              <MenuItem value={1}>Insertion Sort</MenuItem>
              <MenuItem value={2}>Selection Sort</MenuItem>
              <MenuItem value={3}>Merge Sort</MenuItem>
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
            max={15}
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
        <Box sx={{ border: "2px solid black", mt: "2vh" }}>
          <Grid
            container
            sx={{
              position: "relative",
              justifyContent: "space-evenly",
            }}
          >
            {sortHistoryArray[step].map((element, idx) => (
              <Grid item key={idx} sx={{ height: "35vh", width: "6vw" }}>
                <Box
                  sx={{
                    height: `${(element.value * 100) / arrayMax}%`,
                    backgroundColor: element.color,
                    color: "white",
                    position: "absolute",
                    bottom: "0",
                    borderRadius: "5px 5px 0px 0px",
                    textAlign: "center",
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
        </Box>
        <Button variant="contained" onClick={prevStep} disabled={sortHistoryArray.length === 1}>
          Prev Step
        </Button>
        <Button variant="contained" onClick={nextStep} disabled={sortHistoryArray.length === 1}>
          Next Step
        </Button>
        <Typography>
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
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={3}>
            <CodeBlock hoveredLine={codeHighlight} code={pseudoCodeStringArray} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SortingSandbox;
