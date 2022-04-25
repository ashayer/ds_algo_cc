import React from "react";
import InsertionCode from "../InsertionInfo/InsertionCode";
import SelectionCode from "../SelectionInfo/SelectionCode";
import MergeCode from "../MergeInfo/MergeCode";
import QuickCode from "../QuickInfo/QuickCode";

const CodeAccordionSection = ({ sectionNum }) => {
  return sectionNum === 0 ? (
    <InsertionCode />
  ) : sectionNum === 1 ? (
    <SelectionCode />
  ) : sectionNum === 2 ? (
    <MergeCode />
  ) : sectionNum === 3 ? (
    <QuickCode />
  ) : null;
};

export default CodeAccordionSection;
