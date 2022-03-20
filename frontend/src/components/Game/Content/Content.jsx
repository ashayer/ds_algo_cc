import React from "react";
import { Grid, Typography, Container } from "@mui/material/";
import useStyles from "./styles";

const Content = ({ content, questionTopic, questionType }) => {
  const classes = useStyles();
  const ContentBars = () => {
    return (
      <Grid container className={classes.contentArrayContainer}>
        {content?.map((value) => (
          <Grid item key={value}>
            <div
              className="contentArrayBars"
              style={{ height: value * 3 + "vh" }}
            >
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
    //console.log({content});
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

  return questionType === 0 ? (
    <ContentBars />
  ) : questionType > 0 && questionType < 3 ? (
    <ContentText />
  ) : questionType === 3 ? (
    <ContentCode />
  ) : null;
};

export default Content;