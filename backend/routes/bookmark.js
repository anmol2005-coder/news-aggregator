import express from "express";
import Bookmark from "../models/Bookmark.js";

const router = express.Router();

// Save bookmark
router.post("/", async (req, res) => {
  const bookmark = new Bookmark(req.body);
  await bookmark.save();
  res.json(bookmark);
});

// Get all bookmarks
router.get("/", async (req, res) => {
  const data = await Bookmark.find();
  res.json(data);
});

export default router;