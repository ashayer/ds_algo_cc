/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material/";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useStyles from "./styles";

const Content = ({ content, questionTopic, questionType }) => {
  const classes = useStyles();
  const ContentBars = () => {
    return (
      <Grid container className={classes.contentArrayContainer}>
        {content?.map((value) => (
          <Grid item key={value}>
            <div className="contentArrayBars" style={{ height: `${value * 3}vh` }}>
              <Typography variant="h4">{value}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  const ContentText = () => {
    return <Typography variant="h1">{questionTopic}</Typography>;
  };

  const ContentCode = () => {
    return (
      <Container className={classes.codeContainer}>
        <Typography
          variant="h6"
          style={{ whiteSpace: "break-spaces" }}
          className={classes.codeText}
        >
          {content}
        </Typography>
      </Container>
    );
  };

  const onDragEnd = () => {};

  const ContentDragCode = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1">
          {(provided) => (
            <Box
              onDragOver={(e) => e.preventDefault()}
              maxWidth="sm"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {content?.map((value, idx) => (
                <Draggable draggableId={value.correctIdx.toString()} index={idx} key={idx}>
                  {(provided) => (
                    <div
                      key={value.correctIdx}
                      id={idx}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Typography variant="h6" sx={{ border: "1px solid blue", marginBottom: "10px" }}>
                        {value.lineContent + value.correctIdx}
                      </Typography>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  return questionType === 0 ? (
    <ContentBars />
  ) : questionType === 1 || questionType === 2 ? (
    <ContentText />
  ) : questionType === 3 ? (
    <ContentCode />
  ) : questionType === 4 ? (
    <ContentBars />
  ) : questionType === 5 ? (
    <ContentDragCode />
  ) : null;
};

export default Content;
