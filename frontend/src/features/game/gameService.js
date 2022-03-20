import axios from "axios";

const API_URL = "/api/users/";

const updatePoints = async (
  userId,
  userPoints,
  userResponseTime,
  userNumCorrect,
  userNumWrong,
  userQTopicCount,
  userQTypeCount,
  userStreak,
) => {
  const response = await axios.patch(`${API_URL}user/${userId}`, {
    points: userPoints,
    responseTime: userResponseTime,
    streak: userStreak,
    numCorrect: userNumCorrect,
    numWrong: userNumWrong,
    qTypeCount: userQTypeCount,
    qTopicCount: userQTopicCount,
  });

  return response.data;
};

const getPoints = async (userId) => {
  const response = await axios.get(`${API_URL}user/${userId}`);

  return response.data;
};

const gameService = {
  updatePoints,
  getPoints,
};

export default gameService;
