import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Typography, Box, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Navbar = ({ page }) => {
  const navigate = useNavigate();
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const onLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box align="center" sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <Paper elevation={3}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <Grid item xs={0} sm={2} md={2}>
              <HomeIcon
                sx={{ color: "black", cursor: "pointer" }}
                fontSize="large"
                onClick={() => navigate("/")}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8} sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ color: "black" }}>
                {page}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2} sx={{ textAlign: "end" }}>
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
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
