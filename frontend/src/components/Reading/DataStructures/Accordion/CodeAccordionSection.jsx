import React from "react";
import QueueCode from "../QueueInfo/QueueCode";
import StackCode from "../StackInfo/StackCode";
import LinkedListCode from "../LinkedListInfo/LinkedListCode";
import BinaryTreeCode from "../BinaryTreeInfo/BinaryTreeCode";

const CodeAccordionSection = ({ sectionNum }) => {
  return sectionNum === 0 ? (
    <QueueCode />
  ) : sectionNum === 1 ? (
    <StackCode />
  ) : sectionNum === 2 ? (
    <LinkedListCode />
  ) : sectionNum === 3 ? (
    <BinaryTreeCode />
  ) : null;
};

export default CodeAccordionSection;
