import React from "react";
import { Grid, ButtonBase } from "@mui/material/";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import "./answers.css";
//create aux array in game component? then pass into here as prop?
const Answers = ({ answers, createGame, questionType}) => {
  //const userInfo = useSelector((state) => state.userReducer);
  //const [newPoints, setNewPoints] = useState(userInfo.points);
  const classes = useStyles();

  const correctAnswer = () => {
    // let randomPoints = Math.floor(Math.random() * 100);
    // const updatePointsBy = randomPoints;
    // const tempPoints = userInfo.points + updatePointsBy;
    // let user = JSON.parse(localStorage.getItem('profile'));
    // user.result.points = tempPoints;
    // localStorage.setItem('profile',JSON.stringify(user));
    // setNewPoints(tempPoints);
    createGame();

  };

  const wrongAnswer = () => {
    createGame();
  };

  // useEffect(() => {

  //dispatch(updatePoints(userInfo._id, {points: newPoints}));

  // }, [newPoints, dispatch, userInfo._id]);

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
            {answer[1].map((value, index) => (
              <Grid item key={index}>
                <div
                  className="answerArrayBars"
                  style={{ height: value * 2.5 + "vh" }}
                >
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
          <Typography variant="h1">{answer[1]}</Typography>
        </ButtonBase>
      </Grid>
    ));
  };

  return (
    <Grid
      container
      align="center"
      justifyContent="center"
    >
      {questionType === 0 ? (
        <AnswerBars />
      ) : (questionType > 0 && questionType < 4) ? (
        <AnswerText />
      ) : null}
    </Grid>
  );
};

export default Answers;
