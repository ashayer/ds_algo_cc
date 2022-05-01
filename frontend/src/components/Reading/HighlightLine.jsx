/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const HighlightLine = ({ lineNum, setHoveredLine }) => {
  return (
    <span
      style={{ color: "#ff7b00" }}
      onMouseOver={() => setHoveredLine(lineNum)}
      onMouseLeave={() => setHoveredLine([])}
      onFocus={() => setHoveredLine(lineNum)}
    >
      {` (LINE ${lineNum[0]}) `}
    </span>
  );
};

export default HighlightLine;
