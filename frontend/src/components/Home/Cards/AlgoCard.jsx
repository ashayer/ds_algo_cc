import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatsCard = ({ calculateCompletedReadingForAlgo }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={4}>
        <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
          Sorting Algorithms
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button onClick={() => navigate("/algos")}>
            <Typography variant="h2">Read</Typography>
          </Button>
          {`${calculateCompletedReadingForAlgo()}% Read`}

          <Button sx={{ minHeight: "30vh" }} onClick={() => navigate("/sortsandbox")}>
            <Typography variant="h2">Go to Sandbox</Typography>
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default StatsCard;
