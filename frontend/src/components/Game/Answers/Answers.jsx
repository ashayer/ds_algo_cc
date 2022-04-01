import React from "react";
import { Grid, ButtonBase, Typography, Button } from "@mui/material/";
import { toast } from "react-toastify";
import "./answers.css";

const Answers = ({
  answers,
  startGame,
  questionType,
  questionTopicNum,
  questionStartTime,
  isHighestStreak,
  checkLineOrder,
}) => {
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
    toast.success("Correct!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
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
    toast.error("Incorrect!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
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
      <Grid item key={index} xs={12} md={6}>
        <ButtonBase
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          sx={
            answer[0]
              ? {
                  backgroundColor: "green",
                  color: "white",
                  width: "35vw",
                  height: "20.5vh",
                }
              : {
                  backgroundColor: "red",
                  color: "white",
                  width: "35vw",
                  height: "20.5vh",
                }
          }
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
      <Grid item key={index} xs={12} md={6}>
        <ButtonBase onClick={answer[0] ? correctAnswer : wrongAnswer}>
          <Typography variant={questionType < 3 ? "h1" : "h4"}>{answer[1]}</Typography>
        </ButtonBase>
      </Grid>
    ));
  };

  const isInOrder = () => {
    const isOrdered = checkLineOrder();
    if (isOrdered) {
      correctAnswer();
    } else if (!isOrdered) {
      toast.error("Try again!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };
  const AnswerDragCode = () => {
    return (
      <Grid item>
        <Button variant="contained" onClick={isInOrder}>
          Check
        </Button>
      </Grid>
    );
  };

  return (
    <Grid
      container
      align="center"
      justifyContent="center"
      alignContent="center"
      spacing={3}
      maxWidth="xl"
    >
      {questionType === 0 ? (
        <AnswerBars />
      ) : questionType > 0 && questionType < 4 ? (
        <AnswerText />
      ) : questionType === 4 ? (
        <AnswerText />
      ) : questionType === 5 ? (
        <AnswerDragCode />
      ) : null}
    </Grid>
  );
};

export default Answers;
