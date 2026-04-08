import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?token=${process.env.GNEWS_API_KEY}&lang=en`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;