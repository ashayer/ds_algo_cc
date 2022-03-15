import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gameService from "./gameService";

const user = JSON.parse(sessionStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//updatePoints({
//       userId: user._id,
//       userPoints: 2554,
//     })
export const updatePoints = createAsyncThunk(
  "auth/update",
  async (userInfo, thunkAPI) => {
    const { userId, userPoints, userResponseTime } = userInfo;
    try {
      return await gameService.updatePoints(userId, userPoints, userResponseTime);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPoints = createAsyncThunk(
  "auth/getPoints",
  async (userId, thunkAPI) => {
    try {
      return await gameService.getPoints(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const gameSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePoints.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePoints.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user.points = action.payload;
      })
      .addCase(updatePoints.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(getPoints.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPoints.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getPoints.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = gameSlice.actions;
export default gameSlice.reducer;
