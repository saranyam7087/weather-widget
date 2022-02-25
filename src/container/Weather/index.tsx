import React, { useEffect, useMemo, useState } from 'react';
import LocationDetail from '../../component/LocationDetail';
import WeatherDetail from '../../component/WeatherDetail';
import { WeatherResponse } from 'types/weather';

function Weather() {
  useEffect(() => {});

  return (
    <>
      <LocationDetail />
      <WeatherDetail />
      <h2>Weather component</h2>
    </>
  );
}

export default Weather;
