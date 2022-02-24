import React, { useState } from 'react';
import { Grid, Button, Container, Paper, Grow } from '@material-ui/core/';
import Answers from './Answers/Answers';
import Question from './Question/Question';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import insertionSortHandler from './insertionSort';
import {shuffle} from 'd3-array';
import './game.css';

const Game = () => {
    const timeLeft = 5;
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState('');
    const [content, setContent] = useState([]);
    const [gameStarted, setGameStarted] = useState(true);
    const [timer, setTimer] = React.useState(timeLeft);
    const classes = useStyles();


    const createGame = () => {
        setTimer(timeLeft);
        let randomIndex = Math.floor(Math.random() * 4);
        createRandomQuestion(randomIndex);
        //createSetQuestion(randomIndex);
        if(!gameStarted) setGameStarted(true);
    };
    const endGame = () => setGameStarted(false);
    const createRandomQuestion = (correctIndex) => {
        let answers = insertionSortHandler();
        let arrayString = answers.original.toString();
        let auxAnswers = [];
        let wrongIndex = 0;
        for (let i = 0; i < 4; i++)
        {   
            if(i===correctIndex) {

                auxAnswers[i] = ["Right", answers.right];
            }
            else{
                auxAnswers[i] = ["Wrong", answers.wrong[wrongIndex]];
                wrongIndex += 1;
            }
        }
        setContent(answers.original);
        setAnswers(auxAnswers);
        setQuestion("Using insertion sort, what is the state of the array after " + answers.swaps + " swaps.");

    };

    // const createSetQuestion = (correctIndex) =>{
    //     let auxAnswers = [];
    //     for (let i = 0; i < 4; i++)
    //     {
    //         if(i===correctIndex) {
    //             auxAnswers[i] = "Right";
    //         }
    //         else{
    //             auxAnswers[i] = "Wrong";
    //         }
    //     }
    //     let questionString = (correctIndex+1).toString();
    //     setContent(questionString)
    //     setQuestion("Click answer position matching number below");
    //     setAnswers(auxAnswers);
    // }
    const CountdownTimer = () => (
        <CountdownCircleTimer
          isPlaying
          duration={timer}
          colors={['#F7B801']}
          rotation="counterclockwise"
          size = {80}
          trailStrokeWidth="5"
          onComplete={createGame}
        >
          {({ remainingTime }) => remainingTime + "s"}
        </CountdownCircleTimer>
    )

    const ContentBars = () => {
        return (
            content.map((value, index) => (
                <Grid item key={index}>
                    <div className="contentArrayBars"  style={{height: (value*3) + "vh"}}>
                        <Typography variant="h4">{value}</Typography>
                    </div>
                </Grid>
            ))
        );
    }

    return (
        
            gameStarted ? 
            (
                <Grid container>
                    <Paper className={classes.paperQuestion}>
                        <Grid container justifyContent="space-around" alignItems="center">
                            <Grid item>
                                <Typography variant="h3">Streak</Typography>
                            </Grid>
                            <Grid item>
                                 <Question answers={answers} question={question}/>
                            </Grid>
                            <Grid item>
                                <CountdownTimer />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick = {endGame}>END GAME</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paperContent}>
                        <Container maxWidth="xl" className={classes.contentArrayContainer}>
                                <Grid container justifyContent='space-between' > 
                                    {(answers.length > 0) ? <ContentBars/> : null}
                                </Grid>
                        </Container>
                    </Paper>
                    <Paper className={classes.paperAnswers}>
                        <Answers answers={answers} createGame={createGame}/>
                    </Paper>
                </Grid>

            ):(
                <Button variant="contained" onClick = {createGame}>START GAME</Button>
            )
    

    );

}

export default Game;