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
  const timeLeft = 10;

  let questionStartTime = new Date();

  let localUser = JSON.parse(sessionStorage.getItem("user"));

  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionType, setQuestionType] = useState(0);
  const [timer, setTimer] = useState(timeLeft);
  const [object, setObject] = useState({}); //! change name
  const classes = useStyles();
  const dispatch = useDispatch();
  const createGame = () => {
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

  const createGameOnTimeEnd = () => {
    localUser.numWrong = localUser.numWrong + 1;
    localUser.streak = 0;
    sessionStorage.setItem("user", JSON.stringify(localUser));
    createRandomGame();
  };

  const endGame = () => {
    //!send points to server from sessionStorage
    localUser.numCorrect = 0;
    localUser.numWrong = 0;
    localUser.streak = 0;
    sessionStorage.setItem("user", JSON.stringify(localUser));

    dispatch(
      updatePoints({
        userId: localUser._id,
        userPoints: localUser.points,
        userResponseTime: localUser.responseTime,
      })
    );

    setGameStarted(false);
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
        setQuestion("Fill in the missing pseudo-code of the algorithm below");
        setContent([questionTopic]);
        break;
      default:
        console.log("Something went wrong");
    }
  }, [object.original, object?.swaps, questionTopic, questionType]);

  const createRandomGame = () => {
    let correctIndex = Math.floor(Math.random() * 4);
    let topicIndex = Math.floor(Math.random() * 2); //! only insertion and selection sort currently
    let typeIndex = Math.floor(Math.random() * 4);

    let gameObject = questionHandler(topicIndex, typeIndex);

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
      onComplete={createGameOnTimeEnd}
    >
      {({ remainingTime }) => remainingTime + "s"}
    </CountdownCircleTimer>
  );

  return gameStarted ? (
    <Grow in>
      <Grid container>
        <Paper className={classes.paperQuestion}>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <UserStatsTable localUser={localUser} />
            </Grid>
            <Grid item>
              <Question answers={answers} question={question} />
            </Grid>
            <Grid item>
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
          <Container maxWidth="xl">
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
            createGame={createGame}
            questionType={questionType}
            questionStartTime={questionStartTime}
          />
        </Paper>
      </Grid>
    </Grow>
  ) : (
    <>
      <Navbar />
      <Button variant="contained" onClick={createGame}>
        START GAME
      </Button>
    </>
  );
};

export default Game;
