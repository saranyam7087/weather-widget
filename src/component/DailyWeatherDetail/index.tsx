import React from 'react';
import { DailyWeatherDetailProps } from 'types/weather';
import { Typography } from '@mui/material';
import moment from 'moment';
import { StyledImg } from 'component/LocationDetail';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  padding: 0 7px;
  & > * {
    margin: 10px;
  }
`;

const DailyWeatherDetail = ({ daily }: DailyWeatherDetailProps) => {
  return (
    <StyledDiv>
      {daily.map((day, index) => {
        const {
          dt,
          temp: { min, max },
          weather,
        } = day;
        const { icon, description } = weather[0];
        const formattedMin = Math.trunc(min - 273.15);
        const formattedMax = Math.trunc(max - 273.15);
        return (
          <div key={dt + index}>
            <Typography variant="subtitle1">
              {console.log(dt)}
              {index === 0 ? 'Today' : moment(dt).format('dddd')}
            </Typography>
            <StyledImg
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
            <Typography variant="body2">
              {formattedMin}&deg;C
              {'  '}
              {formattedMax}&deg;C
            </Typography>
          </div>
        );
      })}
    </StyledDiv>
  );
};

export default DailyWeatherDetail;
