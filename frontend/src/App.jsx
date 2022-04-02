import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Learn from "./components/Learn/Learn";
import Game from "./components/Game/Game";
import UserEmulator from "./components/UserEmulator/UserEmulator";
import NotFound from "./components/ErrorRoute/ErrorRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/game" element={<Game />} />
        <Route path="/emulate" element={<UserEmulator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
