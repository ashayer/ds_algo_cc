import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    marginTop: "15vh",
  },
  formButton: {
    backgroundColor: "#000000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
  formSubmitButton: {
    backgroundColor: "#9e3200",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
}));
