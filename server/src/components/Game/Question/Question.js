import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Button, Typography, Card} from '@material-ui/core/';


const Question = ({answers, question}) => {

    return (
        <Grid>
            <Typography variant="h2">
                {question}
            </Typography>
        </Grid>
    );

}

export default Question;