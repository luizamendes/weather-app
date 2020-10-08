import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchWeather } from '../../api/weather';
import { Button } from '../../components/Button';
import { MapComponent } from '../../components/MapComponent';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export const Homepage = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [nearestCities, setNearestCities] = useState([]);
  const [searchButtonText, setSearchButtonText] = useState('Search');

  const handleFetch = async () => {
    const { lat, lng } = selectedSpot;

    try {
      setSearchButtonText('Searching...');
      const { data } = await fetchWeather(lat, lng);
      setNearestCities(data.list);
    } catch (error) {
      toast.error(`Erro: ${error.response.data.message || 'Unexpected error'}`);
    } finally {
      setSearchButtonText('Search');
    }
  };

  useEffect(() => {
    setNearestCities([]);
  }, [selectedSpot]);

  const renderCityList = () => {
    if (nearestCities.length === 0) return null;

    return (
      <>
        <Button secondary onClick={() => setNearestCities([])}>
          Clear results
        </Button>
        <p>Click on one place to see more details</p>
        <ul>
          {nearestCities.map((city) => {
            const { id, name, main } = city;
            const { temp, temp_min, temp_max } = main;
            return (
              <li key={id}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`/weather?place=${name}&max=${temp_max}&min=${temp_min}&current=${temp}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <main className="app">
        <MapComponent
          selectedSpot={selectedSpot}
          setSelectedSpot={setSelectedSpot}
        />
        <nav className="controls">
          <p>Select a place on the map and click search</p>
          <Button disabled={!selectedSpot} onClick={handleFetch}>
            {searchButtonText}
          </Button>
          {renderCityList()}
        </nav>
      </main>
    </>
  );
};
