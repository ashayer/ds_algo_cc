import React from "react";
import { Grid, ButtonBase } from "@mui/material/";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import "./answers.css";

const Answers = ({ answers, createGame, questionType}) => {
  const classes = useStyles();

  
  const correctAnswer = () => {
    const updatePointsBy = Math.floor(Math.random() * 100);
    let localUser = JSON.parse(sessionStorage.getItem('user'));
    localUser.points = localUser.points + updatePointsBy;
    localUser.numCorrect = localUser.numCorrect + 1;
    localUser.streak = localUser.streak + 1;
    sessionStorage.setItem('user',JSON.stringify(localUser));
    createGame();
    
  };

  const wrongAnswer = () => {
    let localUser = JSON.parse(sessionStorage.getItem('user'));
    localUser.numWrong = localUser.numWrong + 1;
    localUser.streak = 0;
    sessionStorage.setItem('user',JSON.stringify(localUser));
    createGame();
  };

  const AnswerBars = () => {
    return answers.map((answer, index) => (
      <Grid item key={index}>
        <ButtonBase
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          style={{
            width: "35vw",
            height: "20.5vh",
          }}
          className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}
        >
          <Grid container justifyContent="space-evenly" margin="0px">
            {answer[1].map((value, index) => (
              <Grid item key={index}>
                <div
                  className="answerArrayBars"
                  style={{ height: value * 2.5 + "vh" }}
                >
                  <Typography variant="h5">{value}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </ButtonBase>
      </Grid>
    ));
  };

  const AnswerText = () => {
    return answers.map((answer, index) => (
      <Grid item key={index}>
        <ButtonBase
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          style={{
            width: "35vw",
            height: "20.5vh",
          }}
          className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}
        >
          <Typography variant="h1">{answer[1]}</Typography>
        </ButtonBase>
      </Grid>
    ));
  };

  return (
    <Grid
      container
      align="center"
      justifyContent="center"
    >
      {questionType === 0 ? (
        <AnswerBars />
      ) : (questionType > 0 && questionType < 4) ? (
        <AnswerText />
      ) : null}
    </Grid>
  );
};

export default Answers;
