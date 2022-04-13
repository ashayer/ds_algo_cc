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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InsertionGeneral from "./InsertionGeneral";
import InsertionCode from "./InsertionCode";

// eslint-disable-next-line no-unused-vars
const questionsArray = [
  {
    question: "Is insertion Sort An In Place Algorithm",
    type: 0,
    options: [
      { answer: "a", correct: true },
      { answer: "b", correct: false },
      { answer: "c", correct: false },
      { answer: "d", correct: false },
    ],
  },
  {
    question: "Click B",
    type: 0,
    options: [
      { answer: "a", correct: false },
      { answer: "b", correct: true },
      { answer: "c", correct: false },
      { answer: "d", correct: false },
    ],
  },
  {
    question: "True or False",
    type: 0,
    options: [
      { answer: "true", correct: true },
      { answer: "false", correct: false },
    ],
  },
  {
    question: "Check 1 and 3",
    type: 1,
    options: [
      { answer: "1", correct: true },
      { answer: "2", correct: false },
      { answer: "3", correct: true },
      { answer: "4", correct: false },
    ],
  },
];

const userAnswers = [];

const answerQuestion = (e) => {
  userAnswers[e.target.name] = questionsArray[e.target.name].options[e.target.value].correct;
};
const checkedForQuestionFour = [false, false, false, false];
const answerQuestionCheckBox = (e) => {
  checkedForQuestionFour[e.target.value] = !checkedForQuestionFour[e.target.value];
  let isWrong = false;
  questionsArray[e.target.name].options.map((option, index) => {
    if (!(option.correct === checkedForQuestionFour[index])) {
      isWrong = true;
    }
    return isWrong;
  });
  userAnswers[e.target.name] = !isWrong;
};

const checkAnswers = () => {
  let totalCorrect = 0;
  userAnswers.map((answer) => {
    if (answer) {
      totalCorrect += 1;
    }
    return totalCorrect;
  });
  console.log(totalCorrect / questionsArray.length);
};

const Questions = () => {
  return (
    <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch">
      <Grid item>
        {questionsArray.map((question, index) => (
          <FormControl key={index}>
            <Typography>{question.question}</Typography>
            {question.type ? (
              <FormGroup sx={{ border: "1px solid white" }}>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={
                      // eslint-disable-next-line react/jsx-wrap-multilines
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
        ))}
      </Grid>
    </Grid>
  );
};

// eslint-disable-next-line no-unused-vars
const InsertionAccordion = ({ tempSectionArray, setTempSectionArray, updateLocalUser }) => {
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const subsectionIndexRef = useRef(0);
  function handleAccordClick(name) {
    if (currentSubSection === name) setCurrentSubSection("");
    if (currentSubSection !== name) setCurrentSubSection(name);
  }

  // eslint-disable-next-line no-unused-vars
  const completed = async (index) => {
    console.log(index);
    tempSectionArray[0].subsections[index].completed = true;
    const tempSectionArrayOne = tempSectionArray.slice();
    setTempSectionArray(tempSectionArrayOne);
    setCurrentSubSection(tempSectionArray[0].subsections[index].name);
    if (index === tempSectionArray[0].subsections.length - 1) {
      tempSectionArray[0].completed = true;
      const temp = tempSectionArray.slice();
      setTempSectionArray(temp);
    }
    // updateLocalUser(tempSectionArray);
    handleAccordClick(tempSectionArray[0].subsections[index].name);
    handleClose();
  };

  return (
    <>
      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95vw",
            height: "95vh",
            backgroundColor: "gray",
            outline: "none",
          }}
        >
          <Questions />
          {/* <Button onClick={() => completed(subsectionIndexRef.current)} variant="contained">
            Submit
          </Button> */}
          <Button onClick={() => checkAnswers()} variant="contained">
            Submit
          </Button>
          <Button onClick={() => handleClose()} variant="contained">
            X
          </Button>
        </Box>
      </Modal>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: `${tempSectionArray[0].completed ? "#4db866" : "#ff8178"}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3">{tempSectionArray[0].sectionName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tempSectionArray[0].subsections.map((subsection, index) => (
            <Accordion
              key={subsection.name}
              expanded={currentSubSection === subsection.name}
              disabled={index === 0 ? false : !tempSectionArray[0].subsections[index - 1].completed}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={
                  index === 0 || tempSectionArray[0].subsections[index - 1].completed
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
                {index === 0 ? <InsertionGeneral /> : index === 1 ? <InsertionCode /> : null}
              </AccordionDetails>
              {!subsection.completed ? (
                <Button
                  onClick={() => {
                    subsectionIndexRef.current = index;
                    handleOpen();
                  }}
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

export default InsertionAccordion;
