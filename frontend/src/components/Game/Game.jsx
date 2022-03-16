import React, { useCallback, useEffect, useState } from "react";
import { Grid, Button, Container, Paper, Grow } from "@mui/material/";
import Answers from "./Answers/Answers";
import Question from "./Question/Question";
import { algorithmInfoArray } from "../../Algorithms/infoArray";
import UserStatsTable from "./UserStatsTable/UserStatsTable";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import questionHandler from "../../Algorithms/handler";
import Navbar from "../Navbar/Navbar";
import Content from "./Content/Content";
import "./game.css";
import useStyles from "./styles";
import { updatePoints } from "../../features/game/gameSlice";
import { useDispatch } from "react-redux";
//!to generate random psudeo code get character placement of start and end of each line

const Game = () => {
  const timeLeft = 15;

  let questionStartTime = new Date();

  let localUser = JSON.parse(sessionStorage.getItem("user"));

  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionType, setQuestionType] = useState(0);
  const [timer, setTimer] = useState(timeLeft);
  const [object, setObject] = useState({}); //! change name to something more descriptive
  const classes = useStyles();
  const dispatch = useDispatch();
  const startGame = () => {
    createRandomGame();
    if (!gameStarted) {
      localUser.numCorrect = 0;
      localUser.numWrong = 0;
      localUser.streak = 0;
      localUser.responseTime = 0;
      sessionStorage.setItem("user", JSON.stringify(localUser));
      setGameStarted(true);
    }
  };

  const startGameOnTimeEnd = () => {
    localUser.numWrong = localUser.numWrong + 1;
    localUser.streak = 0;
    sessionStorage.setItem("user", JSON.stringify(localUser));
    createRandomGame();
  };

  const endGame = () => {
    const totalQuestions = localUser.numCorrect + localUser.numWrong;
    const averageResponseTime = localUser.responseTime / totalQuestions;

    dispatch(
      updatePoints({
        userId: localUser._id,
        userPoints: localUser.points,
        userResponseTime: averageResponseTime,
      })
    );

    localUser.numCorrect = 0;
    localUser.numWrong = 0;
    localUser.streak = 0;
    sessionStorage.setItem("user", JSON.stringify(localUser));

    setGameStarted(false);
  };

  const createRandomGame = () => {
    let correctIndex = Math.floor(Math.random() * 4);
    let typeIndex = Math.floor(Math.random() * 4);
    // let topicIndex = Math.floor(Math.random() * 2); //! only insertion and selection sort currently
    // while (questionTopic === algorithmInfoArray[topicIndex].name) {
    //   topicIndex = Math.floor(Math.random() * 2); //! only insertion and selection sort currently
    // }
    let topicIndex = 0;
    //let typeIndex = 3;
    let gameObject = questionHandler(topicIndex, typeIndex);
    //console.log(gameObject);
    let answerOptions = [];
    let wrongIndex = 0;
    for (let i = 0; i < 4; i++) {
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

  const createQuestion = useCallback(() => {
    switch (questionType) {
      case 0:
        setTimer(timeLeft);
        setQuestion(
          "Using " +
            questionTopic +
            " sort, what is the state of the array after " +
            object?.swaps +
            " swaps."
        );
        setContent(object.original);
        break;
      case 1:
        setTimer(timeLeft);
        setQuestion("What is the time complexity of the algorithm below?");
        setContent([questionTopic]);
        break;
      case 2:
        setTimer(timeLeft);
        setQuestion("What is the space complexity of the algorithm below?");
        setContent([questionTopic]);
        break;
      case 3:
        setTimer(timeLeft);
        setQuestion(
          "Fill in the missing pseudo-code of " + questionTopic + " sort"
        );
        setContent(object.original);
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
      {({ remainingTime }) => remainingTime + "s"}
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
              <Question answers={answers} question={question} />
            </Grid>
            <Grid item style={{ border: "2px solid purple" }}>
              <CountdownTimer />
              <Button
                variant="contained"
                onClick={endGame}
                style={{ margin: "10px" }}
              >
                END GAME
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paperContent}>
          <Container maxWidth="xl" style={{ border: "2px solid red" }}>
            <Content
              content={content}
              questionType={questionType}
              questionTopic={questionTopic}
            />
          </Container>
        </Paper>
        <Paper className={classes.paperAnswers}>
          <Answers
            answers={answers}
            startGame={startGame}
            questionType={questionType}
            questionStartTime={questionStartTime}
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
