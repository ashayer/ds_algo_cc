import axios from "axios";

const API_URL = "/api/users/";

const updatePoints = async (userId, userPoints) => {

    const response = await axios.patch(API_URL + "user/" + userId, {
    points: userPoints,
  });

  return response.data;
};

const getPoints = async (userId) => {
  const response = await axios.get(API_URL + "user/" + userId);

  return response.data;

}

const gameService = {
  updatePoints,
  getPoints,
};

export default gameService;
