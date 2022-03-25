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
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logoutButton: {
    backgroundColor: "#cf3c02",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
}));
