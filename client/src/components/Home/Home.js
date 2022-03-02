import React from 'react'
import {Container, Grow, Typography} from '@material-ui/core';
import useStyles from './styles';
import Game from '../Game/Game';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
            <Grow in>
                <Container maxWidth="xl" align="center">
                {
                    (user?.result?.googleId || user?.result?._id) ? (<Game/>):(
                        <Typography>
                            Sign In To View
                        </Typography>
                    )
                }
                </Container>
            </Grow>
  );
};

export default Home;