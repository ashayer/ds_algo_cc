import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  rightAnswer: {
    backgroundColor: "#1565C0",
    color: "white",
    margin: "10px 10px",
    borderRadius: "10px",
    width: "35vw",
    height: "20.5vh",
    "&:hover": {
      transform: "scale(1.1)",
    },
    transition: "all .10s ease",
  },
  wrongAnswer: {
    backgroundColor: "#1565C0",
    color: "white",
    margin: "10px 10px",
    borderRadius: "10px",
    width: "35vw",
    height: "20.5vh",
    "&:hover": {
      transform: "scale(1.1)",
    },
    transition: "all .10s ease",
  },
}));
