import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sectionArray from "./testarray";

const Learn = () => {
  const [sectionNum, setSectionNum] = useState(0);
  const [tempSectionArray, setTempSectionArray] = useState(sectionArray);
  const [currentSubSection, setCurrentSubSection] = useState("");

  const nextSection = () => {
    if (sectionNum < 7) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  const completed = (index) => {
    tempSectionArray[sectionNum].subsections[index].completed = true;
    const temp = tempSectionArray.slice();
    setTempSectionArray(temp);
    setCurrentSubSection(tempSectionArray[sectionNum].subsections[index].name);
  };

  function handleAccordClick(name) {
    if (currentSubSection === name) setCurrentSubSection("");
    if (currentSubSection !== name) setCurrentSubSection(name);
  }

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Button onClick={prevSection} variant="contained" disabled={sectionNum < 1}>
          <ArrowBackIcon />
          Prev section
        </Button>

        <Button onClick={nextSection} variant="contained" disabled={sectionNum > 6}>
          Next section
          <ArrowForwardIcon />
        </Button>
      </Grid>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{tempSectionArray[sectionNum].section}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tempSectionArray[sectionNum].subsections.map((subsection, index) => (
            <Accordion
              key={subsection.name}
              sx={{ backgroundColor: `${subsection.completed ? "#4db866" : "#ffcc8a"}` }}
              expanded={currentSubSection === subsection.name}
              onClick={() => handleAccordClick(subsection.name)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{subsection.name}</Typography>
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
