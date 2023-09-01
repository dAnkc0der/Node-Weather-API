const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const API_KEY = "YOUR_API_KEY";

app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;
    const weatherData = await fetchWeatherData(cities);
    res.json({ weather: weatherData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching weather data' });
  }
});

async function fetchWeatherData(cities) {
  const weatherData = {};

  const requests = cities.map(async city => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const temperature = response.data.main.temp;
      weatherData[city] = `${temperature}°C`;
    } catch (error) {
      console.error(`Error fetching weather for ${city}:`, error);
      weatherData[city] = 'N/A';
    }
  });

  await Promise.all(requests);

  return weatherData;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
