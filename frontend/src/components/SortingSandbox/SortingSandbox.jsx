import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SortingSandbox = () => {
  const [arrayElements, setArrayElements] = useState([]);
  const [arrayMax, setArrayMax] = useState(1);
  const [sortHistoryArray, setSortHistoryArray] = useState([]);
  const [step, setStep] = useState(0);
  const speed = useRef(500);
  const createRandomArray = () => {
    const tempArray = [];
    for (let i = 0; i < 15; i += 1) {
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
      setStep(step - 1);
    }
  };

  useEffect(() => {
    createRandomArray();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{}}>
        <Box sx={{ border: "1px solid black" }}>
          <Grid
            container
            sx={{
              position: "relative",
              justifyContent: "space-evenly",
            }}
          >
            {sortHistoryArray[step]?.map((element, idx) => (
              <Grid item key={idx} sx={{ height: "75vh", width: "6vw" }}>
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
                  <Typography variant="h4" sx={{ width: "4vw" }}>
                    {`${element.value}`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            sortArrayInsertion();
          }}
        >
          Sort Using Selection
        </Button>
        <Button variant="contained" onClick={prevStep}>
          Prev Step
        </Button>
        <Button variant="contained" onClick={nextStep}>
          Next Step
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setInterval(nextStep, speed.current);
          }}
        >
          Play
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default SortingSandbox;

/*
    create an async function the loops forever
    set the current list of elements to the generators next value
*/
