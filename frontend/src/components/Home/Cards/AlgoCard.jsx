import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatsCard = ({ calculateCompletedReadingForAlgo }) => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
        Sorting Algorithms
      </Typography>
      <Grid
        container
        sx={{
          direction: "column",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "30vh",
        }}
      >
        <Grid item xs={12}>
          <Typography>{`${calculateCompletedReadingForAlgo()}% Read`}</Typography>
        </Grid>
        <Grid item xs={6} md={6} sx={{ alignSelf: "end" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ borderRadius: "0px", border: "5px solid white" }}
            onClick={() => navigate("/algos")}
          >
            <Typography variant="h3">Read</Typography>
          </Button>
        </Grid>
        <Grid item xs={6} md={6} sx={{ alignSelf: "end" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ borderRadius: "0px", border: "5px solid white" }}
            onClick={() => navigate("/sortsandbox")}
          >
            <Typography variant="h3">Sandbox</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StatsCard;
