import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameCard = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={4}>
        <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
          Game
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "30vh" }}>
          <Typography gutterBottom variant="h5">
            Game Options
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            sx={{ borderRadius: "0px" }}
            onClick={() => navigate("/game")}
          >
            <Typography variant="h3">Play</Typography>
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default GameCard;
