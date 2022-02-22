import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updatePoints} from '../../../actions/userActions';
import { Grid, Button} from '@material-ui/core/';
import {Typography} from '@material-ui/core';

//create aux array in game component? then pass into here as prop?
const Answers = ({answers, createGame}) => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userReducer);
    const [newPoints, setNewPoints] = useState(userInfo.points);


    const correctAnswer = () => {
        let randomPoints = Math.floor(Math.random() * 500);
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
        
    }, [newPoints, dispatch, userInfo._id])

    return (
            <Grid>
                <Typography variant="h4"></Typography>
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