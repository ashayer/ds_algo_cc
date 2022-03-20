import React from "react";
import { Grid, ButtonBase, Typography } from "@mui/material/";
import useStyles from "./styles";
import "./answers.css";

const Answers = ({ answers, startGame, questionType, questionTopicNum, questionStartTime }) => {
  const classes = useStyles();

  const correctAnswer = () => {
    const questionEndTime = new Date();
    const calculatedResponseTime = questionEndTime - questionStartTime;
    const updatePointsBy = Math.floor(Math.random() * 100);
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    localUser.points += updatePointsBy;
    localUser.numCorrect += 1;
    localUser.streak += 1;
    localUser.responseTime += calculatedResponseTime;
    localUser.qTopicCount[questionTopicNum] += 1;
    localUser.qTypeCount[questionType] += 1;
    sessionStorage.setItem("user", JSON.stringify(localUser));

    startGame();
  };

  const wrongAnswer = () => {
    const questionEndTime = new Date();

    const calculatedResponseTime = questionEndTime - questionStartTime;
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    localUser.numWrong += 1;
    localUser.streak = 0;
    localUser.responseTime += calculatedResponseTime;
    localUser.qTopicCount[questionTopicNum] += 1;
    localUser.qTypeCount[questionType] += 1;
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
            {answer[1].map((value, indexA) => (
              <Grid item key={indexA}>
                <div className="answerArrayBars" style={{ height: `${value * 2.5}vh` }}>
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
