import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  topRow: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  paperQuestion: {
    width: "2000px",
  },
  paperContent: {
    width: "2000px",
    margin: "10px 0",
    height: "25vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.25s ease",
  },
  paperAnswers: {},
  textContent: {
    color: "blue",
    padding: "0vh",
    transition: "all 0.25s ease",
  },
  contentArrayContainer: {
    width: "55vw",
    position: "relative",
    top: "12.5vh",
    transition: "all 0.25s ease",
    justifyContent: "space-evenly",
  },
}));
