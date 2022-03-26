import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import sectionArray from "./testarray";

const Learn = () => {
  const [sectionNum, setSectionNum] = useState(0);
  const [tempSectionArray, setTempSectionArray] = useState(sectionArray);
  const [currentSubSection, setCurrentSubSection] = useState("");

  const nextSection = () => {
    if (sectionNum < tempSectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  const completed = (index) => {
    tempSectionArray[sectionNum].subsections[index].completed = true;
    const tempSectionArrayOne = tempSectionArray.slice();
    setTempSectionArray(tempSectionArrayOne);
    setCurrentSubSection(tempSectionArray[sectionNum].subsections[index].name);
    if (index === tempSectionArray[sectionNum].subsections.length - 1) {
      tempSectionArray[sectionNum].completed = true;
      const temp = tempSectionArray.slice();
      setTempSectionArray(temp);
    }
  };

  function handleAccordClick(name) {
    if (currentSubSection === name) setCurrentSubSection("");
    if (currentSubSection !== name) setCurrentSubSection(name);
  }

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Button
          onClick={prevSection}
          variant="contained"
          disabled={sectionNum < 1}
          sx={{
            visibility: `${sectionNum === 0 ? "hidden" : "visible"}`,
          }}
        >
          <ArrowBackIcon />
          {sectionNum > 0 ? `${tempSectionArray[sectionNum - 1].section}` : null}
        </Button>

        <Button
          onClick={nextSection}
          variant="contained"
          disabled={
            sectionNum === tempSectionArray.length - 1 || !tempSectionArray[sectionNum].completed
          }
          sx={{
            visibility: `${sectionNum === tempSectionArray.length - 1 ? "hidden" : "visible"}`,
          }}
        >
          {sectionNum < tempSectionArray.length - 1
            ? `${tempSectionArray[sectionNum + 1].section}`
            : null}
          <ArrowForwardIcon />
        </Button>
      </Grid>

      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: `${tempSectionArray[sectionNum].completed ? "#4db866" : "#ff8178"}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3">{tempSectionArray[sectionNum].section}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tempSectionArray[sectionNum].subsections.map((subsection, index) => (
            <Accordion
              key={subsection.name}
              expanded={currentSubSection === subsection.name}
              onClick={
                index === 0 || tempSectionArray[sectionNum].subsections[index - 1].completed
                  ? () => handleAccordClick(subsection.name)
                  : null
              }
              disabled={
                index === 0 ? false : !tempSectionArray[sectionNum].subsections[index - 1].completed
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
              <Button onClick={() => completed(index)} variant="contained">
                Completed
              </Button>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Learn;
