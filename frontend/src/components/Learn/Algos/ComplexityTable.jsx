import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material/";

const ComplexityTable = ({ timeComplexityArray, space }) => {
  return (
    <>
      <Typography>Time Complexities</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Best</TableCell>
              <TableCell align="center">Average</TableCell>
              <TableCell align="center">Worst</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {timeComplexityArray.map((time, index) => (
                <TableCell key={index} align="center">
                  {time}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>Space Complexity</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">{space}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComplexityTable;
