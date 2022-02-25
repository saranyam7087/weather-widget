import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Weather from './container/Weather';
import SearchContainer from 'container/SearchContainer';
import { Location } from 'types/search';
import { WeatherResponse } from 'types/weather';
import apiClient from 'api';

function App() {
  const [location, setLocation] = useState<Location>({
    lat: -37.8142176,
    lon: 144.9631608,
    name: 'Melbourne',
    state: 'Victoria',
  });

  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      console.log('------------------');

      const { lat, lon } = location;
      try {
        const res = await apiClient.get(
          `/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        const result: WeatherResponse = res.data;
        console.log(result);
        result && setWeather(result);
      } catch (err) {}
    };
    fetchWeather();
  }, [location]);

  const onLocationChange = (location: Location) => {
    setLocation(location);
  };

  const formatedWeather = useMemo(() => {
    if (weather) {
      const { current } = weather;
      const {
        dt,
        temp,
        humidity,
        uvi,
        wind_speed,
        wind_deg,
        weather: weatherIcon,
      } = current;
    }
  }, [weather]);

  return (
    <div className="App">
      <SearchContainer onLocationChange={onLocationChange} />
      <Weather />
    </div>
  );
}

export default App;
