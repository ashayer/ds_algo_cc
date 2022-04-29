import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatsCard = ({ calculateCompletedReadingForData }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={4}>
        <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
          Data Structures
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "30vh" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "0px" }}
            onClick={() => navigate("/datastructs")}
          >
            <Typography variant="h3">Read</Typography>
          </Button>
          {`${calculateCompletedReadingForData()}% Read`}
          <Button
            variant="contained"
            sx={{ borderRadius: "0px" }}
            onClick={() => navigate("/datasandbox")}
          >
            <Typography variant="h3">Go to Sandbox</Typography>
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default StatsCard;