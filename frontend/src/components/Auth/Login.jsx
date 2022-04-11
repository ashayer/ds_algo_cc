import React, { useState, useEffect } from "react";
import { Button, Paper, Grid, Container, Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Input from "./Input";

const API_URL = "/api/users/";

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}login`, userData);
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
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  useEffect(() => {
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    if (localUser) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    // dispatch(login(userData));

    const loginStatus = login(userData);
    loginStatus.then((status) => {
      if (status === 200) {
        navigate("/");
      } else {
        toast.error("Invalid Credentials!", {
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
  };

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
        maxWidth="xs"
        disableGutters
      >
        <Paper
          square
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          elevation={3}
        >
          <form onSubmit={handleSubmit}>
            <Grid container sx={{ padding: "25px", justifyContent: "center" }} spacing={4}>
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type="password" />
              <Grid item>
                <Button
                  fullWidth
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
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            navigate("/register");
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
          Register Instead
        </Button>
      </Container>
    </Grow>
  );
};

export default Auth;
