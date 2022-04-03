import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Container, Grow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
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
            <HomeIcon
              sx={{ color: "black", cursor: "pointer", paddingRight: "15px" }}
              fontSize="large"
              onClick={() => navigate("/")}
            />
            {page}
          </Typography>
          <Toolbar>
            {user || localUser ? (
              <Button
                variant="contained"
                onClick={onLogout}
                sx={{
                  "&:hover": { backgroundColor: "#f72f2f" },
                  transition: "all 0.2s ease",
                }}
              >
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
