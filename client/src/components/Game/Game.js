import React, { useState } from 'react';
import { Grid, Button, Container } from '@material-ui/core/';
import Answers from './Answers/Answers';
import Question from './Question/Question';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import insertionSortHandler from './insertionSort';
import {shuffle} from 'd3-array';

const Game = () => {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState('');
    const [gameStarted, setGameStarted] = useState(true);
    const [timer, setTimer] = React.useState(1);
    const classes = useStyles();


    const createGame = () => {
        setTimer(1);
        let randomIndex = Math.floor(Math.random() * 4);
        //createRandomQuestion(randomIndex);
        createSetQuestion(randomIndex);
        if(!gameStarted) setGameStarted(true);
    };

    const endGame = () => setGameStarted(false);
    const createRandomQuestion = (correctIndex) => {
        let answers = insertionSortHandler();
        let arrayString = answers.original.toString();
        let auxAnswers = [];
        for (let i = 0; i < 4; i++)
        {   
            let wrongIndex = 0;
            if(i===correctIndex) {

                auxAnswers[i] = ["Right", answers.right];
            }
            else{
                auxAnswers[i] = ["Wrong", answers.wrong[wrongIndex]];
                wrongIndex += 1;
            }
        }
        console.log(auxAnswers);
        setAnswers(auxAnswers);
        setQuestion("Using insertion sort, what is the state of the array after " + answers.swaps + " iterations. [" + arrayString + "]");

    };

    const createSetQuestion = (correctIndex) =>{
        let auxAnswers = [];
        for (let i = 0; i < 4; i++)
        {
            if(i===correctIndex) {
                auxAnswers[i] = "Right";
            }
            else{
                auxAnswers[i] = "Wrong";
            }
        }
        setQuestion("Click answer " + (correctIndex + 1));
        setAnswers(auxAnswers);
    }

    const CountdownTimer = () => (
        <CountdownCircleTimer
          isPlaying
          duration={timer}
          colors={['#F7B801']}
          rotation="counterclockwise"
          size = {100}
          trailStrokeWidth="2"
          onComplete={createGame}
        >
          {({ remainingTime }) => remainingTime + "s"}
        </CountdownCircleTimer>
    )

    return (
        
    
            gameStarted ? 
            (
                <Container maxWidth="xs">
                    <CountdownTimer />
                    <Question answers={answers} question={question}/>
                        <Answers answers={answers} createGame={createGame}/>
                    <Button color="secondary" variant="contained" onClick = {endGame}>END GAME</Button>
                    
                </Container>
            ):(
                <Button color="secondary" variant="contained" onClick = {createGame}>START GAME</Button>
            )
    

    );

}

export default Game;