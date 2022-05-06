import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import StructureOptions from "./StructureOptions";
import QueueDisplay from "./Structures/QueueDisplay";
import StackDisplay from "./Structures/StackDisplay";
import LinkedListDisplay from "./Structures/LinkedListDisplay";
import BinaryTreeDisplay from "./Structures/BinaryTreeDisplay";

const SortingSandbox = () => {
  const [dataStructure, setDataStructures] = useState(1);

  const handleStructureChange = (e) => {
    setDataStructures(e.target.value);
  };

  return (
    <>
      <Navbar page="Data Structure Sandbox" />
      <StructureOptions
        handleStructureChange={handleStructureChange}
        dataStructure={dataStructure}
      />
      {dataStructure === 0 ? (
        <QueueDisplay />
      ) : dataStructure === 1 ? (
        <StackDisplay />
      ) : dataStructure === 2 ? (
        <LinkedListDisplay />
      ) : dataStructure === 3 ? (
        <BinaryTreeDisplay />
      ) : null}
    </>
  );
};

export default SortingSandbox;
