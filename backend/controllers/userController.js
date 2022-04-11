import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import AlgoSectionArray from "../models/structureSectionReading.js";
import StructureSectionArray from "../models/structureSectionReading.js";

export const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Missing field");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    points: 0,
    responseTime: 0,
    streak: 0,
    numCorrect: 0,
    numWrong: 0,
    gamesPlayed: 0,
    algoReading: AlgoSectionArray,
    dataReading: StructureSectionArray,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      points: user.points,
      responseTime: user.responseTime,
      streak: user.streak,
      numCorrect: user.numCorrect,
      numWrong: user.numWrong,
      gamesPlayed: user.gamesPlayed,
      algoReading: user.algoReading,
      dataReading: user.dataReading,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      points: user.points,
      responseTime: user.responseTime,
      streak: user.streak,
      numCorrect: user.numCorrect,
      numWrong: user.numWrong,
      gamesPlayed: user.gamesPlayed,
      algoReading: user.algoReading,
      dataReading: user.dataReading,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//req body is {points: points, responseTime: time}
//! add error catches
export const updatePoints = asyncHandler(async (req) => {
  await User.findByIdAndUpdate(req.params.id, {
    points: req.body.points,
    responseTime: req.body.responseTime,
    streak: req.body.streak,
    numCorrect: req.body.numCorrect,
    numWrong: req.body.numWrong,
  });
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select(
    "name points responseTime streak numCorrect numWrong gamesPlayed",
  );
  res.status(200).json(users);
});
