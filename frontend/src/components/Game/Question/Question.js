import React from 'react';


import { Typography} from '@mui/material/';


const Question = ({answers, question}) => {

    return (
        <Typography variant="h4">
            {question}
        </Typography>
        
    );

}

export default Question;