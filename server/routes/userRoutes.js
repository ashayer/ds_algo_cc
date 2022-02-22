import express from "express";
import {signin, signup, updatePoints, getPoints} from "../controllers/userController.js";
import auth from "../middleware/authMiddle.js";
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id', auth, updatePoints);
router.get('/:id', auth,getPoints);

export default router;