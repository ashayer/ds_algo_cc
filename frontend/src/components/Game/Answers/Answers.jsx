import React from "react";
import { Grid, ButtonBase } from "@mui/material/";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import "./answers.css";

const Answers = ({ answers, startGame, questionType, questionTopicNum, questionStartTime }) => {
  const classes = useStyles();

  const correctAnswer = () => {
    let questionEndTime = new Date();

    let calculatedResponseTime = questionEndTime - questionStartTime;

    const updatePointsBy = Math.floor(Math.random() * 100);
    let localUser = JSON.parse(sessionStorage.getItem("user"));
    localUser.points = localUser.points + updatePointsBy;
    localUser.numCorrect = localUser.numCorrect + 1;
    localUser.streak = localUser.streak + 1;
    localUser.responseTime = localUser.responseTime + calculatedResponseTime;
    sessionStorage.setItem("user", JSON.stringify(localUser));

    startGame();
  };

  const wrongAnswer = () => {
    let questionEndTime = new Date();

    let calculatedResponseTime = questionEndTime - questionStartTime;
    let localUser = JSON.parse(sessionStorage.getItem("user"));
    localUser.numWrong = localUser.numWrong + 1;
    localUser.streak = 0;
    localUser.responseTime = localUser.responseTime + calculatedResponseTime;

    sessionStorage.setItem("user", JSON.stringify(localUser));

    startGame();
  };

  const AnswerBars = () => {
    return answers.map((answer, index) => (
      <Grid item key={index} style={{ border: "1px solid black" }}>
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
                <div className="answerArrayBars" style={{ height: value * 2.5 + "vh" }}>
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
      <Grid item key={index} style={{ border: "1px solid black" }}>
        <ButtonBase
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          style={{
            width: "35vw",
            height: "20.5vh",
            border: "5px solid orange",
          }}
          className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}
        >
          <Typography variant={questionType < 3 ? "h1" : "h4"}>{answer[1]}</Typography>
        </ButtonBase>
      </Grid>
    ));
  };

  return (
    <Grid container align="center" justifyContent="center" style={{ border: "3px solid red" }}>
      {questionType === 0 ? (
        <AnswerBars />
      ) : questionType > 0 && questionType < 4 ? (
        <AnswerText />
      ) : null}
    </Grid>
  );
};

export default Answers;
