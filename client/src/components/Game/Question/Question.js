import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Button, Typography, Card} from '@material-ui/core/';


const Question = ({answers, question}) => {

    return (
        <Typography variant="h4">
            {question}
        </Typography>
        
    );

}

export default Question;