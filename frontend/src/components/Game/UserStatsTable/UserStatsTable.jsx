import React from "react";
import { Table, TableBody, TableRow, TableContainer, TableCell } from "@mui/material";
import PropTypes from "prop-types";

const UserStatsTable = ({ localUser }) => (
  <TableContainer>
    <Table sx={{ maxWidth: 15 }}>
      <TableBody>
        <TableRow>
          <TableCell>Avg Response Time:</TableCell>
          <TableCell>
            {`${(
              localUser.responseTime /
              (localUser.numCorrect + localUser.numWrong) /
              1000
            ).toFixed(2)}s`}
          </TableCell>
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

UserStatsTable.propTypes = {
  localUser: PropTypes.shape({
    responseTime: PropTypes.number.isRequired,
    streak: PropTypes.number.isRequired,
    numCorrect: PropTypes.number.isRequired,
    numWrong: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  }),
};

UserStatsTable.defaultProps = {
  localUser: PropTypes.shape({
    responseTime: 0,
    streak: 0,
    numCorrect: 0,
    numWrong: 0,
    points: 0,
  }),
};

export default UserStatsTable;
