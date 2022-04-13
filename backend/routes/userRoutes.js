import express from "express";
import { registerUser, loginUser, updatePoints, getUsers, updateAlgoReading } from "../controllers/userController.js";
// eslint-disable-next-line no-unused-vars
import protect from "../middleware/authMiddle.js";
const router = express.Router();

//the various routes the users has options for
router.post("/", registerUser);
router.post("/login", loginUser);
router.patch("/user/:id", updatePoints); //!does not properly authenticate so cannot use protect middleware
router.get("/users", getUsers);
router.patch("/updateAlgo/:id", updateAlgoReading);
export default router;
