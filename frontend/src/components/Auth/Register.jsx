import React, { useEffect, useState } from "react";
import {
  Button,
  Paper,
  Grid,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Input from "./Input";
import { register, reset } from "../../features/auth/authSlice";

const Auth = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skill: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, password, confirmPassword, skill } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const userData = {
        name,
        email,
        password,
        skill,
        qHistory: [],
      };
      dispatch(register(userData));
    }
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "15vh",
          border: "1px solid black",
          alignContent: "center",
        }}
        disableGutters
        maxWidth="xs"
      >
        <Paper
          square
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          elevation={3}
        >
          <form onSubmit={handleSubmit}>
            <Grid container sx={{ padding: "25px", justifyContent: "center" }} spacing={4}>
              <Input name="name" label="Name" handleChange={handleChange} autoFocus type="text" />
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type="password" />
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />

              <Grid item>
                <FormControl sx={{ alignItems: "center" }}>
                  <FormLabel>What is your knowledge level with sorting algorithms?</FormLabel>
                  <RadioGroup row onChange={handleChange} name="skill">
                    <FormControlLabel value={0} control={<Radio />} label="Beginner" />
                    <FormControlLabel value={1} control={<Radio />} label="Intermediate" />
                    <FormControlLabel value={2} control={<Radio />} label="Expert" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: "10px",
                    backgroundColor: "#0091ff",
                    color: "color",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#3c52b2",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
          sx={{
            borderRadius: 0,
            padding: "10px",
            backgroundColor: "#000000",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#3c52b2",
            },
          }}
        >
          Log In Instead
        </Button>
      </Container>
    </Grow>
  );
};

export default Auth;
