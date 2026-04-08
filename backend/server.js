import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import newsRoutes from "./routes/news.js";
import bookmarkRoutes from "./routes/bookmark.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/news", newsRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});