import React, { useEffect, useState } from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import useStyles from "./styles";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";

const Auth = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Sign Up</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="name"
              label="Name"
              handleChange={handleChange}
              autoFocus
            />
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
            />
            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick = {() => {navigate('/login')}}
            className={classes.submit}
          >
            Log In Instead
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
