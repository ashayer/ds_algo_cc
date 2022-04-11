import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import axios from "axios"; //! used for now to make basic calls without redux
import Navbar from "../Navbar/Navbar";

const API_URL = "/api/users/";

function createUserData(name, points, gamesPlayed, streak, numCorrect, numWrong, responseTime, id) {
  return {
    name,
    points,
    gamesPlayed,
    streak,
    numCorrect,
    numWrong,
    responseTime,
    id,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    label: "Name",
  },
  {
    id: "points",
    numeric: true,
    disablePadding: false,
    label: "Points",
  },
  {
    id: "games",
    numeric: true,
    disablePadding: false,
    label: "Games Played",
  },
  {
    id: "streak",
    numeric: true,
    disablePadding: false,
    label: "Highest Streak",
  },
  {
    id: "numCorrect",
    numeric: true,
    disablePadding: false,
    label: "Total Correct",
  },
  {
    id: "numWrong",
    numeric: true,
    disablePadding: false,
    label: "Total Wrong",
  },
  {
    id: "responseTime",
    numeric: true,
    disablePadding: false,
    label: "Response Time",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
        User Leaderboard
      </Typography>
    </Toolbar>
  );
};

export default function Leaderboard() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("points");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [rows, setRows] = useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getRows = async () => {
    const tempUserRows = [];
    const response = await axios.get(`${API_URL}users/`);
    for (let i = 0; i < response.data.length; i += 1) {
      const { name, points, gamesPlayed, streak, numCorrect, numWrong, responseTime, _id } =
        response.data[i];
      tempUserRows.push(
        createUserData(name, points, gamesPlayed, streak, numCorrect, numWrong, responseTime, _id),
      );
    }
    setRows(tempUserRows);
  };

  useEffect(() => {
    getRows();
    return () => {
      setRows([]);
    };
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar page="Leaderboard" />
      <Box maxWidth="xl">
        <Paper sx={{ mt: "2vh" }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {rows
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.name}>
                        <TableCell component="th" id={row.id} scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.points}</TableCell>
                        <TableCell align="right">{row.gamesPlayed}</TableCell>
                        <TableCell align="right">{row.streak}</TableCell>
                        <TableCell align="right">{row.numCorrect}</TableCell>
                        <TableCell align="right">{row.numWrong}</TableCell>
                        <TableCell align="right">{row.responseTime}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
}
