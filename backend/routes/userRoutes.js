import express from "express";
import { registerUser, loginUser, updatePoints, getPoints } from "../controllers/userController.js";
import protect from "../middleware/authMiddle.js";
const router = express.Router();


//the various routes the users has options for 
router.post("/", registerUser);
router.post("/login", loginUser);
router.patch('/user/:id', updatePoints); //!does not properly authenticate so cannot use protect middleware
router.get('/user/:id', getPoints);

export default router;
