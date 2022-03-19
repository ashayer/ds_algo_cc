import { Grid, Button, Container, Paper, Grow } from "@mui/material/";
import { useCallback, useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch } from "react-redux";
import questionHandler from "../../Algorithms/handler";
import { algorithmInfoArray } from "../../Algorithms/infoArray";
import { updatePoints } from "../../features/game/gameSlice";
import Navbar from "../Navbar/Navbar";
import Answers from "./Answers/Answers";
import Content from "./Content/Content";
import Question from "./Question/Question";
import useStyles from "./styles";
import UserStatsTable from "./UserStatsTable/UserStatsTable";
import "./game.css";




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
    localUser.numWrong += 1;
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
    const correctIndex = Math.floor(Math.random() * 4);
    let typeIndex = Math.floor(Math.random() * 4);
    let topicIndex = Math.floor(Math.random() * 4); 
    while (questionTopic === algorithmInfoArray[topicIndex].name) {
      topicIndex = Math.floor(Math.random() * 4);
    }
    while(typeIndex === questionType){
      typeIndex = Math.floor(Math.random() * 4);
    }
    const gameObject = questionHandler(topicIndex, typeIndex);
    //console.log(gameObject);
    const answerOptions = [];
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
        setContent(object.original);
        setTimer(timeLeft);
        setQuestion(
          `Using ${questionTopic} sort, what is the state of the array after ${object?.swaps} swaps`
        );
        break;
      case 1:
        setContent([questionTopic]);
        setTimer(timeLeft);
        setQuestion("What is the time complexity of the algorithm below?");
        break;
      case 2:
        setContent([questionTopic]);
        setTimer(timeLeft);
        setQuestion("What is the space complexity of the algorithm below?");
        break;
      case 3:
        setContent([object.original]);
        setTimer(timeLeft);
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
      isPlaying={true}
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
    <Grow in={true}>
      <Grid container={true}>
        <Paper className={classes.paperQuestion}>
          <Grid container={true} className={classes.topRow}>
            <Grid item={true} style={{ border: "2px solid purple" }}>
              <UserStatsTable localUser={localUser} />
            </Grid>
            <Grid item={true} style={{ border: "2px solid purple" }}>
              <Question answers={answers} question={question} />
            </Grid>
            <Grid item={true} style={{ border: "2px solid purple" }}>
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
