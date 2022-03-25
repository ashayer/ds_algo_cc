import React, { useEffect, useState } from "react";
import { Button, Paper, Grid, Typography, Container, CircularProgress, Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useStyles from "./styles";
import Input from "./Input";
import { login, reset } from "../../features/auth/authSlice";

const Auth = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    <Grow in>
      <Container className={classes.formContainer} maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h5">Sign In</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container sx={{ padding: "25px", justifyContent: "space-between" }} spacing={4}>
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type="password" />
              <Grid item>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ padding: "10px" }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  type="button"
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    navigate("/register");
                  }}
                  sx={{ padding: "10px" }}
                >
                  Register Instead
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Grow>
  );
};

export default Auth;
