import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const Stack = () => {
  const stackSize = useRef(10);
  const [stack, setStack] = useState([]);
  const [topIndex, setTopIndex] = useState(0);
  useEffect(() => {
    const initialstack = [];
    for (let i = 0; i < stackSize.current; i += 1) {
      initialstack.push(Math.floor(Math.random() * 45 + 1));
    }
    setStack(initialstack);
  }, []);

  const push = () => {
    if (topIndex === 0) {
      console.log("stack is full");
    } else {
      const initialstack = stack.slice();
      initialstack[topIndex - 1] = Math.floor(Math.random() * 45 + 1);
      setStack(initialstack);
      setTopIndex((size) => size - 1);
    }
  };

  const pop = () => {
    if (topIndex === 10) {
      console.log("stack is empty");
    } else {
      let initialstack = [];
      initialstack = stack.slice();
      initialstack[topIndex] = -1;
      setStack(initialstack);
      setTopIndex((size) => size + 1);
    }
  };

  return (
    <Grid container sx={{ mt: 1 }}>
      <Grid
        item
        xs={3}
        sx={{
          height: "20vh",
        }}
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              push();
            }}
          >
            <Typography>Push</Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              pop();
            }}
          >
            <Typography>Pop</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={5}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {stack.map((element, idx) => (
          <Grid container key={generateKey(idx)}>
            <Grid item xs={4} sx={{ textAlign: "end" }}>
              {idx === topIndex && stackSize.current > 0 ? (
                <Typography
                  variant="h3"
                  sx={{
                    height: "7vh",
                  }}
                >
                  Top
                  <ArrowForwardIcon />
                </Typography>
              ) : (
                <Typography>{"\u00A0"}</Typography>
              )}
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                border: "1px solid black",
                textAlign: "center",
                backgroundColor: "white",
                height: "7vh",
                mb: 1,
              }}
            >
              <Typography variant="h6">{element === -1 ? "\u00A0" : element}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Stack;
