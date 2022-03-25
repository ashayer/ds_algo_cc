import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  topRow: {
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.25s ease",
  },
  paperQuestion: {
    width: "2000px",
    transition: "all 0.25s ease",
  },
  paperContent: {
    width: "2000px",
    height: "25vh",
    margin: "10px 0",
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
