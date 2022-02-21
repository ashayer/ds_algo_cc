import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Button } from '@material-ui/core/';

//create aux array in game component? then pass into here as prop?
const Answers = ({answers, createGame}) => {


   const correctAnswer = () => {
    console.log("clicked right answer");
    createGame();
   };

   const wrongAnswer = () => {
    console.log("clicked wrong answer");
   };

    return (
        <Grid>
            {
                answers.map((answer, index) => (
                    <Button key={index} 
                    variant="contained" 
                    color={`${answer}` === "Right" ? "primary" : "secondary"}
                    onClick={`${answer}` === "Right" ? correctAnswer : wrongAnswer}
                    >
                        {answer}
                    </Button>

                ))
            }
        </Grid>
    );

}

export default Answers;