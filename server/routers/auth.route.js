import express from "express";
import { validateBody } from "../middleware/zod.validate.js";
import { loginSchema, registerSchema } from "#schemas/authSchema";
import authMiddleware from "../middleware/auth.js";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "#controllers/authController";

const router = express.Router();

// Register user
router.post("/register", validateBody(registerSchema), registerUser);

// Login user
router.post("/login", validateBody(loginSchema), loginUser);

// Protected route - current user
router.get("/me",authMiddleware, getCurrentUser);

// Logout
router.post("/logout", logoutUser);

export default router;

