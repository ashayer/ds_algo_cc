import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddle.js";
import {getGoals, setGoal, updateGoal, deleteGoal} from "../controllers/goalController.js"


router.get("/", getGoals);
router.post("/", setGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

export default router;
