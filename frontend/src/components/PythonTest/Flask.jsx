import React, { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import axios from "axios";

const Flask = () => {
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/flask/hello")
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="App">
      <Typography>React + Flask Tutorial</Typography>
      {getMessage.status === 200 ? <h3>{getMessage.data.message}</h3> : <h3>LOADING</h3>}
    </Container>
  );
};

export default Flask;
