import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import {logout, reset} from "../../features/auth/authSlice";
// import {getPoints} from '../../actions/userActions';

const Navbar = () => {
  const classes = useStyles();
  const [level, setLevel] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  console.log(user);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
          color="secondary"
        >
          <Home fontSize="large" />
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography variant="h4" className={classes.userName}></Typography>
            <Typography variant="h4" className={classes.userName}></Typography>
            <Typography className={classes.userName} variant="h4"></Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button component={Link} variant="contained" color="primary" to="/login">Sign In</Button>
            <Button component={Link} variant="contained" color="primary" to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
