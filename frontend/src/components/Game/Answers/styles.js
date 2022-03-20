import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  rightAnswer: {
    backgroundColor: "green",
    color: "white",
    transition: "all 0.25s ease",
    margin: "10px 10px",
    borderRadius: "10px",
  },
  wrongAnswer: {
    backgroundColor: "red",
    color: "white",
    transition: "all 0.25s ease",
    margin: "10px 10px",
    borderRadius: "10px",
  },
}));
