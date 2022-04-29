import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatsCard = ({ localUser }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={4}>
        <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
          Stats
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5">
            {`${localUser.name}`}
          </Typography>
          <table>
            <tbody>
              <tr>
                <td>Points</td>
                <td>{`${localUser.points}`}</td>
              </tr>
              <tr>
                <td>Games Played</td>
                <td>{`${localUser.gamesPlayed}`}</td>
              </tr>
              <tr>
                <td>Highest Streak</td>
                <td>{`${localUser.streak}`}</td>
              </tr>
              <tr>
                <td>Total Correct</td>
                <td>{`${localUser.numCorrect}`}</td>
              </tr>
              <tr>
                <td>Total Wrong</td>
                <td>{`${localUser.numWrong}`}</td>
              </tr>
              <tr>
                <td>Response Time</td>
                <td>{`${localUser.responseTime}`}</td>
              </tr>
            </tbody>
          </table>

          <Button onClick={() => navigate("/leaderboard")}>
            <Typography variant="h2">View Leader Board</Typography>
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default StatsCard;
