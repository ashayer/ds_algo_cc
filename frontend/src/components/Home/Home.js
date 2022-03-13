import React from "react";
import { Container, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Game from "../Game/Game";
import { useSelector } from "react-redux";
const Home = () => {
  const { user } = useSelector(
    (state) => state.auth
  );
  return (
    <Grow in>
      <Container maxWidth="xl" align="center">
        {user ? <Game /> : <Typography>Sign In To View</Typography>}
      </Container>
    </Grow>
  );
};

export default Home;
