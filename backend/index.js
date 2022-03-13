import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorMiddle.js";
import { connectDB } from "./config/db.js";
const port = 5000;

connectDB();

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
