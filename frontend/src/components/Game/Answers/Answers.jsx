import React from "react";
import { Grid, ButtonBase, Typography, Button, Box } from "@mui/material/";
import { toast } from "react-toastify";

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
      position: "bottom-right",
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
      position: "bottom-right",
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
      <Grid item key={index} sx={{ margin: "1vh" }}>
        <ButtonBase
          focusRipple
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          sx={{
            width: "35vw",
            height: "20vh",
          }}
        >
          <Grid
            container
            sx={{
              border: "1px solid black",

              justifyContent: "space-evenly",
              "&:hover": {
                backgroundColor: "#fa382a",
              },
              transition: "all 0.2s ease",
            }}
          >
            {answer[1].map((value, indexA) => (
              <Grid item key={indexA} sx={{ height: "20vh", width: "4vw" }}>
                <Box
                  sx={{
                    height: `${value * 2.25}vh`,
                    backgroundColor: "#a1caff",
                    color: "black",
                    position: "absolute",
                    bottom: "0",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                >
                  <Typography variant="h4" sx={{ width: "4vw" }}>{`${value}`}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ButtonBase>
      </Grid>
    ));
  };

  const AnswerText = () => {
    return answers.map((answer, index) => (
      <Grid
        item
        key={index}
        xs={12}
        md={5}
        sx={{
          textAlign: "center",
          margin: "1vw",
          border: "1px solid black",
          "&:hover": {
            backgroundColor: "#fa382a",
          },
          transition: "all 0.2s ease",
        }}
      >
        <ButtonBase
          onClick={answer[0] ? correctAnswer : wrongAnswer}
          sx={{
            width: "40vw",
            height: "15vh",
          }}
        >
          <Typography variant={questionType < 3 || questionType === 4 ? "h1" : "h4"}>
            {answer[1]}
          </Typography>
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
        position: "bottom-right",
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
        <Button
          variant="contained"
          sx={{ padding: "1vh", "&:hover": { backgroundColor: "#22ba48" }, margin: "2vw" }}
          onClick={isInOrder}
        >
          <Typography variant="h5">Check Line Order</Typography>
        </Button>
      </Grid>
    );
  };

  const AnswerDragSwap = () => {
    return (
      <Grid item>
        <Button
          variant="contained"
          sx={{ padding: "1vh", "&:hover": { backgroundColor: "#22ba48" }, margin: "2vw" }}
          onClick={isInOrder}
        >
          <Typography variant="h5">Check Array Order</Typography>
        </Button>
      </Grid>
    );
  };

  return (
    <Grid container sx={{ align: "center", justifyContent: "center", alignContent: "center" }}>
      {questionType === 0 ? (
        <AnswerBars />
      ) : questionType > 0 && questionType < 4 ? (
        <AnswerText />
      ) : questionType === 4 ? (
        <AnswerText />
      ) : questionType === 5 ? (
        <AnswerDragCode />
      ) : questionType === 6 ? (
        <AnswerDragSwap />
      ) : null}
    </Grid>
  );
};

export default Answers;
