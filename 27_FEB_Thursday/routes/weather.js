const express = require("express");
const router = express.Router();
const weatherService = require("../services/weatherService");

router.get("/current", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const weatherData = await weatherService.getCurrentWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/forecast", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const forecastData = await weatherService.getForecast(city);
    res.json(forecastData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
