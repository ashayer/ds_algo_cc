import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
import { Line, Bar } from "react-chartjs-2";
import MPCHandler from "./MPCPlanner";

const optionsForNum = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
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
const learningRate = 0.15;
const UserEmulator = () => {
  const [batch, setBatch] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userModel, setUserModel] = useState({
    one: 0.9,
    two: 0.75,
    three: 0.45,
  });

  const [totalWrongPerLevel, setTotalWrongPerLevel] = useState([0, 0, 0]);
  const [totalRightPerLevel, setTotalRightPerLevel] = useState([0, 0, 0]);
  const [typeCountArray, setTypeCountArray] = useState([0, 0, 0]);

  const [labelsForNum, setLabelsForNum] = useState(["0"]);
  const [percentCorrectArray, setPercentCorrectArray] = useState([]);

  const addRandom = () => {
    if (totalQuestions === 0) {
      percentCorrectArray.push(0);
    } else {
      percentCorrectArray.push(totalCorrect / totalQuestions);
    }
    setPercentCorrectArray(percentCorrectArray);
    const path = MPCHandler(totalCorrect, totalQuestions, userModel);
    setBatch(path);
    setCurrentQuestion(path[0]);
  };

  const answerQuestion = (isCorrect) => {
    if (isCorrect) {
      totalRightPerLevel[currentQuestion - 1] += 1;
      setTotalRightPerLevel(totalRightPerLevel);

      setTotalCorrect(totalCorrect + 1);
      setTotalQuestions(totalQuestions + 1);
      if (currentQuestion === 1) {
        userModel.one = parseFloat((userModel.one + learningRate * (1 - userModel.one)).toFixed(3));
      } else if (currentQuestion === 2) {
        userModel.two = parseFloat((userModel.two + learningRate * (1 - userModel.two)).toFixed(3));
      } else {
        userModel.three = parseFloat(
          (userModel.three + learningRate * (1 - userModel.three)).toFixed(3),
        );
      }
      setUserModel(userModel);
    } else {
      totalWrongPerLevel[currentQuestion - 1] += 1;
      setTotalWrongPerLevel(totalWrongPerLevel);

      setTotalQuestions(totalQuestions + 1);
      if (currentQuestion === 1) {
        userModel.one = parseFloat((userModel.one + learningRate * (0 - userModel.one)).toFixed(3));
      } else if (currentQuestion === 2) {
        userModel.two = parseFloat((userModel.two + learningRate * (0 - userModel.two)).toFixed(3));
      } else {
        userModel.three = parseFloat(
          (userModel.three + learningRate * (0 - userModel.three)).toFixed(3),
        );
      }
      setUserModel(userModel);
    }

    typeCountArray[currentQuestion - 1] += 1;
    setTypeCountArray(typeCountArray);

    const nextLabel = parseInt(labelsForNum[labelsForNum.length - 1], 10) + 1;
    labelsForNum.push(nextLabel.toString());
    setLabelsForNum(labelsForNum);
  };

  useEffect(() => {
    addRandom();
  }, [totalQuestions]);

  const dataForPercentCorrect = {
    labels: labelsForNum,
    datasets: [
      {
        label: "Total % Correct",
        data: percentCorrectArray,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };

  const dataForQuestionLevelCount = {
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
                <td>{userModel.one.toFixed(3)}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{userModel.two.toFixed(3)}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{userModel.three.toFixed(3)}</td>
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
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid item xs={12} md={4}>
          <Line options={optionsForNum} data={dataForPercentCorrect} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Bar options={optionsForQuestionLevelCount} data={dataForQuestionLevelCount} />
        </Grid>
        {/*
        <Grid item xs={12} md={4}>
          <Line options={optionsForNum} data={dataForLevelCount} />
        </Grid> */}
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
