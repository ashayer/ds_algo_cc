/* eslint-disable no-undef */
import React from "react";
import {
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatsCard = ({ localUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
        Stats
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
          <Typography variant="h5">{`${localUser.name}`}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Points</TableCell>
                  <TableCell align="center">Games Played</TableCell>
                  <TableCell align="center">Highest Streak</TableCell>
                  <TableCell align="center">Total Correct</TableCell>
                  <TableCell align="center">Total Wrong</TableCell>
                  <TableCell align="center">Response Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">{`${localUser.points}`}</TableCell>
                  <TableCell align="center">{`${localUser.gamesPlayed}`}</TableCell>
                  <TableCell align="center">{`${localUser.streak}`}</TableCell>
                  <TableCell align="center">{`${localUser.numCorrect}`}</TableCell>
                  <TableCell align="center">{`${localUser.numWrong}`}</TableCell>
                  <TableCell align="center">{`${localUser.responseTime}`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sx={{ alignSelf: "end" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ borderRadius: "0px", border: "5px solid white" }}
            onClick={() => navigate("/leaderboard")}
          >
            <Typography variant="h3">LeaderBoard</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StatsCard;

// <table>
// <tbody>
//   <tr>
//     <td>Points</td>
//     <td>{`${localUser.points}`}</td>
//   </tr>
//   <tr>
//     <td>Games Played</td>
//     <td>{`${localUser.gamesPlayed}`}</td>
//   </tr>
//   <tr>
//     <td>Highest Streak</td>
//     <td>{`${localUser.streak}`}</td>
//   </tr>
//   <tr>
//     <td>Total Correct</td>
//     <td>{`${localUser.numCorrect}`}</td>
//   </tr>
//   <tr>
//     <td>Total Wrong</td>
//     <td>{`${localUser.numWrong}`}</td>
//   </tr>
//   <tr>
//     <td>Response Time</td>
//     <td>{`${localUser.responseTime}`}</td>
//   </tr>
// </tbody>
// </table>
