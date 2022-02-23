import React from 'react'
import {Container, Grow, Grid, Paper, AppBar, TextField, Button, Chip} from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import Game from '../Game/Game';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const location = useLocation();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const user = JSON.parse(localStorage.getItem('profile'));


    return (
        (user?.result?.googleId || user?.result?._id) && (
            <Grow in>
            <Container maxWidth="xl" align="center" direction="row">
                
               
            <Game/>
                    
            </Container>
    
            </Grow>
        )

  );
};

export default Home;