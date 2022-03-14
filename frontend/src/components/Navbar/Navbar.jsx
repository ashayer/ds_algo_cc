import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
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
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
        >
          <HomeIcon fontSize="large" />
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user || localUser ? (
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
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to="/login"
            >
              Sign In
            </Button>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to="/register"
            >
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
