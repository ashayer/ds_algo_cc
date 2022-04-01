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
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const optionsForNum = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "% Correct",
    },
  },
  scales: {
    y: {
        min: 0,
        max: 100,
    }
}
};

const UserEmulator = () => {
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [percentCorrect, setPercentCorrect] = useState(0);
  const [typeCountArray, setTypeCountArray] = useState([0, 0, 0, 0]);
  const [topicCountArray, setTopicCountArray] = useState([0, 0, 0, 0]);
  const [labelsForNum, setLabelsForNum] = useState(["10"]);
  let dataForNum = {
    labels: labelsForNum,
    datasets: [
      {
        data: labelsForNum.map(() => Math.floor(Math.random() * 100)),
      },
    ],
  };

  const addRandom = useCallback(() => {
    const nextLabel = parseInt(labelsForNum[labelsForNum.length - 1]) + 5;
    setLabelsForNum([...labelsForNum, nextLabel.toString()]);
  }, [labelsForNum]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4">User Emulator</Typography>
      <Grid container>
        <Grid item xs={12} md={4} sx={{ backgroundColor: "white" }}>
          <Line options={optionsForNum} data={dataForNum} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              addRandom();
            }}
          >
            Add random value and label
          </Button>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Bar options={options} data={data} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Bar options={options} data={data} />
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
