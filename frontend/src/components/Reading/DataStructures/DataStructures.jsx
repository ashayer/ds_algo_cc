/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import DataStructureAccordion from "./Accordion/DataStructureAccordion";

const API_URL = "/api/users/";

const DataStructures = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const [sectionNum, setSectionNum] = useState(0);
  const [sectionArray, setSectionArray] = useState(localUser.dataReading);

  const nextSection = () => {
    if (sectionNum < sectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  const updateLocalUser = async (array) => {
    await axios.patch(`${API_URL}updateData/${localUser._id}`, {
      dataReading: array,
    });
    localUser.dataReading = array;
    sessionStorage.setItem("user", JSON.stringify(localUser));
  };

  return (
    <Box>
      <Navbar page="Data Structures" />
      <DataStructureAccordion
        sectionNum={sectionNum}
        sectionArray={sectionArray}
        setSectionArray={setSectionArray}
        updateLocalUser={updateLocalUser}
      />
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center", marginTop: "2vh" }}
      >
        <Button
          onClick={prevSection}
          variant="contained"
          disabled={sectionNum < 1}
          sx={{
            visibility: `${sectionNum === 0 ? "hidden" : "visible"}`,
          }}
        >
          <ArrowBackIcon />
          {sectionNum > 0 ? `${sectionArray[sectionNum - 1].sectionName}` : null}
        </Button>

        <Button
          onClick={nextSection}
          variant="contained"
          disabled={sectionNum === sectionArray.length - 1 || !sectionArray[sectionNum].completed}
          sx={{
            visibility: `${sectionNum === sectionArray.length - 1 ? "hidden" : "visible"}`,
          }}
        >
          {sectionNum < sectionArray.length - 1
            ? `${sectionArray[sectionNum + 1].sectionName}`
            : null}
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Box>
  );
};

export default DataStructures;
