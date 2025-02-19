require('dotenv').config();
const axios = require('axios');

// API-Key aus der Umgebungsvariable
const apiKey = process.env.OPENWEATHER_API_KEY;
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 *
 * @param {string} city - Name of the city where the weather is collected from
 * @returns {Promise<object>}
 */
async function getWeatherByCity(city) {
  if (!apiKey) {
    throw new Error('API-Schlüssel nicht gefunden. Stelle sicher, dass er in der .env-Datei definiert ist.');
  }

  try {
    const response = await axios.get(baseURL, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
    });

    const data = response.data;
    return {
      city: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  } catch (error) {
    console.error('Fehler beim Abrufen des Wetters:', error);
    throw error;
  }
}

module.exports = { getWeatherByCity };
