/* eslint-disable */
import React, { useEffect, useState, useCallback } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import axios from "axios";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

const optionsForNum = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
  scales: {},
};

const optionsForQuestionLevelCount = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Question Levels",
    },
  },
  scales: {
    y: {
      min: 0,
    },
  },
};

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
Chart.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

const initialQuestions = [
  { level: 1, correct: true },
  { level: 1, correct: true },
  { level: 3, correct: false },
  { level: 2, correct: true },
  { level: 3, correct: true },
  { level: 1, correct: true },
  { level: 2, correct: false },
  { level: 1, correct: false },
  { level: 3, correct: false },
  { level: 3, correct: false },
];

const advancedUserModel = {
  one: 0.95,
  two: 0.8,
  three: 0.6,
};

const questionLikelihood = {
  one: 2 / 7,
  two: 2 / 7,
  three: (3, 7),
};



const UserEmulator = () => {
  const [percentCorrect, setPercentCorrect] = useState(0);
  const [totalWrongPerLevel, setTotalWrongPerLevel] = useState([0, 0, 0]);
  const [totalRightPerLevel, setTotalRightPerLevel] = useState([0, 0, 0]);
  const [typeCountArray, setTypeCountArray] = useState([0, 0, 0]);
  const [labelsForNum, setLabelsForNum] = useState(["10"]);
  const [percentCorrectArray, setPercentCorrectArray] = useState([]);

  const [levelOneCountArray, setLevelOneCountArray] = useState([]);
  const [levelTwoCountArray, setLevelTwoCountArray] = useState([]);
  const [levelThreeCountArray, setLevelThreeCountArray] = useState([]);

  const [questionHistoryArray, setQuestionHistoryArray] = useState(initialQuestions);

  const getTypeCount = () => {
    const tempCountArray = [0, 0, 0];

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    questionHistoryArray.map((question) => {
      tempCountArray[question.level - 1] += 1;
      if (question.level === 1) {
        count1 += 1;
      } else if (question.level === 2) {
        count2 += 1;
      } else {
        count3 += 1;
      }
    });

    levelOneCountArray.push(count1);
    levelTwoCountArray.push(count2);
    levelThreeCountArray.push(count3);

    setLevelOneCountArray(levelOneCountArray);
    setLevelTwoCountArray(levelTwoCountArray);
    setLevelThreeCountArray(levelThreeCountArray);

    setTypeCountArray(tempCountArray);
  };

  const getPercentCorrect = () => {
    const totalWrongCountArray = [0, 0, 0];
    const totalRightCountArray = [0, 0, 0];
    let totalQuestions = questionHistoryArray.length;
    let totalCorrect = 0;
    questionHistoryArray.map((question) => {
      if (question.correct) {
        totalCorrect += 1;
        totalRightCountArray[question.level - 1] += 1;
      } else {
        totalWrongCountArray[question.level - 1] += 1;
      }
    });
    setTotalWrongPerLevel(totalWrongCountArray);
    setTotalRightPerLevel(totalRightCountArray);

    const newPercentCorrect = Math.round((totalCorrect / totalQuestions) * 100);
    percentCorrectArray.push(newPercentCorrect);

    setPercentCorrectArray(percentCorrectArray);
  };

  const generateNextQuestion = () => {
    if (Math.random() < questionLikelihood.two + questionLikelihood.one) {
      // generate level 1 or 2
      if (Math.random() < 0.5) {
        // level 1
        if (Math.random() < advancedUserModel.one) {
          return {
            level: 1,
            correct: true,
          };
        } else {
          return {
            level: 1,
            correct: false,
          };
        }
      } else {
        // level 2
        if (Math.random() < advancedUserModel.two) {
          return {
            level: 2,
            correct: true,
          };
        } else {
          return {
            level: 2,
            correct: false,
          };
        }
      }
    } else {
      //generate level 3
      if (Math.random() < advancedUserModel.three) {
        return {
          level: 3,
          correct: true,
        };
      } else {
        return {
          level: 3,
          correct: false,
        };
      }
    }
  };

  useEffect(() => {
    getTypeCount();
    getPercentCorrect();
  }, []);

  const addRandom = useCallback(
    (iterations) => {
      for (let i = 0; i < iterations; i += 1) {
        const nextLabel = parseInt(labelsForNum[labelsForNum.length - 1]) + 1;
        labelsForNum.push(nextLabel.toString());
        setLabelsForNum(labelsForNum);

        const nextQuestion = generateNextQuestion();
        questionHistoryArray.push(nextQuestion);
        setQuestionHistoryArray(questionHistoryArray);

        getPercentCorrect();

        getTypeCount();
      }
    },
    [labelsForNum, questionHistoryArray],
  );

  let dataForPercentCorrect = {
    labels: labelsForNum,
    datasets: [
      {
        label: "Total % Correct",
        data: percentCorrectArray,
        borderColor: "green",
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  let dataForLevelCount = {
    labels: labelsForNum,
    datasets: [
      {
        label: "Level One Count",
        data: levelOneCountArray,
        borderColor: "red",
        pointRadius: 0,
        tension: 0.1,
      },
      {
        label: "Level Two Count",
        data: levelTwoCountArray,
        borderColor: "blue",
        pointRadius: 0,
        tension: 0.1,
      },
      {
        label: "Level Three Count",
        data: levelThreeCountArray,
        borderColor: "purple",
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };
  let dataForQuestionLevelCount = {
    labels: [1, 2, 3],
    datasets: [
      {
        label: "Total of Level",
        data: typeCountArray,
        backgroundColor: "rgba(53, 162, 235)",
      },
      {
        label: "Total Right of Level",
        data: totalRightPerLevel,
        backgroundColor: "green",
      },
      {
        label: "Total Wrong of Level",
        data: totalWrongPerLevel,
        backgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid item xs={12} md={4}>
          <Line options={optionsForNum} data={dataForPercentCorrect} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Bar options={optionsForQuestionLevelCount} data={dataForQuestionLevelCount} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Line options={optionsForNum} data={dataForLevelCount} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            onClick={() => {
              addRandom(100);
            }}
          >
            Add 100 Random Questions
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserEmulator;
// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
// const labelsForTopics = ["Insertion", "Selection", "Merge", "Quick"];
// const labelsForTypes = ["Swaps", "Time", "Space", "Code"];

// const UserPlayground = () => {
//   const [getMessage, setGetMessage] = useState({});
//   const [text, setText] = useState("");

//   const sendToFlask = () => {
//     axios
//       .post("http://localhost:8000/flask/hello", {
//         resultStatus: "SUCCESS",
//         message: text,
//       })
//       .then((res) => {
//         setGetMessage(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     sendToFlask();
//   }, [text]);

//   return (
//     <Container>
//       <TextField
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//       {getMessage.status === 200 ? (
//         <Typography>{getMessage.data.message}</Typography>
//       ) : (
//         <Typography>Type something</Typography>
//       )}
//       <Button
//         variant="contained"
//         onClick={() => {
//           sendToFlask();
//         }}
//       >
//         Send
//       </Button>
//     </Container>
//   );
// };
