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
  ) : sectionNum === 1 ? (
    <MergeGeneral />
  ) : sectionNum === 1 ? (
    <QuickGeneral />
  ) : null;
};

export default GeneralAccordionSection;
