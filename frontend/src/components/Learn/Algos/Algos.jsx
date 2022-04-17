/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import SortingAlgorithmAccordion from "./SortingAlgorithmAccordion";

const API_URL = "/api/users/";

const Algos = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const [sectionNum, setSectionNum] = useState(0);
  const [tempSectionArray, setTempSectionArray] = useState(localUser.algoReading);

  const nextSection = () => {
    if (sectionNum < tempSectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  const updateLocalUser = async (array) => {
    await axios.patch(`${API_URL}updateAlgo/${localUser._id}`, {
      algoReading: array,
    });
    localUser.algoReading = array;
    sessionStorage.setItem("user", JSON.stringify(localUser));
  };

  return (
    <Container maxWidth="xl">
      <Navbar page="Sorting Algorithms" />
      <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Button
          onClick={prevSection}
          variant="contained"
          disabled={sectionNum < 1}
          sx={{
            visibility: `${sectionNum === 0 ? "hidden" : "visible"}`,
          }}
        >
          <ArrowBackIcon />
          {sectionNum > 0 ? `${tempSectionArray[sectionNum - 1].sectionName}` : null}
        </Button>

        <Button
          onClick={nextSection}
          variant="contained"
          disabled={
            sectionNum === tempSectionArray.length - 1 || !tempSectionArray[sectionNum].completed
          }
          sx={{
            visibility: `${sectionNum === tempSectionArray.length - 1 ? "hidden" : "visible"}`,
          }}
        >
          {sectionNum < tempSectionArray.length - 1
            ? `${tempSectionArray[sectionNum + 1].sectionName}`
            : null}
          <ArrowForwardIcon />
        </Button>
      </Grid>
      <SortingAlgorithmAccordion
        sectionNum={sectionNum}
        tempSectionArray={tempSectionArray}
        setTempSectionArray={setTempSectionArray}
        updateLocalUser={updateLocalUser}
      />
    </Container>
  );
};

export default Algos;
