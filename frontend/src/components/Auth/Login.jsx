import React, { useEffect, useState } from "react";
import { Button, Paper, Grid, Container, Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Input from "./Input";
import { login, reset } from "../../features/auth/authSlice";
import useStyles from "./styles";

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

  return (
    <Grow in>
      <Container className={classes.formContainer} maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <form onSubmit={handleSubmit}>
            <Grid container sx={{ padding: "25px", justifyContent: "space-between" }} spacing={4}>
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type="password" />
              <Grid item>
                <Button
                  fullWidth
                  className={classes.formSubmitButton}
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: "10px",
                    backgroundColor: "#c94b4b",
                    color: "color",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#3c52b2",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.formButton}
                  type="button"
                  variant="contained"
                  onClick={() => {
                    navigate("/register");
                  }}
                  sx={{
                    padding: "10px",
                    backgroundColor: "#000000",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#3c52b2",
                    },
                  }}
                >
                  Register Instead
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href="https://forms.gle/sX8YTNmbmZZngrjn9"
                  target="_blank"
                  type="button"
                  variant="contained"
                  sx={{ padding: "10px" }}
                >
                  Feedback form
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
