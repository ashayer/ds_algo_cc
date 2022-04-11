import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = ({ page }) => {
  const navigate = useNavigate();
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const onLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
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
          {localUser ? (
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
  );
};

export default Navbar;
