import React, { useState, useEffect, useCallback } from "react";
import { Grid, Button, Container, Paper, Grow, Slide } from "@mui/material/";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import questionHandler from "../../Algorithms/handler";
import algorithmInfoArray from "../../Algorithms/infoArray";
import { updatePoints } from "../../features/game/gameSlice";
import Navbar from "../Navbar/Navbar";
import Answers from "./Answers/Answers";
import Content from "./Content/Content";
import Question from "./Question/Question";
import UserStatsTable from "./UserStatsTable/UserStatsTable";
import "./game.css";
import useStyles from "./styles";

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
  const [questionTopicNum, setQuestionTopicNum] = useState(0);
  const [timer, setTimer] = useState(timeLeft);
  const [object, setObject] = useState({}); // ! change name to something more descriptive
  const [contentObject, setContentObject] = useState([{}]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const endGame = () => {
    const totalQuestions = localUser.numCorrect + localUser.numWrong;
    const averageResponseTime = Math.floor(localUser.responseTime / totalQuestions);
    dispatch(
      updatePoints({
        userId: localUser._id,
        userPoints: localUser.points,
        userResponseTime: averageResponseTime,
        userNumCorrect: localUser.numCorrect,
        userNumWrong: localUser.numWrong,
        userStreak: highestStreak,
        userHistory: localUser.qHistory,
      }),
    );
    setGameStarted(false);
  };

  const createQuestion = useCallback(() => {
    switch (questionType) {
      case 0:
        setTimer(10);
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
        setTimer(10);
        setContent([questionTopic]);
        setQuestion("What is the time complexity of the algorithm below?");
        break;
      case 2:
        setTimer(10);
        setContent([questionTopic]);
        setQuestion("What is the space complexity of the algorithm below?");
        break;
      case 3:
        setTimer(10);
        setContent([object.original]);
        setQuestion(`Fill in the missing pseudo-code of ${questionTopic} sort`);
        break;
      case 4:
        setTimer(10);
        setContent(object.original);
        setQuestion(`What is the time complexity using ${questionTopic} to sort the array`);
        break;
      case 5:
        setTimer(10);
        setContentObject(object.original);
        setQuestion(`Move pseudo-code into correct order for ${questionTopic} sort`);
        break;
      default:
        break;
    }
  }, [object.original, questionTopic, questionType]);

  const createRandomGame = () => {
    const correctIndex = Math.floor(Math.random() * 4);
    // let typeIndex = Math.floor(Math.random() * 5);
    // let topicIndex = Math.floor(Math.random() * 0);
    // while (questionTopic === algorithmInfoArray[topicIndex].name) {
    //   topicIndex = Math.floor(Math.random() * 4);
    // }
    // while (typeIndex === questionType) {
    //   typeIndex = Math.floor(Math.random() * 6);
    // }

    let typeIndex = 5;
    const topicIndex = 0;

    if (questionType === 5) {
      typeIndex = 4;
    } else {
      typeIndex = 5;
    }
    setQuestionTopicNum(topicIndex);
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

    setQuestionTopic(algorithmInfoArray[topicIndex].name);
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
      localUser.qHistory = [];
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
      position: "top-center",
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
    localUser.qHistory.push({
      qType: questionType,
      qTopic: questionTopicNum,
      correct: 0,
      rTime: calculatedResponseTime,
    });
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
      arr.push(contentObject[i].correctIdx);
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
        <Paper className={classes.paperQuestion}>
          <Grid container className={classes.topRow}>
            <Grid item>
              <UserStatsTable localUser={localUser} />
            </Grid>
            <Grid item>
              <Question question={question} />
            </Grid>
            <Grid item>
              <CountdownTimer />
              <Button variant="contained" onClick={endGame} style={{ margin: "10px" }}>
                END GAME
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paperContent}>
          <Container>
            <Content
              content={content}
              contentObject={contentObject}
              setContentObject={setContentObject}
              questionType={questionType}
              questionTopic={questionTopic}
            />
          </Container>
        </Paper>

        <Paper>
          <Answers
            answers={answers}
            startGame={startGame}
            questionType={questionType}
            questionStartTime={questionStartTime}
            questionTopicNum={questionTopicNum}
            isHighestStreak={isHighestStreak}
            checkLineOrder={checkLineOrder}
          />
        </Paper>
      </Grid>
    </Grow>
  ) : (
    <Slide in>
      <Container maxWidth="xl">
        <Navbar />
        <Button variant="contained" onClick={startGame} className={classes.startButton}>
          START GAME
        </Button>
      </Container>
    </Slide>
  );
};

export default Game;
