import React, { useEffect } from "react";
import { Grid, Box, Slide, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GameCard from "./Cards/GameCard";
import StatsCard from "./Cards/StatsCard";
import AlgoCard from "./Cards/AlgoCard";
import DataCard from "./Cards/DataCard";

const calculateCompletedReadingForAlgo = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));

  const totalSections = 4;
  const totalSubSections = 2;
  let completed = 0;
  for (let i = 0; i < totalSections; i += 1) {
    for (let j = 0; j < totalSubSections; j += 1) {
      if (localUser.algoReading[i].subsections[j].completed) {
        completed += 1;
      }
    }
  }
  return (completed / 8) * 100;
};
//! can remove if still redundant
const calculateCompletedReadingForData = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));

  const totalSections = 4;
  const totalSubSections = 2;
  let completed = 0;
  for (let i = 0; i < totalSections; i += 1) {
    for (let j = 0; j < totalSubSections; j += 1) {
      if (localUser.dataReading[i].subsections[j].completed) {
        completed += 1;
      }
    }
  }
  return (completed / 8) * 100;
};

const Home = () => {
  const navigate = useNavigate();

  const localUser = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if (localUser) {
      calculateCompletedReadingForAlgo();
      calculateCompletedReadingForData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar page="Home" />
      {localUser && (
        <Slide in>
          <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
            <Grid container spacing={7} sx={{ marginTop: 1, textAlign: "center" }}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Paper elevation={4}>
                  <GameCard />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Paper elevation={4}>
                  <StatsCard localUser={localUser} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Paper elevation={4}>
                  <AlgoCard calculateCompletedReadingForAlgo={calculateCompletedReadingForAlgo} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Paper elevation={4}>
                  <DataCard calculateCompletedReadingForData={calculateCompletedReadingForData} />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Slide>
      )}
    </>
  );
};

export default Home;
