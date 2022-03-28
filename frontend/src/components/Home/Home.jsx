import React, { useEffect } from "react";
import { Grid, Button } from "@mui/material";
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
    <>
      <Navbar page="Home" />
      <Grid container>
        <Button>To Game</Button>
      </Grid>
    </>
  );
};

export default Home;
