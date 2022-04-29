import React, { useEffect } from "react";
import { Grid, Box, Slide } from "@mui/material";
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
          <Box maxWidth="xl" sx={{ marginLeft: "auto", marginRight: "auto" }}>
            <Grid container spacing={5} sx={{ marginTop: 1, textAlign: "center" }}>
              <GameCard />
              <StatsCard localUser={localUser} />
              <AlgoCard calculateCompletedReadingForAlgo={calculateCompletedReadingForAlgo} />
              <DataCard calculateCompletedReadingForData={calculateCompletedReadingForData} />
            </Grid>
          </Box>
        </Slide>
      )}
    </>
  );
};

export default Home;
