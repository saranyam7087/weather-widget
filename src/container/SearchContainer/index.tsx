import React, { useState, useMemo, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { SearchProps, Location, GeoResponse } from 'types/search';
import { isEqual, throttle } from 'lodash';
import apiClient from 'api';

function SearchContainer({ onLocationChange }: SearchProps) {
  const [value, setValue] = useState<Location | null>(null);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = React.useState<Location[]>([]);

  const fortmatResponse = (resData: Location[]) => {
    return resData.map((data) => {
      const { lat, lon, state, name } = data;
      return { lat, lon, state, name };
    });
  };

  const fetch = useMemo(
    () =>
      throttle(async (request: { input: string }) => {
        try {
          const res: GeoResponse = await apiClient.get(
            `/geo/1.0/direct?q=${request.input}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );
          const result = res.data;
          const formattedResult = fortmatResponse(result);
          setOptions(formattedResult);
        } catch (err) {}
      }, 200),
    []
  );

  useEffect(() => {
    if (inputValue === '') {
      return undefined;
    }

    fetch({ input: inputValue });
  }, [inputValue, fetch]);

  const handleInputChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value);

    if (!value) {
      setOpen(false);
    }
  };

  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: Location | null
  ) => {
    setValue(value);
    value && onLocationChange(value);
  };

  return (
    <Autocomplete
      value={value}
      open={open}
      onOpen={() => {
        if (inputValue) {
          setOpen(true);
        }
      }}
      onClose={() => setOpen(false)}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={handleChange}
      options={options}
      isOptionEqualToValue={(option: Location, value: Location) =>
        isEqual(option, value)
      }
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search City" variant="outlined" />
      )}
      getOptionLabel={(option) => option.name + ' , ' + option.state}
    />
  );
}

export default SearchContainer;
