import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import newsRoutes from "./routes/news.js";
import bookmarkRoutes from "./routes/bookmark.js";

//authorization
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Routes
app.use("/api/news", newsRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

//authorization route
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});