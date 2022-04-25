import React from "react";
import {
  Grid,
  Typography,
  FormGroup,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Radio,
} from "@mui/material";

import * as quiz from "./sectionQuizArrays";

const getGeneralArray = (sectionNum) => {
  switch (sectionNum) {
    case 0:
      return quiz.insertionGeneralQuiz;
    case 1:
      return quiz.selectionGeneralQuiz;
    case 2:
      return quiz.mergeGeneralQuiz;
    case 3:
      return quiz.quickGeneralQuiz;
    default:
      return null;
  }
};

const getCodeArray = (sectionNum) => {
  switch (sectionNum) {
    case 0:
      return quiz.insertionCodeQuiz;
    case 1:
      return quiz.selectionCodeQuiz;
    case 2:
      return quiz.mergeCodeQuiz;
    case 3:
      return quiz.quickCodeQuiz;
    default:
      return null;
  }
};

const getQuestionArray = ({ subsectionIndex, sectionNum }) => {
  if (subsectionIndex === 0) {
    return getGeneralArray(sectionNum);
  }
  return getCodeArray(sectionNum);
};

const QuizModal = ({ userAnswers, checkboxQuestion, subsectionIndex, sectionNum }) => {
  const questionArray = getQuestionArray({ subsectionIndex, sectionNum });
  const answerQuestion = (e) => {
    userAnswers[e.target.name] = questionArray[e.target.name].options[e.target.value].correct;
  };
  const answerQuestionCheckBox = (e) => {
    checkboxQuestion[e.target.value] = !checkboxQuestion[e.target.value];
    let isWrong = false;
    questionArray[e.target.name].options.map((option, index) => {
      if (!(option.correct === checkboxQuestion[index])) {
        isWrong = true;
      }
      return isWrong;
    });
    userAnswers[e.target.name] = !isWrong;
  };

  return (
    <Grid container sx={{ p: 1, justifyContent: "center" }}>
      {questionArray.map((question, index) => (
        <Grid
          item
          xs={12}
          md={5}
          key={index}
          sx={{
            minHeight: "250px",
            border: "1px solid black",
            p: 2,
            m: 1,
          }}
        >
          <Typography>{question.question}</Typography>
          <FormControl>
            {question.type ? (
              <FormGroup>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={
                      <Checkbox onChange={(e) => answerQuestionCheckBox(e)} name={`${index}`} />
                    }
                    label={`${option.answer}`}
                    sx={{
                      marginLeft: 0,
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#a3bcd6",
                      },
                      borderRadius: "15px",
                      transition: "all 0.15s ease",
                    }}
                  />
                ))}
              </FormGroup>
            ) : (
              <RadioGroup name={`${index}`} onChange={answerQuestion}>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={<Radio />}
                    label={`${option.answer}`}
                    sx={{
                      marginLeft: 0,
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#a3bcd6",
                      },
                      borderRadius: "15px",
                      transition: "all 0.15s ease",
                    }}
                  />
                ))}
              </RadioGroup>
            )}
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizModal;
