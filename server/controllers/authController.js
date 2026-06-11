import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import User from "../models/user.model.js";

// REGISTER
export async function registerUser(req, res) {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    res.status(201).json({
      message: `User ${name} registered successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user", details: error.message });
  }
}

// LOGIN
export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // console.log("User found in databash:", user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid){
      return res.status(401).json({ error: "Invalid password" });
    }

    // if (!process.env.JWT_SECRET) {
    //   throw new Error("JWT_SECRET missing");
    // }

    const token = jwt.sign(
      { id: user._id, role: user.role },     //role play
      process.env.JWT_SECRET,
      { 
        expiresIn: "1h" 
      }
    );

    // const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
      path: "/",
    });

    res.json({
      message: `User ${user.name} logged in successfully`,
      role: user.role,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      error: "Failed to login user",
      errorMessage: error.message,
    });
  }
}

// GET CURRENT USER 
export async function getCurrentUser(req, res) {
  const loggedInUser = req.user;

  // if (loggedInUser.role === "admin") {
  //   console.log("Admin user logged in:", loggedInUser);
  // } else {
  //   console.log("Regular user logged in:", loggedInUser);
  // }

  // console.log("Logged in user from /me endpoint:", loggedInUser);

  try {
    const user = await User.findById(loggedInUser.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

// LOGOUT
export const logoutUser = (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: "Lax",
    path: "/",
  });

  res.json({ message: "Logged out successfully" });
}