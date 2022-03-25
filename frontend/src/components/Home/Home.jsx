import React, { useEffect } from "react";
import { Container, Grow, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Game from "../Game/Game";
import Login from "../Auth/Login";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const visited = JSON.parse(localStorage.getItem("visited"));
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    localStorage.setItem("visited", true);
    handleClose();
  };

  useEffect(() => {
    if ((!user || !localUser) && visited) {
      navigate("/login");
    } else {
      handleClickOpen();
    }
  }, [user, localUser, navigate, visited]);

  return !visited ? (
    <Dialog open={open} maxWidth="lg">
      <DialogTitle id="alert-dialog-title" sx={{ fontSize: 50 }}>
        Welcome!
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Thanks for taking your time to help me collect some data.
        </Typography>

        <Typography variant="h6">
          After reading all of this you will be playing a multiple choice quiz game that covers some
          basic sorting algorithms.
        </Typography>

        <Typography variant="h6">
          First you will have to create an account, but please DO NOT use any of your actual
          details. Just put whatever you can that works.
        </Typography>

        <Typography variant="h6">
          You will also be asked your skill level with sorting algorithms.
        </Typography>

        <Typography variant="h6">
          Then you will see a start game button that will begin the quiz game. You will have to try
          to answer at least 20 of them.
        </Typography>
        <Typography variant="h6">
          Assuming everything works, it will end the game and log you out.
        </Typography>
        <Typography variant="h6">
          You only have to play it once. Send this url to anyone else you think has some time to do
          this. To begin click the button in the bottom right corner.
        </Typography>

        <Typography variant="h6">Thanks again!</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAgree} variant="contained">
          GOT IT
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <Grow in>
      <Container maxWidth="xl" align="center">
        {user || localUser ? <Game /> : <Login />}
      </Container>
    </Grow>
  );
};

export default Home;
