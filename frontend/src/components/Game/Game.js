import React, { useState, useEffect, useCallback, useRef } from "react";
import { Grid, Button, Container, Paper, Grow } from "@mui/material/";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast } from "react-toastify";
import axios from "axios";
import questionHandler from "../../Algorithms/handler";
import algorithmInfoArray from "../../Algorithms/infoArray";
import Navbar from "../Navbar/Navbar";
import Answers from "./Answers/Answers";
import Content from "./Content/Content";
import Question from "./Question/Question";
import UserStatsTable from "./UserStatsTable/UserStatsTable";

const API_URL = "/api/users/";

const updatePoints = async (
  userId,
  userPoints,
  userResponseTime,
  userNumCorrect,
  userNumWrong,
  userStreak,
) => {
  const response = await axios.patch(`${API_URL}user/${userId}`, {
    points: userPoints,
    responseTime: userResponseTime,
    streak: userStreak,
    numCorrect: userNumCorrect,
    numWrong: userNumWrong,
  });

  return response.data;
};

//! countdown timer causing memory leak
let highestStreak = 0;
const Game = () => {
  const timeLeft = 1;

  const questionStartTime = new Date();

  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionType, setQuestionType] = useState(0);
  const [timer, setTimer] = useState(timeLeft);
  const [object, setObject] = useState({}); // ! change name to something more descriptive
  // const [contentObject, setContentObject] = useState([{}]);
  const contentObject = useRef([{}]);

  const endGame = () => {
    const totalQuestions = localUser.numCorrect + localUser.numWrong;
    const averageResponseTime = Math.floor(localUser.responseTime / totalQuestions);

    updatePoints(
      localUser._id,
      localUser.points,
      averageResponseTime,
      localUser.numCorrect,
      localUser.numWrong,
      highestStreak,
    );
    setGameStarted(false);
  };

  const createQuestion = useCallback(() => {
    switch (questionType) {
      case 0:
        setTimer(30);
        setContent(object.original);
        if (questionTopic === "Quick") {
          setQuestion(
            `Using ${questionTopic} sort, what is the state of the array after ${object?.swaps} swaps using leftmost as pivot`,
          );
        } else {
          setQuestion(
            `Using ${questionTopic} sort, what is the state of the array after ${object?.swaps} swaps`,
          );
        }
        break;
      case 1:
        setTimer(15);
        setContent([questionTopic]);
        setQuestion("What is the time complexity of the algorithm below?");
        break;
      case 2:
        setTimer(15);
        setContent([questionTopic]);
        setQuestion("What is the space complexity of the algorithm below?");
        break;
      case 3:
        setTimer(20);
        setContent([object.original]);
        setQuestion(`Fill in the missing pseudo-code of ${questionTopic} sort`);
        break;
      case 4:
        setTimer(15);
        setContent(object.original);
        setQuestion(`What is the time complexity using ${questionTopic} sort to sort the array`);
        break;
      case 5:
        setTimer(25);
        // setContentObject(object.original);
        contentObject.current = object.original;
        setQuestion(`Move pseudo-code into correct order for ${questionTopic} sort`);
        break;
      case 6:
        setTimer(35);
        contentObject.current = object.original;

        if (questionTopic === "Quick") {
          setQuestion(`Using ${questionTopic} sort move the array 
            into the state after ${object?.swaps} swaps using left most as pivot`);
        } else {
          setQuestion(`Using ${questionTopic} sort move the array 
            into the state after ${object?.swaps} swaps`);
        }
        break;
      default:
        break;
    }
  }, [object.original, questionTopic, questionType]);

  const createRandomGame = () => {
    const correctIndex = Math.floor(Math.random() * 4);

    const topicIndex = Math.floor(Math.random() * 4);
    const typeIndex = Math.floor(Math.random() * 7);

    // const topicIndex = Math.floor(Math.random() * 4);
    // const typeIndex = 6;

    setQuestionTopic(algorithmInfoArray[topicIndex].name);
    const gameObject = questionHandler(topicIndex, typeIndex);
    const answerOptions = [];
    let wrongIndex = 0;
    for (let i = 0; i < 4; i += 1) {
      if (i === correctIndex) {
        answerOptions[i] = [true, gameObject.right];
      } else {
        answerOptions[i] = [false, gameObject.wrong[wrongIndex]];
        wrongIndex += 1;
      }
    }
    setQuestionType(typeIndex);
    setAnswers(answerOptions);
    setObject(gameObject);
  };

  const startGame = () => {
    createRandomGame();
    if (!gameStarted) {
      highestStreak = 0;
      localUser.numCorrect = 0;
      localUser.numWrong = 0;
      localUser.streak = 0;
      localUser.responseTime = 0;
      sessionStorage.setItem("user", JSON.stringify(localUser));
      setGameStarted(true);
    }
  };

  const isHighestStreak = () => {
    if (localUser.streak > highestStreak) {
      highestStreak = localUser.streak;
    }
  };

  const startGameOnTimeEnd = () => {
    const questionEndTime = new Date();
    toast.error("Ran out of time!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    const calculatedResponseTime = questionEndTime - questionStartTime;

    localUser.numWrong += 1;
    localUser.streak = 0;
    localUser.responseTime += calculatedResponseTime;
    sessionStorage.setItem("user", JSON.stringify(localUser));
    createRandomGame();
  };

  const CountdownTimer = () => (
    <CountdownCircleTimer
      isPlaying
      duration={timer}
      colors={["#fbae66"]}
      rotation="counterclockwise"
      size={80}
      trailStrokeWidth="5"
      onComplete={startGameOnTimeEnd}
    >
      {({ remainingTime }) => `${remainingTime}s`}
    </CountdownCircleTimer>
  );

  const checkLineOrder = () => {
    const arr = [];
    for (let i = 0; i < object.original.length; i += 1) {
      arr.push(contentObject.current[i].correctIdx);
    }

    // console.log(arr);
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    createQuestion();
  }, [createQuestion]);

  return gameStarted ? (
    <Grow in>
      <Grid container>
        <Paper sx={{ width: "100vw" }}>
          <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Grid item md={3} xs={10}>
              <UserStatsTable localUser={localUser} />
            </Grid>
            <Grid item md={7} xs={12} order={{ xs: 3, sm: 3, md: 2 }} sx={{ textAlign: "center" }}>
              <Question question={question} />
            </Grid>
            <Grid
              item
              md={2}
              xs={2}
              sx={{
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: "15px",
              }}
              order={{ xs: 2, sm: 2, md: 3 }}
            >
              <CountdownTimer />
              <Button
                variant="contained"
                sx={{
                  marginTop: "15px",
                }}
                onClick={endGame}
              >
                END GAME
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            width: "100vw",
            margin: "10px 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Container>
            <Content
              content={content}
              contentObject={contentObject}
              questionType={questionType}
              questionTopic={questionTopic}
              object={object}
            />
          </Container>
        </Paper>

        <Paper sx={{ width: "100vw" }}>
          <Answers
            answers={answers}
            startGame={startGame}
            questionType={questionType}
            questionStartTime={questionStartTime}
            isHighestStreak={isHighestStreak}
            checkLineOrder={checkLineOrder}
          />
        </Paper>
      </Grid>
    </Grow>
  ) : (
    <>
      <Navbar page="Game" />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          alignContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={startGame}
          sx={{
            "&:hover": { backgroundColor: "#358a04" },
            borderRadius: 0,
            transition: "all 0.2s ease",
          }}
        >
          START GAME
        </Button>
      </Container>
    </>
  );
};

export default Game;