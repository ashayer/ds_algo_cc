import React, { useEffect, useState } from "react";
import {
  Box,
  Grow,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import axios from "axios";
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
              <Typography>{headCell.label}</Typography>
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

export default function Leaderboard() {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("points");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setIsloading] = useState(true);
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
    setIsloading(false);
  };

  useEffect(() => {
    setIsloading(true);
    getRows();
    return () => {
      setRows([]);
    };
  }, []);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box>
      <Navbar page="Leaderboard" />
      <Box maxWidth="xl" sx={{ marginLeft: "auto", marginRight: "auto", mt: "2vh" }}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "30vw",
              justifyContent: "center",
            }}
          >
            <CircularProgress size={200} thickness={1.8} sx={{ color: "white" }} />
          </Box>
        ) : (
          <Grow in>
            <Paper>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody sx={{ overflow: "scroll" }}>
                    {rows
                      .slice()
                      .sort(getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover tabIndex={-1} key={row.name}>
                            <TableCell component="th" id={row.id} scope="row">
                              <Typography noWrap sx={{ width: "15vw" }}>
                                {row.name}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{row.points}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{row.gamesPlayed}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{row.streak}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{row.numCorrect}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{row.numWrong}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{row.responseTime}</Typography>
                            </TableCell>
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
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Grow>
        )}
      </Box>
    </Box>
  );
}
