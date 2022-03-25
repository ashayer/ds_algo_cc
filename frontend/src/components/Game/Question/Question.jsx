import React from "react";
import { Typography, Container } from "@mui/material/";

const Question = ({ question }) => {
  return (
    <Container sx={{ width: "50vw" }}>
      <Typography variant="h4">{question}</Typography>
    </Container>
  );
};

export default Question;
