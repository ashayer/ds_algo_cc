import React from 'react';


import { Typography} from '@material-ui/core/';


const Question = ({answers, question}) => {

    return (
        <Typography variant="h4">
            {question}
        </Typography>
        
    );

}

export default Question;