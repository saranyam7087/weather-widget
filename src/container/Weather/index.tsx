import React, { useEffect, useState } from 'react';
import LocationDetail from 'component/LocationDetail';
import WeatherDetail from 'component/WeatherDetail';
import { WeatherResponse } from 'types/weather';
import { Location } from 'types/search';
import apiClient from 'api';
import DailyWeatherDetail from 'component/DailyWeatherDetail';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Weather(location: Location) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  //fecth weather data from api
  useEffect(() => {
    const fetchWeather = async () => {
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

  //pick only required values from response
  if (weather) {
    var {
      dt,
      temp,
      humidity,
      uvi,
      wind_speed,
      wind_deg,
      weather: weatherIcon,
    } = weather.current;
    var { daily } = weather;
  }

  const { name } = location;

  return (
    <Paper elevation={3}>
      {weather && (
        <>
          <StyledDiv>
            <LocationDetail
              dt={dt}
              temp={temp}
              name={name}
              weather={weatherIcon[0]}
            />
            <WeatherDetail
              humidity={humidity}
              uvi={uvi}
              windSpeed={wind_speed}
              windDeg={wind_deg}
            />
          </StyledDiv>
          <DailyWeatherDetail daily={daily} />
        </>
      )}
    </Paper>
  );
}

export default Weather;
