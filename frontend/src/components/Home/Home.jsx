import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Box,
  Slide,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const calculateCompletedReadingForAlgo = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));

  const totalSections = 4;
  const totalSubSections = 2;
  let completed = 0;
  for (let i = 0; i < totalSections; i += 1) {
    for (let j = 0; j < totalSubSections; j += 1) {
      if (localUser.algoReading[i].subsections[j].completed) {
        completed += 1;
      }
    }
  }
  return (completed / 8) * 100;
};

const calculateCompletedReadingForData = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));

  const totalSections = 4;
  const totalSubSections = 2;
  let completed = 0;
  for (let i = 0; i < totalSections; i += 1) {
    for (let j = 0; j < totalSubSections; j += 1) {
      if (localUser.dataReading[i].subsections[j].completed) {
        completed += 1;
      }
    }
  }
  return (completed / 8) * 100;
};

const Home = () => {
  const navigate = useNavigate();

  const localUser = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if (localUser) {
      calculateCompletedReadingForAlgo();
      calculateCompletedReadingForData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar page="Home" />
      {localUser && (
        <Box maxWidth="xl" sx={{ marginLeft: "auto", marginRight: "auto" }}>
          <Grid container spacing={5} sx={{ marginTop: 1, textAlign: "center" }}>
            <Slide in>
              <Grid item xs={12} md={6}>
                <Paper elevation={4}>
                  <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
                    Game
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Card sx={{ minWidth: "50%", align: "center" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5">
                          Game options
                        </Typography>
                        <Typography>
                          Options to set game topics, dynamic or static difficulties
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        minWidth: "50%",
                      }}
                    >
                      <CardActionArea sx={{ minHeight: "30vh" }} onClick={() => navigate("/game")}>
                        <CardContent>
                          <Typography sx={{ top: "50%" }} variant="h2">
                            Play
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Paper>
              </Grid>
            </Slide>
            <Slide in>
              <Grid item xs={12} md={6}>
                <Paper elevation={4}>
                  <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
                    Stats
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Card sx={{ minWidth: "50%" }}>
                      <CardContent>
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
                      </CardContent>
                    </Card>
                    <Card sx={{ minWidth: "50%" }}>
                      <CardActionArea
                        sx={{ minHeight: "30vh" }}
                        onClick={() => navigate("/leaderboard")}
                      >
                        <CardContent>
                          <Typography variant="h2">View Leader Board</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Paper>
              </Grid>
            </Slide>
            <Slide in>
              <Grid item xs={12} md={6}>
                <Paper elevation={4}>
                  <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
                    Sorting Algorithms
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Card sx={{ minWidth: "50%", minHeight: "30vh" }}>
                      <CardActionArea onClick={() => navigate("/algos")}>
                        <CardContent>
                          <Typography variant="h2">Read</Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardContent>{`${calculateCompletedReadingForAlgo()}% Read`}</CardContent>
                    </Card>
                    <Card sx={{ minWidth: "50%" }}>
                      <CardActionArea
                        sx={{ minHeight: "30vh" }}
                        onClick={() => navigate("/sortsandbox")}
                      >
                        <CardContent>
                          <Typography variant="h2">Go to Sandbox</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Paper>
              </Grid>
            </Slide>
            <Slide in>
              <Grid item xs={12} md={6}>
                <Paper elevation={4}>
                  <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
                    Data Structures
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Card sx={{ minWidth: "50%" }}>
                      <CardActionArea onClick={() => navigate("/datastructs")}>
                        <CardContent>
                          <Typography variant="h2">Read</Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardContent>{`${calculateCompletedReadingForData()}% Read`}</CardContent>
                    </Card>
                    <Card sx={{ minWidth: "50%" }}>
                      <CardActionArea
                        sx={{ minHeight: "30vh" }}
                        onClick={() => navigate("/datasandbox")}
                      >
                        <CardContent>
                          <Typography variant="h2">Go to Sandbox</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Paper>
              </Grid>
            </Slide>
          </Grid>
        </Box>
      )}
    </ThemeProvider>
  );
};

export default Home;
