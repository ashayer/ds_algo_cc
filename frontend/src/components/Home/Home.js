import React, { useEffect } from "react";
import { Container, Grow } from "@mui/material";
import Game from "../Game/Game";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <Grow in>
      <Container maxWidth="xl" align="center">
        {user || localUser ? <Game /> : null}
      </Container>
    </Grow>
  );
};

export default Home;
