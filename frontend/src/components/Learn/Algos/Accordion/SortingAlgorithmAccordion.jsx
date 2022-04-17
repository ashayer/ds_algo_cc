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
import QuizModal from "../QuizModal";
import * as quizArray from "../sectionQuizArrays";

let userAnswers = [false, false, false, false];
let checkboxQuestion = [false, false, false, false];

const SortingAlgorithmAccordion = ({
  sectionNum,
  sectionArray,
  setSectionArray,
  updateLocalUser,
}) => {
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [open, setOpen] = useState(true);
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

  const completedAccordion = async (index) => {
    sectionArray[sectionNum].subsections[index].completed = true;
    const newSectionArrays = sectionArray.slice();
    setSectionArray(newSectionArrays);
    setCurrentSubSection(sectionArray[sectionNum].subsections[index].name);
    if (index === sectionArray[sectionNum].subsections.length - 1) {
      sectionArray[sectionNum].completed = true;
      const temp = sectionArray.slice();
      setSectionArray(temp);
    }
    // updateLocalUser(sectionArray);
    handleAccordClick(sectionArray[sectionNum].subsections[index].name);
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
      //! change to 1
      toast.error(`Must get 100% correct to proceed. You got ${(totalCorrect / 4) * 100}%`, {
        position: "bottom-center",
        autoClose: 2000,
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
      completedAccordion(subsectionIndexRef.current);
    }
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
            overflow: "auto",
            backgroundColor: "white",
            outline: "none",
            border: "3px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
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
              alignSelf: "end",
            }}
            variant="contained"
          >
            X
          </Button>

          <QuizModal
            userAnswers={userAnswers}
            checkboxQuestion={checkboxQuestion}
            subsectionIndex={subsectionIndexRef.current}
            sectionNum={sectionNum}
          />

          <Button onClick={() => checkAnswers()} variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>

      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: `${sectionArray[sectionNum].completed ? "#4db866" : "#ff8178"}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3">{sectionArray[sectionNum].sectionName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {sectionArray[sectionNum].subsections.map((subsection, index) => (
            <Accordion
              key={subsection.name}
              expanded={currentSubSection === subsection.name}
              disabled={
                index === 0 ? false : !sectionArray[sectionNum].subsections[index - 1].completed
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={
                  index === 0 || sectionArray[sectionNum].subsections[index - 1].completed
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
