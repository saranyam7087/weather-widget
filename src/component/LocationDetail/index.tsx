import * as React from 'react';
import { LocationdetailProps } from 'types/weather';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import moment from 'moment';

const StyledSpan = styled.span`
  font-size: 1.52rem;
  display: inline-block;
`;

export const StyledImg = styled.img`
  vertical-align: middle;
  width: 70px;
  height: 70px;
`;

function LocationDetail({ dt, temp, name, weather }: LocationdetailProps) {
  const formattedDate = moment(dt).format('dddd, MMMM Do');
  const { icon, description } = weather;
  return (
    <div>
      <Typography variant="h6" component="h1" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2">{formattedDate}</Typography>
      <StyledSpan>
        <StyledImg
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        ></StyledImg>
        {Math.trunc(temp - 273.15)}&deg;C
      </StyledSpan>
    </div>
  );
}

export default LocationDetail;
