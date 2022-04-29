/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ hoveredLine, code }) => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
      wrapLines
      lineProps={(lineNumber) => {
        const style = { display: "block" };
        if (hoveredLine === lineNumber) {
          style.backgroundColor = "#ffc58f";
          style.fontSize = "x-large";
        }
        return { style };
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
