import React, { useCallback, useEffect, useState } from "react";
import { Grid, Button, Container, Paper, Grow } from "@mui/material/";
import Answers from "./Answers/Answers";
import Question from "./Question/Question";
import useStyles from "./styles";
import { Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import questionHandler from "./Algorithms/handler";
import Navbar from "../Navbar/Navbar";
import "./game.css";

const algorithmInfoArray = [
  {
    name: "Insertion",
    timeBest: "n",
    timeWorst: "n\u00B2",
    space: "1",
  },
  {
    name: "Selection",
    timeBest: "n\u00B2",
    timeWorst: "n\u00B2",
    space: "1",
  },
  {
    name: "Merge",
    timeBest: "nlogn",
    timeWorst: "nlogn",
    space: "n",
  },
  {
    name: "Quick",
    timeBest: "nlogn",
    timeWorst: "n\u00B2",
    space: "logn",
  },
];


const Game = () => {
  //! useRef instead of state 
  const timeLeft = 15;
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionType, setQuestionType] = useState(0);
  const [timer, setTimer] = React.useState(timeLeft);
  const [object, setObject] = useState({});
  

  const classes = useStyles();
  const createGame = () => {
    createRandomGame();
    if (!gameStarted) setGameStarted(true);
  };
  const endGame = () => setGameStarted(false);
  //!to generate random psudeo code get character placement of start and end of each line

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
        setTimer(9);
        setQuestion("What is the time complexity of the algorithm below?");
        setContent([questionTopic]);
        break;
      case 2:
        setTimer(9);
        setQuestion("What is the space complexity of the algorithm below?");
        setContent([questionTopic]);
        break;
      case 3:
        setTimer(12);
        setQuestion("Fill in the missing pseudo-code of the algorithm below");
        setContent([questionTopic]);
        break;
      default:
        console.log("Something went wrong");
    }
  }, [object.original, object?.swaps, questionTopic, questionType]);

  const createRandomGame = () => {
    let correctIndex = Math.floor(Math.random() * 4);
    let topicIndex = Math.floor(Math.random() * 2);
    let typeIndex = Math.floor(Math.random() * 4);
    // let topicIndex = 1;
    // let typeIndex = 0;

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

  const ContentBars = () => {
    return (
      <Grid
        container
        justifyContent="space-between"
        className={classes.contentArrayContainer}
      >
        {content?.map((value, index) => (
          <Grid item key={index}>
            <div
              className="contentArrayBars"
              style={{ height: value * 3 + "vh" }}
            >
              <Typography variant="h4">{value}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  const ContentTime = () => {
    return <Typography variant="h1">{questionTopic}</Typography>;
  };

  const ContentSpace = () => {
    return <Typography variant="h1">{questionTopic}</Typography>;
  };

  const ContentCode = () => {
    return <Typography variant="h1">{questionTopic}</Typography>;
  };

  const CountdownTimer = () => (
    <CountdownCircleTimer
      isPlaying
      duration={timer}
      colors={["#F7B801"]}
      rotation="counterclockwise"
      size={80}
      trailStrokeWidth="5"
      onComplete={createGame}
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
            <Typography variant="h3">Streak</Typography>
          </Grid>
            <Grid item>
              <Question answers={answers} question={question} />
            </Grid>
            <Grid item>
              <CountdownTimer />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={endGame}>
                END GAME
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paperContent}>
          <Container maxWidth="xl">
            {questionType === 0 ? (
              <ContentBars />
            ) : questionType === 1 ? (
              <ContentTime />
            ) : questionType === 2 ? (
              <ContentSpace />
            ) : questionType === 3 ? (
              <ContentCode />
            ) : null}
          </Container>
        </Paper>
        <Paper className={classes.paperAnswers}>
          <Answers
            answers={answers}
            createGame={createGame}
            questionType={questionType}
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
