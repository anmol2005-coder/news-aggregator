import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err); // 👈 important for debugging
    res.status(500).json({ message: "Error registering user" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Include password explicitly
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ❗ IMPORTANT: Check if JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing in .env");
      return res.status(500).json({ message: "Server configuration error" });
    }

    // ✅ Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Send safe user data only
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err); // 👈 VERY IMPORTANT
    res.status(500).json({ message: "Error logging in" });
  }
});

export default router;