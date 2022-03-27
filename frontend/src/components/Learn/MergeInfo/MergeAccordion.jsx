import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Grid } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const InsertionAccordion = ({ tempSectionArray, setTempSectionArray }) => {
  const [currentSubSection, setCurrentSubSection] = useState("");

  const completed = (index) => {
    tempSectionArray[2].subsections[index].completed = true;
    const tempSectionArrayOne = tempSectionArray.slice();
    setTempSectionArray(tempSectionArrayOne);
    setCurrentSubSection(tempSectionArray[2].subsections[index].name);
    if (index === tempSectionArray[2].subsections.length - 1) {
      tempSectionArray[2].completed = true;
      const temp = tempSectionArray.slice();
      setTempSectionArray(temp);
    }
  };

  function handleAccordClick(name) {
    if (currentSubSection === name) setCurrentSubSection("");
    if (currentSubSection !== name) setCurrentSubSection(name);
  }

  return (
    <Accordion
      defaultExpanded
      sx={{
        backgroundColor: `${tempSectionArray[2].completed ? "#4db866" : "#ff8178"}`,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3">{tempSectionArray[2].section}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {tempSectionArray[2].subsections.map((subsection, index) => (
          <Accordion
            key={subsection.name}
            expanded={currentSubSection === subsection.name}
            onClick={
              index === 0 || tempSectionArray[2].subsections[index - 1].completed
                ? () => handleAccordClick(subsection.name)
                : null
            }
            disabled={index === 0 ? false : !tempSectionArray[2].subsections[index - 1].completed}
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
              {index === 0 ? (
                <Typography>Merge Complexities</Typography>
              ) : index === 1 ? (
                <Typography>Merge Complexities</Typography>
              ) : index === 2 ? (
                <Typography>Merge Code</Typography>
              ) : null}
            </AccordionDetails>
            <Button onClick={() => completed(index)} variant="contained">
              Completed
            </Button>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default InsertionAccordion;