import React, { useState, useRef } from "react";
import {
  Typography,
  Button,
  Grid,
  Modal,
  Box,
  Radio,
  RadioGroup,
  FormGroup,
  FormControlLabel,
  FormControl,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Checkbox,
} from "@mui/material";
import { toast } from "react-toastify";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MergeGeneral from "./QuickGeneral";
import MergeCode from "./QuickCode";

const questionsArrayForGeneral = [
  {
    question: "Which of the following is NOT true",
    type: 0,
    options: [
      { answer: "Merge sort has a best case of n", correct: false },
      { answer: "Merge sort is stable and in-place", correct: false },
      { answer: "Merge sort has a best case of n\u00B2", correct: true },
      { answer: "Merge sort is efficient on smaller datasets", correct: false },
    ],
  },
  {
    question:
      "What would be the output of Merge sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Merge Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "true", correct: false },
      { answer: "false", correct: true },
    ],
  },
  {
    question: "Check all that apply to Merge sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space tune of O(n\u00B2)", correct: true },
      { answer: "Sorts a list in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

const questionsArrayForCode = [
  {
    question: "Which of the following is true?",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop with the J iterator",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or greater than the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent while loop for the inner j loop of Merge sort",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The jth and jth-1 values are swapped in the algorithm",
    type: 0,
    options: [
      { answer: "true", correct: true },
      { answer: "false", correct: false },
    ],
  },
];

let userAnswers = [];
let checkboxQuestion = [false, false, false, false];

const answerQuestion = (e) => {
  userAnswers[e.target.name] =
    questionsArrayForGeneral[e.target.name].options[e.target.value].correct;
};
const answerQuestionCheckBox = (e) => {
  checkboxQuestion[e.target.value] = !checkboxQuestion[e.target.value];
  let isWrong = false;
  questionsArrayForGeneral[e.target.name].options.map((option, index) => {
    if (!(option.correct === checkboxQuestion[index])) {
      isWrong = true;
    }
    return isWrong;
  });
  userAnswers[e.target.name] = !isWrong;
};

const QuestionsForGeneral = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ padding: "50px" }}>
      {questionsArrayForGeneral.map((question, index) => (
        <Grid item xs={12} md={5} key={index} sx={{ minHeight: "250px" }}>
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

const QuestionsForCode = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ padding: "50px" }}>
      {questionsArrayForCode.map((question, index) => (
        <Grid item xs={12} md={5} key={index} sx={{ minHeight: "250px" }}>
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

// eslint-disable-next-line no-unused-vars
const QuickAccordion = ({ tempSectionArray, setTempSectionArray, updateLocalUser }) => {
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    userAnswers = [];
    checkboxQuestion = [false, false, false, false];
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const subsectionIndexRef = useRef(0);
  function handleAccordClick(name) {
    if (currentSubSection === name) setCurrentSubSection("");
    if (currentSubSection !== name) setCurrentSubSection(name);
  }

  const completed = async (index) => {
    tempSectionArray[3].subsections[index].completed = true;
    const tempSectionArrayOne = tempSectionArray.slice();
    setTempSectionArray(tempSectionArrayOne);
    setCurrentSubSection(tempSectionArray[3].subsections[index].name);
    if (index === tempSectionArray[3].subsections.length - 1) {
      tempSectionArray[3].completed = true;
      const temp = tempSectionArray.slice();
      setTempSectionArray(temp);
    }
    // updateLocalUser(tempSectionArray);
    handleAccordClick(tempSectionArray[3].subsections[index].name);
    handleClose();
  };

  const checkAnswers = () => {
    let totalCorrect = 0;
    userAnswers.map((answer) => {
      if (answer) {
        totalCorrect += 1;
      }
      return totalCorrect;
    });
    if (totalCorrect / questionsArrayForGeneral.length !== 0) {
      toast.error(
        `Must get 100% correct to proceed! You got ${
          (totalCorrect / questionsArrayForGeneral.length) * 100
        }%`,
        {
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        },
      );
    } else {
      toast.success("Passed!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      completed(subsectionIndexRef.current);
    }
  };

  return (
    <>
      <Modal open={open} sx={{ backgroundColor: "white" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            overflow: "auto",
            height: "80vh",
            backgroundColor: "white",
            outline: "none",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button
            onClick={() => handleClose()}
            sx={{
              float: "right",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            variant="contained"
          >
            X
          </Button>

          {subsectionIndexRef.current === 0 ? <QuestionsForGeneral /> : <QuestionsForCode />}
          <Button onClick={() => checkAnswers()} variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>

      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: `${tempSectionArray[3].completed ? "#4db866" : "#ff8178"}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3">{tempSectionArray[3].sectionName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tempSectionArray[3].subsections.map((subsection, index) => (
            <Accordion
              key={subsection.name}
              expanded={currentSubSection === subsection.name}
              disabled={index === 0 ? false : !tempSectionArray[3].subsections[index - 1].completed}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={
                  index === 0 || tempSectionArray[3].subsections[index - 1].completed
                    ? () => handleAccordClick(subsection.name)
                    : null
                }
              >
                <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="h5">{subsection.name}</Typography>
                  {subsection.completed ? (
                    <CheckBoxIcon color="success" fontSize="large" />
                  ) : (
                    <CheckBoxOutlineBlankIcon fontSize="large" />
                  )}
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                {index === 0 ? <MergeGeneral /> : index === 1 ? <MergeCode /> : null}
              </AccordionDetails>
              {!subsection.completed ? (
                <Button
                  onClick={() => {
                    subsectionIndexRef.current = index;
                    handleOpen();
                  }}
                  variant="contained"
                >
                  Take Quiz
                </Button>
              ) : (
                <Button onClick={() => handleAccordClick(index)} variant="contained">
                  Close
                </Button>
              )}
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default QuickAccordion;
