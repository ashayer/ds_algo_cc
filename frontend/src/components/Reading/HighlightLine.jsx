/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const HighlightLine = ({ lineNum, setHoveredLine }) => {
  return (
    <span
      style={{ color: "#ff7b00" }}
      onMouseOver={() => setHoveredLine(lineNum)}
      onMouseLeave={() => setHoveredLine(null)}
      onFocus={() => setHoveredLine(lineNum)}
    >
      {` (LINE ${lineNum}) `}
    </span>
  );
};

export default HighlightLine;
