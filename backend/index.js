import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddle.js";
import { connectDB } from "./config/db.js";
import { URL } from "url";
//! use cors

connectDB();

//initialize express
const app = express();
//initialize dotenv
dotenv.config();

//middleware function that parses request with JSON payloads
app.use(express.json());

//parses data with querystring library
app.use(express.urlencoded({ extended: false }));

//create api path for user requests
app.use("/api/users", userRoutes);

//uses errorHandler middleware
app.use(errorHandler);

// app.use(express.static(path.join(__dirname, "../../frontend/build")));

const __filename = new URL("", import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL(".", import.meta.url).pathname;

const pathToBuildFolder = new URL("../../frontend/build", import.meta.url).pathname;
const pathToIndexHTML = new URL("../frontend/build/index.html", import.meta.url).pathname;

console.log(pathToIndexHTML);
app.use(express.static(pathToBuildFolder));

app.get("*", (req, res) =>
  res.sendFile(pathToIndexHTML),
);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
