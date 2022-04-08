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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !localUser) {
      navigate("/login");
    }
  }, [user, localUser, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth="xl" sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <Navbar page="Home" />
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
                        *User name* Stats
                      </Typography>
                      <Typography>
                        Table of lifetime user stats, points, highest streak, avg response time,
                        lifetime questions right, lifetime questions wrong
                      </Typography>
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
                    <CardContent>Stats of amount read about sorting algorithms</CardContent>
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
                    <CardContent>Stats of amount read about data structures</CardContent>
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
    </ThemeProvider>
  );
};

export default Home;
