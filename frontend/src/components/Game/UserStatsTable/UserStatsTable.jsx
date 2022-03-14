import React from "react";
import { Table, TableBody, TableRow } from "@mui/material";
import { TableContainer, TableCell } from "@mui/material";

const UserTable = () => {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 15 }}>
        <TableBody>
          <TableRow>
            <TableCell>Response Time:</TableCell>
            <TableCell>test</TableCell>
            <TableCell>Streak:</TableCell>
            <TableCell>test</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Points:</TableCell>
            <TableCell>test</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Right:</TableCell>
            <TableCell></TableCell>
            <TableCell>Wrong:</TableCell>
            <TableCell>test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
