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
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";

const Line1 = "1 for (int i = 0; i < arr.len; i++)\n";
const Line2 = "2   for (int j = i; j > 0; j--)\n";
const Line3 = "3     if (arr[j] < arr[j-1])\n";
const Line4 = "4       swap (arr[j],arr[j-1])\n";
const Line5 = "5     else break;    ";

const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SortingSandbox = () => {
  const [algorithm, setAlgorithm] = useState("");
  const arraySize = useRef(15);
  const [arrayElements, setArrayElements] = useState([]);
  const [arrayMax, setArrayMax] = useState(1);
  const [sortHistoryArray, setSortHistoryArray] = useState([[{}]]);
  const [step, setStep] = useState(0);
  const createRandomArray = () => {
    setStep(0);
    const tempArray = [];
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
  };

  const sortArrayInsertion = () => {
    const tempArray = [];
    const arr = JSON.parse(JSON.stringify(arrayElements));
    tempArray.push(JSON.parse(JSON.stringify(arr)));
    for (let i = 1; i < arr.length; i += 1) {
      // Choosing the first element in our unsorted subarray
      const current = arr[i].value;
      // The last element of our sorted subarray
      let j = i - 1;
      arr[i].color = "red";
      arr[j].color = "red";

      tempArray.push(JSON.parse(JSON.stringify(arr)));
      while (j >= 0 && arr[j].value > current) {
        const temp = arr[j + 1].value;
        arr[j + 1].value = arr[j].value;
        arr[j].value = temp;
        arr[j + 1].color = "blue";
        j -= 1;
        if (j >= 0) {
          arr[j].color = "red";
        }
        tempArray.push(JSON.parse(JSON.stringify(arr)));
      }
      arr[j + 1].value = current;

      if (j >= 0) arr[j].color = "blue";
      arr[i].color = "pink";
      arr[j + 1].color = "blue";
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }

    for (let k = 0; k < arr.length; k += 1) {
      arr[k].color = "green";
    }
    tempArray.push(JSON.parse(JSON.stringify(arr)));

    setSortHistoryArray(tempArray);
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

  const handleChange = (e) => {
    setAlgorithm(e.target.value);
  };

  const handleSliderChange = (e, value) => {
    if (!(arraySize.current === value)) {
      arraySize.current = value;
      createRandomArray();
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
              onChange={handleChange}
              defaultValue=""
            >
              <MenuItem value={1}>Insertion Sort</MenuItem>
              <MenuItem value={2}>Selection Sort</MenuItem>
              <MenuItem value={3}>Merge Sort</MenuItem>
              <MenuItem value={4}>Quick Sort</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={() => {
              createRandomArray();
            }}
          >
            Generate New Random Array
          </Button>
          <Slider
            aria-label="Temperature"
            defaultValue={15}
            onChangeCommitted={(e, value) => {
              handleSliderChange(e, value);
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
              sortArrayInsertion();
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
        <Button variant="contained" onClick={prevStep}>
          Prev Step
        </Button>
        <Button variant="contained" onClick={nextStep}>
          Next Step
        </Button>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              style={{ whiteSpace: "break-spaces" }}
              sx={{ textAlign: "left" }}
            >
              {pseudoCodeStringArray}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SortingSandbox;

/*
    create an async function the loops forever
    set the current list of elements to the generators next value
*/
