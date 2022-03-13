import express from "express";
import { registerUser, loginUser, getUser } from "../controllers/userController.js";
import protect from "../middleware/authMiddle.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user",protect, getUser);


// router.patch('/:id', updatePoints);
// router.get('/:id', getPoints);

export default router;
