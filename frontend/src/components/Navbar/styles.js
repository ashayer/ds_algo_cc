import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 10,
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 15px",
    border: "2px solid red",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
