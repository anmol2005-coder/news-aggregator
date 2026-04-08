import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { q, category = "general" } = req.query;

    let url;

    if (q && q.trim() !== "") {
      url = `https://gnews.io/api/v4/search?q=${q}&token=${process.env.GNEWS_API_KEY}&lang=en`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&token=${process.env.GNEWS_API_KEY}&lang=en`;
    }

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;