/* eslint-disable */
import React, { useEffect, useState, useCallback } from "react";
import { Box, Button, Grid } from "@mui/material";
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
import MPCHandler from "./MPCPlanner";

// const optionsForNum = {
//   responsive: true,
//   plugins: {
//     title: {
//       display: true,
//     },
//   },
//   scales: {},
// };

// const optionsForQuestionLevelCount = {
//   responsive: true,
//   plugins: {
//     title: {
//       display: true,
//       text: "Question Levels",
//     },
//   },
//   scales: {
//     y: {
//       min: 0,
//     },
//   },
// };

let userModel = {
  one: 0.9,
  two: 0.75,
  three: 0.45,
};

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
Chart.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

const UserEmulator = () => {
  const [batch, setBatch] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  // const [percentCorrect, setPercentCorrect] = useState(0);
  // const [totalWrongPerLevel, setTotalWrongPerLevel] = useState([0, 0, 0]);
  // const [totalRightPerLevel, setTotalRightPerLevel] = useState([0, 0, 0]);
  // const [typeCountArray, setTypeCountArray] = useState([0, 0, 0]);
  // const [labelsForNum, setLabelsForNum] = useState(["10"]);
  // const [percentCorrectArray, setPercentCorrectArray] = useState([]);

  // const [levelOneCountArray, setLevelOneCountArray] = useState([]);
  // const [levelTwoCountArray, setLevelTwoCountArray] = useState([]);
  // const [levelThreeCountArray, setLevelThreeCountArray] = useState([]);

  // const [questionHistoryArray, setQuestionHistoryArray] = useState([]);

  const addRandom = () => {
    const path = MPCHandler(totalCorrect, totalQuestions);
    setBatch(path);
    setCurrentQuestion(path[0]);
  };

  const answerQuestion = (isCorrect) => {
    if (isCorrect) {
      setTotalCorrect(totalCorrect + 1);
      setTotalQuestions(totalQuestions + 1);
    } else {
      setTotalQuestions(totalQuestions + 1);
    }
  };

  useEffect(() => {
    addRandom();
  }, [totalQuestions]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container sx={{ backgroundColor: "white" }}>
        {/* <Grid item xs={12} md={4}>
          <Line options={optionsForNum} data={dataForPercentCorrect} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Bar options={optionsForQuestionLevelCount} data={dataForQuestionLevelCount} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Line options={optionsForNum} data={dataForLevelCount} />
        </Grid> */}
        <Grid item md={1}>
          <table>
            <thead>
              <tr>
                <th>Lvl</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{userModel.one}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{userModel.two}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{userModel.three}</td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid item md={1}>
          {`${batch}`}
        </Grid>
        <Grid item md={1}>
          {`${currentQuestion}`}
        </Grid>
        <Grid item md={1}>
          {`Total Correct - ${totalCorrect}`}
        </Grid>
        <Grid item md={2}>
          {`Total Questions - ${totalQuestions}`}
        </Grid>
        <Grid item md={1}>
          {`Percent Correct - ${((totalCorrect / totalQuestions) * 100).toFixed(2)}`}
        </Grid>
        <Grid item md={6}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "green" }}
            onClick={() => {
              answerQuestion(true);
            }}
          >
            Answer Correct
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red" }}
            onClick={() => {
              answerQuestion(false);
            }}
          >
            Answer Wrong
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

// let dataForPercentCorrect = {
//   labels: labelsForNum,
//   datasets: [
//     {
//       label: "Total % Correct",
//       data: percentCorrectArray,
//       borderColor: "green",
//       pointRadius: 0,
//       tension: 0.1,
//     },
//   ],
// };

// let dataForLevelCount = {
//   labels: labelsForNum,
//   datasets: [
//     {
//       label: "Level One Count",
//       data: levelOneCountArray,
//       borderColor: "red",
//       pointRadius: 0,
//       tension: 0.1,
//     },
//     {
//       label: "Level Two Count",
//       data: levelTwoCountArray,
//       borderColor: "blue",
//       pointRadius: 0,
//       tension: 0.1,
//     },
//     {
//       label: "Level Three Count",
//       data: levelThreeCountArray,
//       borderColor: "purple",
//       pointRadius: 0,
//       tension: 0.1,
//     },
//   ],
// };

// let dataForQuestionLevelCount = {
//   labels: [1, 2, 3],
//   datasets: [
//     {
//       label: "Total of Level",
//       data: typeCountArray,
//       backgroundColor: "rgba(53, 162, 235)",
//     },
//     {
//       label: "Total Right of Level",
//       data: totalRightPerLevel,
//       backgroundColor: "green",
//     },
//     {
//       label: "Total Wrong of Level",
//       data: totalWrongPerLevel,
//       backgroundColor: "rgba(255, 99, 132)",
//     },
//   ],
// };
