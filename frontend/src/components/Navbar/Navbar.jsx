import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { logout, reset } from "../../features/auth/authSlice";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Typography component={Link} to="/" variant="h2" />
      <Toolbar className={classes.toolbar}>
        {user || localUser ? (
          <Button variant="contained" onClick={onLogout} className={classes.logoutButton}>
            Logout
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
