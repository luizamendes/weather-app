import axios from 'axios';

const openApiKey = process.env.REACT_APP_OPENAI_KEY;

const fetchWeather = (lat, long) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&cnt=15&APPID=${openApiKey}&units=metric`
  );

export { fetchWeather };
