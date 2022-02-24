import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  rightAnswer: {
    backgroundColor: "green",
    color: "white",
    transition: "all 0.25s ease",
  },
  wrongAnswer: {
      backgroundColor: "red",
      color: "white",
      transition: "all 0.25s ease",
  },
  answerGrid: {
      margin: "0px",
  }
}));