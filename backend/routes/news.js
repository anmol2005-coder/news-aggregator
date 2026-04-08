import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category = "general", q } = req.query;

    let url;

    if (q && q.trim() !== "") {
      url = `https://gnews.io/api/v4/search?q=${q}&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;
    } else if (category === "all") {
      url = `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;
    }

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;