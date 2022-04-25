import React from "react";
import QueueGeneral from "../QueueInfo/QueueGeneral";
import StackGeneral from "../StackInfo/StackGeneral";
import LinkedListGeneral from "../LinkedListInfo/LinkedListGeneral";
import BinaryTreeGeneral from "../BinaryTreeInfo/BinaryTreeGeneral";

const GeneralAccordionSection = ({ sectionNum }) => {
  return sectionNum === 0 ? (
    <QueueGeneral />
  ) : sectionNum === 1 ? (
    <StackGeneral />
  ) : sectionNum === 2 ? (
    <LinkedListGeneral />
  ) : sectionNum === 3 ? (
    <BinaryTreeGeneral />
  ) : null;
};

export default GeneralAccordionSection;
