import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, points } = req.body;
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
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      points: user.points,
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
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

export const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const updatePoints = asyncHandler(async (req, res) => {
  
})

// export const updatePoints = async (req, res) => {
// change to req.params.id
//   const { id } = req.params;
//   const newPoints = req.body;
//   const updatedPoints = await User.findByIdAndUpdate(id, newPoints);
//   res.json(updatedPoints);
// };

// export const getPoints = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const points = await User.findById(id);
//     res.status(200).json(points);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };