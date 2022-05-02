import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import sortArrayInsertion from "./AlgoGenerators/insertionGen";
import sortArraySelection from "./AlgoGenerators/selectionGen";
import sortArrayMerge from "./AlgoGenerators/mergeGen";
import CodeBlock from "../Reading/CodeBlock";
import SortOptions from "./SortOptions";
import ArrayBars from "./ArrayBars";
import * as codeString from "./AlgoGenerators/AlgoStrings";

const SortingSandbox = () => {
  const [algorithm, setAlgorithm] = useState(2);
  const arraySize = useRef(10);
  const [arrayElements, setArrayElements] = useState([]);
  const [arrayMax, setArrayMax] = useState(1);
  const [sortHistoryArray, setSortHistoryArray] = useState([[{}]]);
  const [varLabelArray, setVarLabelArray] = useState([[{}]]);

  const [codeHighlight, setCodeHighlight] = useState([]);
  const [step, setStep] = useState(0);
  const [pseudoCodeString, setPseudoCodeString] = useState(codeString.mergeString);

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
    if (algorithm === 0) {
      const [tempArray, tempCodeArray, tempVarLabelArray] = sortArrayInsertion(arrayElements);
      setSortHistoryArray(tempArray);
      setCodeHighlight(tempCodeArray);
      setVarLabelArray(tempVarLabelArray);
    } else if (algorithm === 1) {
      const [tempArray, tempCodeArray, tempVarLabelArray] = sortArraySelection(arrayElements);
      setSortHistoryArray(tempArray);
      setCodeHighlight(tempCodeArray);
      setVarLabelArray(tempVarLabelArray);
    } else if (algorithm === 2) {
      const [tempArray, tempCodeArray, tempVarLabelArray] = sortArrayMerge(arrayElements);
      setSortHistoryArray(tempArray);
      setCodeHighlight(tempCodeArray);
      setVarLabelArray(tempVarLabelArray);
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
    if (e.target.value === 0) {
      setPseudoCodeString(codeString.insertionString);
    } else if (e.target.value === 1) {
      setPseudoCodeString(codeString.selectionString);
    }
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
      <SortOptions
        algorithm={algorithm}
        handleAlgoChange={handleAlgoChange}
        createRandomArray={createRandomArray}
        arraySize={arraySize}
        handleSizeSliderChange={handleSizeSliderChange}
        sortArrayWithCurrentAlgorithm={sortArrayWithCurrentAlgorithm}
        prevStep={prevStep}
        nextStep={nextStep}
        sortHistoryArray={sortHistoryArray}
        step={step}
        handleHistorySliderChange={handleHistorySliderChange}
      />
      <Grid container>
        <ArrayBars
          algorithm={algorithm}
          sortHistoryArray={sortHistoryArray}
          step={step}
          varLabelArray={varLabelArray}
          arrayMax={arrayMax}
        />
        <Grid
          item
          lg={3.8}
          md={6}
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CodeBlock hoveredLine={codeHighlight[step]} code={pseudoCodeString} />
        </Grid>
      </Grid>
    </>
  );
};

export default SortingSandbox;
