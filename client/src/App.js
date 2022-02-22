import React from 'react';
import {Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
const App = () => {
    const user = JSON.parse(localStorage.getItem("profile"));

    
    return (
        <BrowserRouter>
        <Container maxWidth="xl">
            <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Navigate to="/game"/> }/>
                    <Route path='/game' exact element={<Home/>}/>
                    <Route path="/auth" exact element={(!user ? <Auth/> : <Navigate to="/game"/>)}/>
                </Routes>
        </Container>
        </BrowserRouter>
    )
}

export default App;