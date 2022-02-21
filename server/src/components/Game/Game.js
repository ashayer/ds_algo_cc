import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Button } from '@material-ui/core/';
import Answers from './Answers/Answers';
import Question from './Question/Question';

const Game = () => {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState('');

    const createGame = () => {
        let randomIndex = Math.floor(Math.random() * 4);

        createRandomQuestion(randomIndex);
    };

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




    return (
        <Grid>
            <Button color="secondary" variant="contained" onClick = {createGame}>Generate Random Answers</Button>
            <Question answers={answers} question={question}/>
            <Answers answers={answers} createGame={createGame}/>
        </Grid>
    );

}

export default Game;