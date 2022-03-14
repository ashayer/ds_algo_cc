import React from "react";
import { Grid, Typography } from "@mui/material/";
import useStyles from "./styles";

const Content = ({ content, questionTopic, questionType }) => {
  const classes = useStyles();
  const ContentBars = () => {
    return (
      <Grid container className={classes.contentArrayContainer}>
        {content?.map((value, index) => (
          <Grid item key={index}>
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

  return questionType === 0 ? (
    <ContentBars />
  ) : questionType > 0 && questionType < 4 ? (
    <ContentText />
  ) : null;
};

export default Content;
