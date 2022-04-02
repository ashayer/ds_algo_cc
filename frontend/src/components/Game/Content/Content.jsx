/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material/";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useStyles from "./styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Content = ({ content, setContentObject, contentObject, questionTopic, questionType }) => {
  const classes = useStyles();

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
    console.log(content);

    return (
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "25vh",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              style={{ whiteSpace: "break-spaces" }}
              sx={{ textAlign: "left" }}
            >
              {content}
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
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

    const newLinesArray = Array.from(contentObject);

    newLinesArray.splice(source.index, 1);
    newLinesArray.splice(destination.index, 0, contentObject[source.index]);

    setContentObject(newLinesArray);
  };

  const ContentDragCode = () => {
    return (
      <Box>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="1">
            {(provided) => (
              <Box maxWidth="sm" {...provided.droppableProps} ref={provided.innerRef}>
                {contentObject?.map((value, idx) => (
                  <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                    {(provided) => (
                      <Typography
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        variant="h6"
                        sx={{
                          backgroundColor: "white",
                          "&:hover": {
                            color: "#9ec3ff",
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
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1" direction="horizontal">
          {(provided) => (
            <Grid
              container
              className={classes.contentArrayContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {contentObject?.map((value, idx) => (
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
                          backgroundColor: "orange",
                          position: "absolute",
                          bottom: "0",
                          borderRadius: "15px 15px 0px 0px",
                        }}
                      >
                        <Typography variant="h4" sx={{ width: "4vw" }}>
                          {`${value.lineContent} - ${value.correctIdx}`}
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
  ) : questionType === 6 ? (
    <ContentDragSwap />
  ) : null;
};

export default Content;
