/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from "react";
import { Grid, Typography, Container, Box } from "@mui/material/";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Content = ({ content, contentObject, questionTopic, questionType }) => {
  const ContentBars = () => {
    return (
      <Grid container sx={{ position: "relative", justifyContent: "center" }}>
        {content?.map((value) => (
          <Grid item key={value} sx={{ height: "25vh", width: "8vw" }} md={1} sm={0}>
            <Box
              sx={{
                height: `${value * 3}vh`,
                backgroundColor: "#036bfc",
                color: "white",
                position: "absolute",
                bottom: "0",
                borderRadius: "5px 5px 0px 0px",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" sx={{ width: "4vw" }}>{`${value}`}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  const ContentText = () => {
    return (
      <Container disableGutters sx={{ textAlign: "center" }}>
        <Typography variant="h1">{questionTopic}</Typography>
      </Container>
    );
  };

  const ContentCode = () => {
    return (
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            style={{ whiteSpace: "break-spaces" }}
            sx={{ textAlign: "left" }}
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
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

    const newLinesArray = Array.from(contentObject.current);

    newLinesArray.splice(source.index, 1);
    newLinesArray.splice(destination.index, 0, contentObject.current[source.index]);

    contentObject.current = newLinesArray;
  };

  useEffect(() => {}, [contentObject, onDragEnd]);

  const ContentDragCode = () => {
    console.log(contentObject);
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="1">
            {(provided) => (
              <Box maxWidth="sm" {...provided.droppableProps} ref={provided.innerRef}>
                {contentObject.current?.map((value, idx) => (
                  <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                    {(provided) => (
                      <Typography
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        variant="h5"
                        sx={{
                          backgroundColor: "white",
                          margin: "10px",
                          "&:hover": {
                            color: "red",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        {`${value.lineContent}`}
                      </Typography>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    );
  };

  const ContentDragSwap = () => {
    console.log(contentObject);

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1" direction="horizontal">
          {(provided) => (
            <Grid
              container
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ position: "relative", justifyContent: "center" }}
            >
              {contentObject.current?.map((value, idx) => (
                <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                  {(provided) => (
                    <Grid
                      item
                      key={value}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      sx={{ height: "25vh", width: "10vw" }}
                      md={1}
                      sm={0}
                    >
                      <Box
                        sx={{
                          height: `${value.lineContent * 3}vh`,
                          backgroundColor: "#036bfc",
                          color: "white",
                          position: "absolute",
                          bottom: "0",
                          borderRadius: "5px 5px 0px 0px",
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="h4" sx={{ width: "4vw" }}>
                          {`${value.lineContent}`}
                        </Typography>
                      </Box>
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {questionType === 0 ? (
        <ContentBars />
      ) : questionType === 1 || questionType === 2 ? (
        <ContentText />
      ) : questionType === 3 ? (
        <ContentCode />
      ) : questionType === 4 ? (
        <ContentBars />
      ) : questionType === 5 ? (
        <ContentDragCode />
      ) : questionType === 6 ? (
        <ContentDragSwap />
      ) : null}
    </ThemeProvider>
  );
};

export default Content;
