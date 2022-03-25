import React from "react";
import { Grid, ButtonBase, Typography } from "@mui/material/";
import useStyles from "./styles";
import "./answers.css";

const Answers = ({
  answers,
  startGame,
  questionType,
  questionTopicNum,
  questionStartTime,
  isHighestStreak,
}) => {
  const classes = useStyles();

  const calculatePoints = () => {
    const localUser = JSON.parse(sessionStorage.getItem("user"));

    // if streak over 3 then add 10 to (streak - 3) * 1.67
    let updatePointsBy = 0;
    if (localUser.streak > 3) {
      updatePointsBy = 10 + (localUser.streak - 3) * 1.67;
    } else {
      updatePointsBy = 10;
    }

    return Math.floor(updatePointsBy);
  };

  const correctAnswer = () => {
    const questionEndTime = new Date();
    const calculatedResponseTime = questionEndTime - questionStartTime;
    const updatePointsBy = calculatePoints();
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    localUser.points += updatePointsBy;
    localUser.numCorrect += 1;
    localUser.streak += 1;
    localUser.responseTime += calculatedResponseTime;
    localUser.qHistory.push({
      qType: questionType,
      qTopic: questionTopicNum,
      correct: 1,
      rTime: calculatedResponseTime,
    });
    sessionStorage.setItem("user", JSON.stringify(localUser));

    isHighestStreak();

    startGame();
  };

  const wrongAnswer = () => {
    const questionEndTime = new Date();

    const calculatedResponseTime = questionEndTime - questionStartTime;
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    localUser.numWrong += 1;
    localUser.streak = 0;
    localUser.responseTime += calculatedResponseTime;
    localUser.qHistory.push({
      qType: questionType,
      qTopic: questionTopicNum,
      correct: 0,
      rTime: calculatedResponseTime,
    });
    sessionStorage.setItem("user", JSON.stringify(localUser));

    startGame();
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
      <Grid item key={index}>
        <ButtonBase
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          style={{
            width: "35vw",
            height: "20.5vh",
          }}
          className={answer[0] ? classes.rightAnswer : classes.wrongAnswer}
        >
          <Typography variant={questionType < 3 ? "h1" : "h4"}>{answer[1]}</Typography>
        </ButtonBase>
      </Grid>
    ));
  };

  return (
    <Grid container align="center" justifyContent="center">
      {questionType === 0 ? (
        <AnswerBars />
      ) : questionType > 0 && questionType < 4 ? (
        <AnswerText />
      ) : null}
    </Grid>
  );
};

export default Answers;
