import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Weather from './container/Weather';
import SearchContainer from 'container/SearchContainer';
import { Location } from 'types/search';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [location, setLocation] = useState<Location>({
    lat: -37.8142176,
    lon: 144.9631608,
    name: 'Melbourne',
    state: 'Victoria',
  });

  const onLocationChange = (location: Location) => {
    setLocation(location);
  };

  return (
    <StyledDiv>
      <SearchContainer onLocationChange={onLocationChange} />
      <Weather {...location} />
    </StyledDiv>
  );
}

export default App;
