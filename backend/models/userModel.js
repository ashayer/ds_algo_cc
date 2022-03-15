import mongoose from "mongoose";

//model for user document in database
//! add more parameters for data collection
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    points: { type: Number, required: true },
    responseTime: { type: Number, required: true},
    streak: { type: Number, required: true},
    numCorrect: { type: Number, required: true},
    numWrong: { type: Number, required: true}
    
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
