import z from "zod";
import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  // fields if needed
});

export default authSchema;

export const registerSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  confirmPassword: z.string().min(5, "Please confirm your password"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});