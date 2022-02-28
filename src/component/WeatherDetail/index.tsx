import * as React from 'react';
import { WeatherDetailProps } from 'types/weather';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const StyledDiv = styled.div`
  align-self: center;
  width: 30%;
`;

function WeatherDetail({
  humidity,
  uvi,
  windDeg,
  windSpeed,
}: WeatherDetailProps) {
  const getWindDirection = (degree: number) => {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) {
      return 'NE';
    }
    return 'N';
  };
  return (
    <StyledDiv>
      <Typography variant="body2">Humidity: {humidity}%</Typography>
      <Typography variant="body2">UVI Index: {uvi}</Typography>
      <Typography variant="body2">
        Wind: {windSpeed + ' kph '}
        {getWindDirection(windDeg)}
      </Typography>
    </StyledDiv>
  );
}

export default WeatherDetail;
