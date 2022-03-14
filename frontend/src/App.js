import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
const App = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={!user ? <Register /> : <Home />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
