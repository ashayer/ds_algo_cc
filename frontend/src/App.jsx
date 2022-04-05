import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Algos from "./components/Learn/Algos/Algos";
import Game from "./components/Game/Game";
import UserEmulator from "./components/UserEmulator/UserEmulator";
import NotFound from "./components/ErrorRoute/ErrorRoute";
import Leaderboard from "./components/Leaderboard/Leaderboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/algos" element={<Algos />} />
        {/* <Route path="/read/ds" element={<Algos />} /> */}
        <Route path="/game" element={<Game />} />
        <Route path="/emulate" element={<UserEmulator />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
