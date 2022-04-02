import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Container, Grow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Navbar = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <Grow in>
      <Container maxWidth="xl" align="center" disableGutters>
        <AppBar
          sx={{
            borderRadius: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "15px",
            backgroundColor: "white",
          }}
          position="static"
        >
          <Typography variant="h3" sx={{ color: "black" }}>
            {page}
          </Typography>
          <Toolbar>
            {user || localUser ? (
              <Button variant="contained" onClick={onLogout}>
                Logout
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
      </Container>
    </Grow>
  );
};

export default Navbar;
