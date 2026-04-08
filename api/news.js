import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let url = `https://gnews.io/api/v4/top-headlines?token=${process.env.GNEWS_API_KEY}&lang=en`;

    // ✅ ADD THIS PART
    if (category && category !== "all") {
      url += `&topic=${category}`;
    }

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;