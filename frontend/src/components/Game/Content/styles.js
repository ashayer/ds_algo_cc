import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  contentArrayContainer: {
    width: "55vw",
    position: "relative",
    top: "12.5vh",
    transition: "all 0.25s ease",
    justifyContent: "space-evenly",
  },
  codeContainer: {
    border: "2px solid blue",
  },
  codeText: {
    border: "2px solid green",
    width: "40vw",
    textAlign: "left",
  },
}));