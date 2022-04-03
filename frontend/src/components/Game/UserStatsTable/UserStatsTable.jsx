import React from "react";
import { Grid, Typography } from "@mui/material";

const UserStatsTable = ({ localUser }) => (
  <Grid container sx={{ display: "flex", textAlign: "center", padding: "15px" }}>
    <Grid item md={6} xs={4} sx={{ border: "1px solid black" }}>
      <Typography variant="subtitle1">
        {`Avg Response Time - ${(
          localUser.responseTime /
          (localUser.numCorrect + localUser.numWrong) /
          1000
        ).toFixed(2)}s`}
      </Typography>
    </Grid>

    <Grid item md={6} xs={4} sx={{ border: "1px solid black" }}>
      <Typography variant="subtitle1">{`Streak - ${localUser.streak}`}</Typography>
    </Grid>

    <Grid item md={6} xs={4} sx={{ border: "1px solid black" }}>
      <Typography variant="subtitle1">{`Total Points - ${localUser.points}`}</Typography>
    </Grid>

    <Grid item md={6} xs={4} sx={{ border: "1px solid black" }}>
      <Typography variant="subtitle1">
        {`Question - ${localUser.numWrong + localUser.numCorrect + 1}`}
      </Typography>
    </Grid>

    <Grid item md={6} xs={4} sx={{ border: "1px solid black" }}>
      <Typography variant="subtitle1">{`Right - ${localUser.numCorrect}`}</Typography>
    </Grid>

    <Grid item md={6} xs={4} sx={{ border: "1px solid black" }}>
      <Typography variant="subtitle1">{`Wrong - ${localUser.numWrong}`}</Typography>
    </Grid>
  </Grid>
);

export default UserStatsTable;
