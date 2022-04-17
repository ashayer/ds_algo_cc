/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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
import GeneralAccordionSection from "./GeneralAccordionSection";
import CodeAccordionSection from "./CodeAccordionSection";

import * as quizArray from "./sectionQuizArrays";

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

const QuestionsModal = ({ questionArray }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ padding: "50px" }}>
      {questionArray.map((question, index) => (
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
const SortingAlgorithmAccordion = ({
  sectionNum,
  tempSectionArray,
  setTempSectionArray,
  updateLocalUser,
}) => {
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
    tempSectionArray[sectionNum].subsections[index].completed = true;
    const tempSectionArrayOne = tempSectionArray.slice();
    setTempSectionArray(tempSectionArrayOne);
    setCurrentSubSection(tempSectionArray[sectionNum].subsections[index].name);
    if (index === tempSectionArray[sectionNum].subsections.length - 1) {
      tempSectionArray[sectionNum].completed = true;
      const temp = tempSectionArray.slice();
      setTempSectionArray(temp);
    }
    // updateLocalUser(tempSectionArray);
    handleAccordClick(tempSectionArray[sectionNum].subsections[index].name);
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
    if (totalCorrect / 4 !== 0) {
      toast.error(`Must get 100% correct to proceed! You got ${(totalCorrect / 4) * 100}%`, {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
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

          {subsectionIndexRef.current === 0 ? (
            <QuestionsModal questionArray={quizArray.insertionGeneralQuiz} />
          ) : (
            <QuestionsModal questionArray={quizArray.insertionCodeQuiz} />
          )}
          <Button onClick={() => checkAnswers()} variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>

      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: `${tempSectionArray[sectionNum].completed ? "#4db866" : "#ff8178"}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3">{tempSectionArray[sectionNum].sectionName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tempSectionArray[sectionNum].subsections.map((subsection, index) => (
            <Accordion
              key={subsection.name}
              expanded={currentSubSection === subsection.name}
              disabled={
                index === 0 ? false : !tempSectionArray[sectionNum].subsections[index - 1].completed
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={
                  index === 0 || tempSectionArray[sectionNum].subsections[index - 1].completed
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
                {index === 0 ? (
                  <GeneralAccordionSection sectionNum={sectionNum} />
                ) : index === 1 ? (
                  <CodeAccordionSection sectionNum={sectionNum} />
                ) : null}
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

export default SortingAlgorithmAccordion;
