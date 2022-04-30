import React, { useState, useRef } from "react";
import {
  Typography,
  Button,
  Grid,
  Modal,
  Box,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import GeneralAccordionSection from "./GeneralAccordionSection";
import CodeAccordionSection from "./CodeAccordionSection";
import QuizModal from "../QuizModal";

let userAnswers = [false, false, false, false];
let checkboxQuestion = [false, false, false, false];

const SortingAlgorithmAccordion = ({
  sectionNum,
  sectionArray,
  setSectionArray,
  updateLocalUser,
}) => {
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [open, setOpen] = useState(false);
  const subsectionIndexRef = useRef(0);
  const handleOpen = () => {
    userAnswers = [false, false, false, false];
    checkboxQuestion = [false, false, false, false];
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
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
    updateLocalUser(sectionArray);
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
    //! change to 1
    if (totalCorrect / 4 !== 1) {
      toast.error(`Must get 100% correct to proceed. You got ${(totalCorrect / 4) * 100}%`, {
        position: "bottom-center",
        autoClose: 3000,
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
            height: "90vh",
            width: "90vw",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => handleClose()}
            sx={{
              float: "right",
              borderRadius: "0",
              m: 0.5,
              "&:hover": {
                backgroundColor: "red",
              },
              alignSelf: "end",
            }}
            variant="contained"
          >
            X
          </Button>
          <Typography variant="h3">
            {subsectionIndexRef.current
              ? `${sectionArray[sectionNum].sectionName} Code Quiz`
              : `${sectionArray[sectionNum].sectionName} General Quiz`}
          </Typography>

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
                sx={{ borderBottom: "1px solid black" }}
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
                <Button
                  onClick={() => handleAccordClick(index)}
                  variant="contained"
                  color="error"
                  sx={{ borderRadius: "0px", float: "right" }}
                >
                  <CloseIcon />
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
