import React, { useCallback, useEffect, useState } from "react";
import { Grid, Button, Container, Paper, Grow } from "@mui/material/";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch } from "react-redux";
import questionHandler from "../../Algorithms/handler";
import algorithmInfoArray from "../../Algorithms/infoArray";
import { updatePoints } from "../../features/game/gameSlice";
import Navbar from "../Navbar/Navbar";
import Answers from "./Answers/Answers";
import Content from "./Content/Content";
import Question from "./Question/Question";
import useStyles from "./styles";
import UserStatsTable from "./UserStatsTable/UserStatsTable";
import "./game.css";

let highestStreak = 0;
const Game = () => {
  const timeLeft = 15;

  const questionStartTime = new Date();

  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionType, setQuestionType] = useState(0);
  const [questionTopicNum, setQuestionTopicNum] = useState(0);
  const [timer, setTimer] = useState(timeLeft);
  const [object, setObject] = useState({}); // ! change name to something more descriptive
  const classes = useStyles();
  const dispatch = useDispatch();
  const createRandomGame = () => {
    const correctIndex = Math.floor(Math.random() * 4);
    let typeIndex = Math.floor(Math.random() * 4);
    let topicIndex = Math.floor(Math.random() * 4);
    while (questionTopic === algorithmInfoArray[0][topicIndex].name) {
      topicIndex = Math.floor(Math.random() * 4);
    }
    while (typeIndex === questionType) {
      typeIndex = Math.floor(Math.random() * 4);
    }
    setQuestionTopicNum(topicIndex);
    const gameObject = questionHandler(topicIndex, typeIndex);
    // console.log(gameObject);
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
    setQuestionTopic(algorithmInfoArray[0][topicIndex].name);
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
      localUser.qTopicCount = [0, 0, 0, 0];
      localUser.qTypeCount = [0, 0, 0, 0];
      sessionStorage.setItem("user", JSON.stringify(localUser));
      setGameStarted(true);
    }
  };

  const isHighestStreak = () => {
    if (localUser.streak > highestStreak) {
      highestStreak = localUser.streak;
    }
    console.log(highestStreak, localUser.streak);
  };

  const startGameOnTimeEnd = () => {
    localUser.numWrong += 1;
    localUser.streak = 0;
    localUser.qTopicCount[questionTopicNum] += 1;
    localUser.qTypeCount[questionType] += 1;
    sessionStorage.setItem("user", JSON.stringify(localUser));
    createRandomGame();
  };

  const endGame = () => {
    const totalQuestions = localUser.numCorrect + localUser.numWrong;
    const averageResponseTime = Math.floor(localUser.responseTime / totalQuestions);
    //! could change to just pass the local user
    console.log(highestStreak);
    dispatch(
      updatePoints({
        userId: localUser._id,
        userPoints: localUser.points,
        userResponseTime: averageResponseTime,
        userNumCorrect: localUser.numCorrect,
        userNumWrong: localUser.numWrong,
        userQTopicCount: localUser.qTopicCount,
        userQTypeCount: localUser.qTypeCount,
        userStreak: highestStreak + 1, //! need to add one for some reason
      }),
    );
    setGameStarted(false);
  };

  const createQuestion = useCallback(() => {
    switch (questionType) {
      case 0:
        setContent(object.original);
        setQuestion(
          `Using ${questionTopic} sort, what is the state of the array after ${object?.swaps} swaps`,
        );
        break;
      case 1:
        setContent([questionTopic]);
        setQuestion("What is the time complexity of the algorithm below?");
        break;
      case 2:
        setTimer(timeLeft);
        setContent([questionTopic]);
        setQuestion("What is the space complexity of the algorithm below?");
        break;
      case 3:
        setTimer(timeLeft);
        setContent([object.original]);
        setQuestion(`Fill in the missing pseudo-code of ${questionTopic} sort`);
        break;
      default:
        console.log("Something went wrong");
    }
  }, [object.original, object?.swaps, questionTopic, questionType]);

  useEffect(() => {
    createQuestion();
  }, [createQuestion]);

  const CountdownTimer = () => (
    <CountdownCircleTimer
      isPlaying
      duration={timer}
      colors={["#F7B801"]}
      rotation="counterclockwise"
      size={80}
      trailStrokeWidth="5"
      onComplete={startGameOnTimeEnd}
    >
      {({ remainingTime }) => `${remainingTime}s`}
    </CountdownCircleTimer>
  );

  return gameStarted ? (
    <Grow in>
      <Grid container>
        <Paper className={classes.paperQuestion}>
          <Grid container className={classes.topRow}>
            <Grid item style={{ border: "2px solid purple" }}>
              <UserStatsTable localUser={localUser} />
            </Grid>
            <Grid item style={{ border: "2px solid purple" }}>
              <Question question={question} />
            </Grid>
            <Grid item style={{ border: "2px solid purple" }}>
              <CountdownTimer />
              <Button variant="contained" onClick={endGame} style={{ margin: "10px" }}>
                END GAME
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paperContent}>
          <Container maxWidth="xl" style={{ border: "2px solid red" }}>
            <Content content={content} questionType={questionType} questionTopic={questionTopic} />
          </Container>
        </Paper>
        <Paper className={classes.paperAnswers}>
          <Answers
            answers={answers}
            startGame={startGame}
            questionType={questionType}
            questionStartTime={questionStartTime}
            questionTopicNum={questionTopicNum}
            isHighestStreak={isHighestStreak}
          />
        </Paper>
      </Grid>
    </Grow>
  ) : (
    <>
      <Navbar />
      <Button variant="contained" onClick={startGame}>
        START GAME
      </Button>
    </>
  );
};

export default Game;
