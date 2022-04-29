import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  Box,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameCard = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("adaptive");
  const [difficulty, setDifficulty] = useState("1");
  const [gameLength, setGameLength] = useState("0");
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleLengthChange = (e) => {
    setGameLength(e.target.value);
  };

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={4}>
        <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
          Game
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
            <Typography gutterBottom variant="h5">
              Game Options
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="game-type-select">Type</InputLabel>
                <Select
                  labelId="game-type-select"
                  id="game-type-select"
                  value={type}
                  label="Type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="adaptive">Adaptive</MenuItem>
                  <MenuItem value="static">Static</MenuItem>
                </Select>
              </FormControl>
              {type === "static" && (
                <FormControl sx={{ width: "200px" }}>
                  <InputLabel id="game-difficulty-select">Difficulty</InputLabel>
                  <Select
                    labelId="game-difficulty-select"
                    id="game-difficulty-select"
                    value={difficulty}
                    label="difficulty"
                    onChange={handleDifficultyChange}
                  >
                    <MenuItem value="0">Easy</MenuItem>
                    <MenuItem value="1">Medium</MenuItem>
                    <MenuItem value="2">Hard</MenuItem>
                  </Select>
                </FormControl>
              )}
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="game-length-select">Questions</InputLabel>
                <Select
                  labelId="game-length-select"
                  id="game-length-select"
                  value={gameLength}
                  label="Length"
                  onChange={handleLengthChange}
                >
                  <MenuItem value="0">Endless</MenuItem>
                  <MenuItem value="20">20</MenuItem>
                  <MenuItem value="40">40</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ alignSelf: "end" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ borderRadius: "0px" }}
              onClick={() => navigate("/game")}
            >
              <Typography variant="h3">Play</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default GameCard;
