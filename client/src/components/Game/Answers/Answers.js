import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updatePoints} from '../../../actions/userActions';
import { Grid, Button, ButtonBase, Container } from '@material-ui/core/';
import {Typography} from '@material-ui/core';
import useStyles from './styles';
import './answers.css'
//create aux array in game component? then pass into here as prop?
const Answers = ({answers, createGame, questionType}) => {
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
        createGame();
    };


    useEffect(() => {

        dispatch(updatePoints(userInfo._id, {points: newPoints}));
        
    }, [newPoints, dispatch, userInfo._id]);


    const AnswerBars = () => {
        return (
            answers.map((answer, index) => (
                <Grid item key={index}> 
                    <ButtonBase 
                        onClick={answer[0] ? correctAnswer : wrongAnswer}
                        style={{
                            width: "70vh",
                            height: "20.5vh"
                        }}
                        className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}>
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
        )
    };



    const AnswerTime = () => {
        return (
            answers.map((answer, index) => (
                <Grid item key={index}> 
                    <ButtonBase 
                        onClick={answer[0] ? correctAnswer : wrongAnswer}
                        style={{
                            width: "80vh",
                            height: "20.5vh"
                        }}
                        className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}>
                    <Typography variant="h1">{answer[1]}</Typography>
                    </ButtonBase>
                </Grid>
            ))

        )
    }

    const AnswerSpace = () => {
        return (
            answers.map((answer, index) => (
                <Grid item key={index}> 
                    <ButtonBase 
                        onClick={answer[0] ? correctAnswer : wrongAnswer}
                        style={{
                            width: "80vh",
                            height: "20.5vh"
                        }}
                        className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}>
                    <Typography variant="h1">{answer[1]}</Typography>
                    </ButtonBase>
                </Grid>
            ))

        )
    }

    const AnswerCode = () => {
        return (
            answers.map((answer, index) => (
                <Grid item key={index}> 
                    <ButtonBase 
                        onClick={answer[0] ? correctAnswer : wrongAnswer}
                        style={{
                            width: "80vh",
                            height: "20.5vh"
                        }}
                        className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}>
                    <Typography variant="h1">{answer[1]}</Typography>
                    </ButtonBase>
                </Grid>
            ))

        )
    }


    return (
            <Grid container align="center" justifyContent="center" direction="row" spacing={2} className={classes.answerGrid}>
                    {(questionType === 0) ? <AnswerBars/>: 
                        (questionType === 1) ? <AnswerTime/>:
                        (questionType === 2) ? <AnswerSpace/> :
                        (questionType === 3) ? <AnswerCode/> : null
                    } 
            </Grid>

    );

}

export default Answers;