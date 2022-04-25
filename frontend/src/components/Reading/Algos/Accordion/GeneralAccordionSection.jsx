import React from "react";
import InsertionGeneral from "../InsertionInfo/InsertionGeneral";
import SelectionGeneral from "../SelectionInfo/SelectionGeneral";
import MergeGeneral from "../MergeInfo/MergeGeneral";
import QuickGeneral from "../QuickInfo/QuickGeneral";

const GeneralAccordionSection = ({ sectionNum }) => {
  return sectionNum === 0 ? (
    <InsertionGeneral />
  ) : sectionNum === 1 ? (
    <SelectionGeneral />
  ) : sectionNum === 2 ? (
    <MergeGeneral />
  ) : sectionNum === 3 ? (
    <QuickGeneral />
  ) : null;
};

export default GeneralAccordionSection;
