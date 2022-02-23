import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  rightAnswer: {
    backgroundColor: "green",
    color: "white",
  },
  wrongAnswer: {
      backgroundColor: "red",
      color: "white",
  },
  answerGrid: {
      margin: "0px",
  }
}));