/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Grid, Slider, Typography, Button, Box } from "@mui/material";
import Xarrow from "react-xarrows";

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const QueueDisplay = () => {
  const [queue, setQueue] = useState([]);
  const listSize = useRef(10);
  useEffect(() => {
    const initialQueue = [];
    for (let i = 0; i < listSize.current; i += 1) {
      initialQueue.push(Math.floor(Math.random() * 45 + 1));
    }
    setQueue(initialQueue);
  }, []);

  return (
    <Grid
      container
      sx={{
        mt: 2,
        border: "1px solid black",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      {queue.map((element, idx) => (
        <Grid
          item
          key={generateKey(idx)}
          id={idx}
          xs={0.5}
          sx={{
            border: "1px solid black",
            height: 1,
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h5">{element}</Typography>
          {idx < listSize.current - 1 ? <Xarrow start={`${idx}`} end={`${idx + 1}`} /> : null}
        </Grid>
      ))}
    </Grid>
  );
};

export default QueueDisplay;
