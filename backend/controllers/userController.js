import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, skill, qTypeCount, qTopicCount } = req.body;
  if (!name || !email || !password || !skill) {
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
    skill,
    points: 0,
    responseTime: 0,
    streak: 0,
    numCorrect: 0,
    numWrong: 0,
    qTypeCount: [0,0,0,0],
    qTopicCount: [0,0,0,0],
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      skill: user.skill,
      points: user.points,
      responseTime: user.responseTime,
      streak: user.streak,
      numCorrect: user.numCorrect,
      numWrong: user.numWrong,
      qTypeCount: user.qTypeCount,
      qTopicCount: user.qTopicCount,
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
      skill: user.skill,
      points: user.points,
      responseTime: user.responseTime,
      streak: user.streak,
      numCorrect: user.numCorrect,
      numWrong: user.numWrong,
      qTypeCount: user.qTypeCount,
      qTopicCount: user.qTopicCount,
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
export const updatePoints = asyncHandler(async (req, res) => {
  console.log(req.body);
  const user = await User.findByIdAndUpdate(req.params.id, {
    points: req.body.points,
    responseTime: req.body.responseTime,
    streak: req.body.streak,
    numCorrect: req.body.numCorrect,
    numWrong: req.body.numWrong,
    qTypeCount: req.body.qTypeCount,
    qTopicCount: req.body.qTopicCount,
  });
});

export const getPoints = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log("The user current has " + user.points + " points");
  res.status(200).json(user.points);
});
