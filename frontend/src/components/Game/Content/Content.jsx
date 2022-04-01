/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material/";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useStyles from "./styles";

const Content = ({ content, setContent, questionTopic, questionType }) => {
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

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newLinesArray = Array.from(content);

    newLinesArray.splice(source.index, 1);
    newLinesArray.splice(destination.index, 0, content[source.index]);

    setContent(newLinesArray);
  };

  const ContentDragCode = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1">
          {(provided) => (
            <Box
              key="1"
              onDragOver={(e) => e.preventDefault()}
              maxWidth="sm"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {content?.map((value, idx) => (
                <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                  {(provided) => (
                    <div
                      key={value.correctIdx}
                      id={idx}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          backgroundColor: "white",
                          "&:hover": {
                            color: "#9ec3ff",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
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
