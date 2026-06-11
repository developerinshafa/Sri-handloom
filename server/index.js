import express from "express";
import cors from "cors";
import "#utils/loadEnvironment";
import apiRouter from "#routers/index.route";
import path from "path";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import connectDB from "#db/connection";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(import.meta.dirname, "uploads")));

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// All routes go through apiRouter
app.use("/", apiRouter);

await connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});