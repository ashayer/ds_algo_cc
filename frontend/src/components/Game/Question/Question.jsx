import React from "react";
import { Typography, Container } from "@mui/material/";

const Question = ({ question }) => {
  return (
    <Container disableGutters>
      <Typography variant="h4">{question}</Typography>
    </Container>
  );
};

export default Question;
