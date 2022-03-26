import React, { useState } from "react";
import { Container, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sectionArray from "./testarray";
import InsertionAccordion from "./InsertionInfo/InsertionAccordion";
import SelectionAccordion from "./SelectionInfo/SelectionAccordion";
import MergeAccordion from "./MergeInfo/MergeAccordion";
import QuickAccordion from "./QuickInfo/QuickAccordion";

const Learn = () => {
  const [sectionNum, setSectionNum] = useState(0);
  const [tempSectionArray, setTempSectionArray] = useState(sectionArray);

  const nextSection = () => {
    if (sectionNum < tempSectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

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
      {sectionNum === 0 ? (
        <InsertionAccordion
          sectionNum={sectionNum}
          tempSectionArray={tempSectionArray}
          setTempSectionArray={setTempSectionArray}
        />
      ) : sectionNum === 1 ? (
        <SelectionAccordion
          sectionNum={sectionNum}
          tempSectionArray={tempSectionArray}
          setTempSectionArray={setTempSectionArray}
        />
      ) : sectionNum === 2 ? (
        <MergeAccordion
          sectionNum={sectionNum}
          tempSectionArray={tempSectionArray}
          setTempSectionArray={setTempSectionArray}
        />
      ) : sectionNum === 3 ? (
        <QuickAccordion
          sectionNum={sectionNum}
          tempSectionArray={tempSectionArray}
          setTempSectionArray={setTempSectionArray}
        />
      ) : null}
    </Container>
  );
};

export default Learn;
