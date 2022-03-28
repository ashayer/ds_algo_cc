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
        <Grid item xs={6} md={6}>
          <Paper elevation={24}>
            <Typography variant="h3" sx={{ border: "1px solid blue" }}>
              Game
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minWidth: "48%", minHeight: "30vh", border: "1px solid red" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    *User name* - Stats
                  </Typography>
                  <Typography>
                    Get lifetime user stats, points, highest streak, avg response time, lifetime
                    questions right, lifetime questions wrong
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: "48%", minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea sx={{ minHeight: "30vh" }}>
                  <CardContent>
                    <Typography variant="h1">Play</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6}>
          <Paper elevation={24}>
            <Typography variant="h3" sx={{ border: "1px solid blue" }}>
              Extras
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6}>
          <Paper elevation={24}>
            <Typography variant="h3" sx={{ border: "1px solid blue" }}>
              Sorting Algorithms
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6}>
          <Paper elevation={24}>
            <Typography variant="h3" sx={{ border: "1px solid blue" }}>
              Data structures
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card sx={{ minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ minHeight: "30vh", border: "1px solid red" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
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
