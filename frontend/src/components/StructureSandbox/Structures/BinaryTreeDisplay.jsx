/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { Grid, Slider, Typography, Button, Box, TextField } from "@mui/material";
import Xarrow from "react-xarrows";

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const BinaryTreeDisplay = () => {
  const [treeArray, setTreeArray] = useState([]);
  const { ref, insert, remove } = useBinarySearchTree();
  const [insertValue, setInsertValue] = useState(0);
  const [removeValue, setRemoveValue] = useState(0);
  const listSize = useRef(3);
  useEffect(() => {
    const initialQueue = [];
    for (let i = 0; i < listSize.current; i += 1) {
      initialQueue[i] = [];
      for (let j = 0; j < i + 1; j += 1) {
        initialQueue[i].push(Math.floor(Math.random() * 9 + 1));
      }
    }
    setTreeArray(initialQueue);
  }, []);

  return (
    <>
      <input
        type="number"
        onChange={(elem) => setInsertValue(parseInt(elem.currentTarget.value, 10))}
      />
      <Button variant="contained" onClick={() => insert(insertValue)}>
        Insert
      </Button>
      <input
        type="number"
        onChange={(elem) => setRemoveValue(parseInt(elem.currentTarget.value, 10))}
      />
      <Button variant="contained" onClick={() => remove(removeValue)}>
        Remove
      </Button>

      <Grid
        container
        sx={{
          mt: 2,
          border: "1px solid black",
          textAlign: "center",
          justifyContent: "space-evenly",
        }}
      >
        <BinarySearchTree data={[2, 1, 3]} ref={ref} treeStyles={{ nodeShadow: "0" }} />
      </Grid>
    </>
  );
};

export default BinaryTreeDisplay;
