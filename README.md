# OpenWeather Wrapper API

A simple and easy-to-use wrapper for the OpenWeather API to fetch weather data for a given city. It allows you to get current weather information such as temperature, humidity, weather conditions, and wind speed.

---

## Features

- Fetch weather data for any city.
- Retrieves information such as temperature, weather description, humidity, and wind speed.
- Uses `.env` file to securely store and load the OpenWeather API key.

---
## Install
Simply install the package with
```
npm i openweather-wrapper-api
```

---

## Setup

### 1. **Get your OpenWeather API Key**

To use the OpenWeather API, you need an API key. You can get it for free by signing up on [OpenWeather](https://openweathermap.org/).

### 2. **Set up the `.env` file**

Create a `.env` file in the root directory of the project and add your OpenWeather API key like so:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the API key you obtained from OpenWeather.

> **Important:** Make sure your `.env` file is **not** committed to version control (e.g., Git). You can add `.env` to your `.gitignore` file to prevent it from being tracked.

### 3. **Install dependencies**

Once you have the `.env` file set up, you need to install the necessary dependencies. Run the following command in your terminal:

```bash
npm install
```

This will install the `axios` and `dotenv` dependencies required to interact with the OpenWeather API and load environment variables.

---

## Usage

After setting up your environment and installing the necessary dependencies, you can start using the package to fetch weather data.

### 1. **Import the Package**

In your JavaScript code, import the `getWeatherByCity` function from the package:

```js
const { getWeatherByCity } = require('openweather-wrapper-api');
```

### 2. **Get Weather Data for a City**

You can now call `getWeatherByCity(city)` to get the weather information for a specific city. Make sure to replace `"city"` with the name of the city you want to look up.

Here is an example:

```js
const { getWeatherByCity } = require('openweather-wrapper-api');

// Fetch weather data for a city
async function getWeather() {
  try {
    const weather = await getWeatherByCity('Berlin');
    console.log(`Weather in ${weather.city}:`);
    console.log(`Temperature: ${weather.temperature}°C`);
    console.log(`Weather: ${weather.weather}`);
    console.log(`Humidity: ${weather.humidity}%`);
    console.log(`Wind Speed: ${weather.windSpeed} m/s`);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

getWeather();
```

### 3. **Sample Output**

Here is an example of the output you will receive:

```
Weather in Berlin:
Temperature: 15°C
Weather: Clear sky
Humidity: 50%
Wind Speed: 3.6 m/s
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

If you'd like to contribute to this project, feel free to open an issue. Any contributions, whether small or large, are welcome!

---

## Thank You!

Thank you for using the OpenWeather Wrapper API! If you have any questions, feel free to open an issue or reach out.

Enjoy coding! 😊
