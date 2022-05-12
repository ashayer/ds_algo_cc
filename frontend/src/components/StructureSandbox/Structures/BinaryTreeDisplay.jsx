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
      <Grid container sx={{ justifyContent: "center", p: 2 }}>
        <Grid item>
          <input
            type="number"
            onChange={(elem) => setInsertValue(parseInt(elem.currentTarget.value, 10))}
            style={{ padding: 10, fontSize: "1rem" }}
          />
          <Button
            variant="contained"
            sx={{ padding: 1.5, mr: 2 }}
            onClick={() => insert(insertValue)}
          >
            <Typography>Insert</Typography>
          </Button>
        </Grid>
        <Grid item>
          <input
            type="number"
            onChange={(elem) => setRemoveValue(parseInt(elem.currentTarget.value, 10))}
            style={{ padding: 10, fontSize: "1rem" }}
          />
          <Button variant="contained" sx={{ padding: 1.5 }} onClick={() => remove(removeValue)}>
            <Typography>Remove</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          mt: 2,
          textAlign: "center",
          justifyContent: "space-evenly",
        }}
      >
        <BinarySearchTree data={[6, 3, 9]} ref={ref} treeStyles={{ nodeShadow: "0" }} />
      </Grid>
    </>
  );
};

export default BinaryTreeDisplay;
