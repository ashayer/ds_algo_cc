import express from "express";
import {
  registerUser,
  loginUser,
  updatePoints,
  getUsers,
  updateAlgoReading,
  updateDataReading,
} from "../controllers/userController.js";
// eslint-disable-next-line no-unused-vars
import protect from "../middleware/authMiddle.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.patch("/user/:id", updatePoints); //!does not properly authenticate so cannot use protect middleware
router.get("/users", getUsers);
router.patch("/updateAlgo/:id", updateAlgoReading);
router.patch("/updateData/:id", updateDataReading);
export default router;
