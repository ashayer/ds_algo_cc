import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddle.js";
import { connectDB } from "./config/db.js";
import { URL } from 'url';
import path from "path";
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

const __dirname = new URL('.', import.meta.url).pathname;

app.use(express.static('../frontend/build/'));


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join("../frontend", "/build/")});
});


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
