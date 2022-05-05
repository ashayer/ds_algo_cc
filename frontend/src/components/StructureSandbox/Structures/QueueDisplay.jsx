import React, { useState, useEffect } from "react";
import { Grid, Slider, Typography, Button } from "@mui/material";

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const QueueDisplay = () => {
  const [queueSize, setQueueSize] = useState(10);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const initialQueue = [];
    for (let i = 0; i < queueSize; i += 1) {
      initialQueue.push(Math.floor(Math.random() * 45 + 1));
    }
    setQueue(initialQueue);
  }, []);

  const enQueue = () => {
    if (queueSize === 10) {
      console.log("Queue is full");
    } else {
      const initialQueue = queue.slice();
      initialQueue[queueSize] = Math.floor(Math.random() * 45);
      setQueue(initialQueue);
      setQueueSize((size) => size + 1);
    }
  };

  const deQueue = () => {
    if (queueSize === 0) {
      console.log("Queue is empty");
    } else {
      let initialQueue = [];
      queue.shift();
      initialQueue = queue.slice();
      initialQueue.push(-1);
      setQueue(initialQueue);
      setQueueSize((size) => size - 1);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          mt: 1,
          p: 1,
        }}
      >
        <Grid item textAlign="center" sx={{}}>
          <Typography gutterBottom>Queue Size</Typography>
          <Slider
            value={queueSize}
            onChange={(e, value) => {
              setQueueSize(value);
            }}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={10}
            sx={{ width: "15vw" }}
          />
        </Grid>
        <Grid item sx={{}}>
          <Button
            variant="contained"
            onClick={() => {
              enQueue();
            }}
          >
            <Typography>Enqueue</Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              deQueue();
            }}
          >
            <Typography>Dequeue</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          alignItems: "center",
          mt: 1,
          p: 1,
          justifyContent: "start",
          width: "95w",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {queue.map((element, idx) => (
          <Grid
            item
            key={generateKey(idx)}
            lg={1}
            sx={{
              border: "1px solid black",
              height: "20vh",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h3">{element === -1 ? "\u00A0" : element}</Typography>
            {idx === 0 && queueSize > 0 ? (
              <Typography variant="h3">Head</Typography>
            ) : idx === queueSize - 1 ? (
              <Typography variant="h3">Tail</Typography>
            ) : (
              <Typography variant="h3">{"\u00A0"}</Typography>
            )}
            <Typography variant="h3">{idx}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default QueueDisplay;
