import React from "react";
import { Table, TableBody, TableRow } from "@mui/material";
import { TableContainer, TableCell } from "@mui/material";

const UserStatsTable = ({localUser}) => {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 15}}>
        <TableBody>
          <TableRow>
            <TableCell>Avg Response Time:</TableCell>
            <TableCell>{((localUser.responseTime / (localUser.numCorrect + localUser.numWrong)) / 1000).toFixed(2) + "s"}</TableCell>
            <TableCell>Streak:</TableCell>
            <TableCell>{localUser.streak}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Points:</TableCell>
            <TableCell>{localUser.points}</TableCell>
            <TableCell>Question #</TableCell>
            <TableCell>{localUser.numWrong + localUser.numCorrect + 1}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Right:</TableCell>
            <TableCell>{localUser.numCorrect}</TableCell>
            <TableCell>Wrong:</TableCell>
            <TableCell>{localUser.numWrong}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserStatsTable;
