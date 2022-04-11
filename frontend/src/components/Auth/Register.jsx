import React, { useEffect, useState } from "react";
import { Button, Paper, Grid, Container, Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Input from "./Input";

const API_URL = "/api/users/";

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    if (response.data) {
      sessionStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.status;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Auth = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "bottom-right",
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
      };
      const registerStatus = register(userData);
      registerStatus.then((status) => {
        if (status === 201) {
          navigate("/");
        } else {
          toast.error("User already exists!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }
  };

  useEffect(() => {
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    if (localUser) {
      navigate("/");
    }
  }, []);

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
