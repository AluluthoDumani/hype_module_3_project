import express from "express";  
import { loginUser, registerUser } from "../controller/authCon.js";
const router = express.Router();
 
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
