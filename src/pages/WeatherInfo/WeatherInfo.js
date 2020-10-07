import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import './index.css';

export const WeatherInfo = () => {
  const [place, setPlace] = useState('');
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  const queryString = window.location.search;

  useEffect(() => {
    const urlParams = new URLSearchParams(queryString);
    setMaxTemp(urlParams.get('max'));
    setMinTemp(urlParams.get('min'));
    setPlace(urlParams.get('place'));
    setCurrentTemp(urlParams.get('current'));
  }, [queryString]);

  return (
    <div className="weather-info">
      <div className="weather-info__content">
        <h2>Temperature</h2>
        <h3>{place}</h3>
        <p>
          <spam>Current temperature: </spam>
          {currentTemp}
          °C
        </p>
        <p>
          <spam>Maximum temperature: </spam>
          {maxTemp}
          °C
        </p>
        <p>
          <spam>Minimum temperature: </spam>
          {minTemp}
          °C
        </p>
        <Button onClick={() => window.close()}>Return to map</Button>
      </div>
    </div>
  );
};
