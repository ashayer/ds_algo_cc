import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Box,
  Container,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

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
    <Container maxWidth="xl">
      <Navbar page="Home" />
      <Grid container spacing={3} sx={{ marginTop: 2, textAlign: "center" }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4}>
            <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
              Game
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minWidth: "48%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Game options
                  </Typography>
                  <Typography>
                    Options to set game topics, dynamic or static difficulties
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: "48%" }}>
                <CardActionArea sx={{ minHeight: "30vh" }}>
                  <CardContent>
                    <Typography variant="h1">Play</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4}>
            <Typography variant="h3">Game</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minWidth: "48%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    *User name* Stats
                  </Typography>
                  <Typography>
                    Table of lifetime user stats, points, highest streak, avg response time,
                    lifetime questions right, lifetime questions wrong
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: "48%" }}>
                <CardActionArea sx={{ minHeight: "30vh" }}>
                  <CardContent>
                    <Typography variant="h2">View leader board</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4}>
            <Typography variant="h3">Game</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minWidth: "49%", minHeight: "30vh" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h2">Read</Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent>Stats of amount read about sorting algorithms</CardContent>
              </Card>
              <Card sx={{ minWidth: "49%", minHeight: "30vh" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h2">Go to Sandbox</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4}>
            <Typography variant="h3">Data Structures</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minWidth: "49%" }}>
                <CardActionArea sx={{ minHeight: "15vh" }}>
                  <CardContent>
                    <Typography variant="h2">Read</Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent>Stats of amount read about data structures</CardContent>
              </Card>
              <Card sx={{ minWidth: "49%" }}>
                <CardActionArea sx={{ minHeight: "30vh" }}>
                  <CardContent>
                    <Typography variant="h2">Go to Sandbox</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
