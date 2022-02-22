import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core/';
import Answers from './Answers/Answers';
import Question from './Question/Question';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import createRandomArray from './insertionSort';

const Game = () => {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = React.useState(5);

    createRandomArray();

    const createGame = () => {
        
        setTimer(5);
        let randomIndex = Math.floor(Math.random() * 4);
        createRandomQuestion(randomIndex);
        if(!gameStarted) setGameStarted(true);
    };

    const endGame = () => setGameStarted(false);
    const createRandomQuestion = (correctIndex) => {
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
    };


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
        
            <Grid>
                
            {
                
                gameStarted ? 
                (
                    <>
                        <CountdownTimer/>
                        <Question answers={answers} question={question}/>
                        <Answers answers={answers} createGame={createGame}/>
                        <Button color="secondary" variant="contained" onClick = {endGame}>END GAME</Button>
                    </>
                ):(
                    <Button color="secondary" variant="contained" onClick = {createGame}>START GAME</Button>
                )
            }


            </Grid>
        

    );

}

export default Game;