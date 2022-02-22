import React, {useState, useEffect} from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import {getPoints} from '../../actions/userActions';

const Navbar = () => {
    const classes = useStyles();
    const localUser = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [level, setLevel] = useState(0);
    const userInfo = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = () => {
        navigate("/game");
        dispatch({type: "LOGOUT"});
        setUser(null);

    };

    const convertPointsToLevel = (points) => {
        const calculatedLevel = Math.round(points / 100);
        setLevel(calculatedLevel);
    };

    useEffect(() => {
        if(localUser) dispatch(getPoints(localUser?.result?._id));
        setUser(JSON.parse(localStorage.getItem('profile')));
        convertPointsToLevel(user?.result?.points);
    }, [location, localUser?.result?.points, user?.result?.points])

    return (
        <AppBar className= {classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" color="secondary"><Home fontSize="large"/></Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                        <Typography variant="h4" className={classes.userName}>
                            Level: {level}
                        </Typography>
                        <Typography variant="h4" className={classes.userName}>
                            XP: {user.result.points}
                        </Typography>
                        <Typography className={classes.userName} variant="h4">
                            {user.result.name}
                        </Typography>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}></Avatar>
                        <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    
                </div>
            ): (
                <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
            )}
        </Toolbar>
        </AppBar>
    )
}

export default Navbar