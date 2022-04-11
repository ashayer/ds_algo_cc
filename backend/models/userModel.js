import mongoose from "mongoose";

//model for user document in database
const userSchema = mongoose.Schema(
  {
    // auth data to store
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    points: { type: Number, required: true },
    // game data to store
    responseTime: { type: Number, required: true },
    streak: { type: Number, required: true },
    numCorrect: { type: Number, required: true },
    numWrong: { type: Number, required: true },
    gamesPlayed: { type: Number, required: true },
    algoReading: [{}],
    dataReading: [{}],
    predictModel: {
      one: Number,
      two: Number,
      three: Number,
    },
  },
  {
    collection: "usersdev",
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
