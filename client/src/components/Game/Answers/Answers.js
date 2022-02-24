import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updatePoints} from '../../../actions/userActions';
import { Grid, Button, ButtonBase, Container } from '@material-ui/core/';
import {Typography} from '@material-ui/core';
import useStyles from './styles';
import './answers.css'
//create aux array in game component? then pass into here as prop?
const Answers = ({answers, createGame}) => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userReducer);
    const [newPoints, setNewPoints] = useState(userInfo.points);
    const classes = useStyles();


    const correctAnswer = () => {
        let randomPoints = Math.floor(Math.random() * 100);
        const updatePointsBy = randomPoints;
        const tempPoints = userInfo.points + updatePointsBy;
        let user = JSON.parse(localStorage.getItem('profile'));
        user.result.points = tempPoints;

        localStorage.setItem('profile',JSON.stringify(user));
        setNewPoints(tempPoints);
        createGame();
    };

    
    const wrongAnswer = () => {
   
    };


    useEffect(() => {

        dispatch(updatePoints(userInfo._id, {points: newPoints}));
        
    }, [newPoints, dispatch, userInfo._id]);



    return (
            <Grid container align="center" justifyContent="center" direction="row" spacing={2} className={classes.answerGrid}>
                {
                    answers.map((answer, index) => (
                        <Grid item key={index}> 
                            <ButtonBase 
                                onClick={`${answer[0]}` === "Right" ? correctAnswer : wrongAnswer}
                                style={{
                                    width: 750,
                                    height: 195
                                }}
                                className={`${answer[0]}` === "Right" ? classes.rightAnswer : classes.wrongAnswer}
                            >

                                <Grid container justifyContent='space-evenly' margin="0px"> 
                                {
                                answer[1].map((value, index) => (
                                        <Grid item key={index}>
                                            <div className="answerArrayBars" style={{height: (value*2.5) + "vh"}}>
                                                <Typography variant="h5">{value}</Typography>
                                            </div>
                                        </Grid>
                                    ))
                                }
                                </Grid>
                            </ButtonBase>

                        </Grid>

                        

                    ))
                }
            </Grid>

    );

}

export default Answers;