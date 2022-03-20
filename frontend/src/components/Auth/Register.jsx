import React, { useEffect, useState } from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  CircularProgress,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import Input from "./Input";
import { register, reset } from "../../features/auth/authSlice";

const Auth = () => {
  const classes = useStyles();
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
  console.log(formData);
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        skill,
        qTypeCount: [0, 0, 0, 0],
        qTopicCount: [0, 0, 0, 0],
      };
      console.log(userData);
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
            <Input name="name" label="Name" handleChange={handleChange} autoFocus type="text" />
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type="password" />
            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          </Grid>
          <FormControl>
            <FormLabel>What is your skill level with data structures and algorithms?</FormLabel>
            <RadioGroup row onChange={handleChange} name="skill">
              <FormControlLabel value={0} control={<Radio />} label="Beginner" />
              <FormControlLabel value={1} control={<Radio />} label="Intermediate" />
              <FormControlLabel value={2} control={<Radio />} label="Expert" />
            </RadioGroup>
          </FormControl>
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
            onClick={() => {
              navigate("/login");
            }}
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
