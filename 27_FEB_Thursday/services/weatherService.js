// const axios = require("axios");
// const { OPENWEATHER_API_KEY } = require("../config/config");

// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// // Fetch current weather by city
// const getCurrentWeather = async (city) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/weather`, {
//       params: {
//         q: city,
//         appid: OPENWEATHER_API_KEY,
//         units: "metric", // Default to Celsius
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch current weather");
//   }
// };

// // Fetch 5-day forecast
// const getForecast = async (city) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/forecast`, {
//       params: {
//         q: city,
//         appid: OPENWEATHER_API_KEY,
//         units: "metric",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch forecast data");
//   }
// };

// // Fetch Air Quality Index (AQI)
// const getAQI = async (city) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/air_pollution`, {
//       params: {
//         q: city,
//         appid: OPENWEATHER_API_KEY,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch AQI data");
//   }
// };

// // Fetch weather alerts
// const getWeatherAlerts = async (city) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/onecall`, {
//       params: {
//         q: city,
//         appid: OPENWEATHER_API_KEY,
//         exclude: "current,minutely,hourly,daily",
//       },
//     });
//     return response.data.alerts || [];
//   } catch (error) {
//     throw new Error("Failed to fetch weather alerts");
//   }
// };

// // Fetch historical weather data
// const getHistoricalWeather = async (city, date) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/timemachine`, {
//       params: {
//         q: city,
//         dt: Math.floor(new Date(date).getTime() / 1000), // Convert date to UNIX timestamp
//         appid: OPENWEATHER_API_KEY,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch historical weather data");
//   }
// };

// module.exports = {
//   getCurrentWeather,
//   getForecast,
//   getAQI,
//   getWeatherAlerts,
//   getHistoricalWeather,
// };
const axios = require("axios");
const { OPENWEATHER_API_KEY } = require("../config/config");

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// ✅ Fetch Current Weather
const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: "metric", // Change to "imperial" for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error.message);
    throw new Error("Failed to fetch current weather");
  }
};

// ✅ Fetch 5-Day Forecast
const getForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error.message);
    throw new Error("Failed to fetch weather forecast");
  }
};

module.exports = { getCurrentWeather, getForecast };
