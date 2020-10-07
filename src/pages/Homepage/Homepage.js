import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetch } from "../../api";
import { MapComponent } from "../../components/MapComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

export const Homepage = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [nearestCities, setNearestCities] = useState([]);
  console.log("App -> nearestCities", nearestCities);

  const handleFetch = async () => {
    const { lat, lng } = selectedSpot;

    try {
      const { data } = await fetch(lat, lng);
      setNearestCities(data.list);
    } catch (error) {
      toast.error("Erro: ", error.message);
    }
  };

  useEffect(() => {
    setNearestCities([]);
  }, [selectedSpot]);

  const renderCityList = () => {
    if (nearestCities.length === 0) return null;

    return (
      <>
        <p>Click on one place to see more details</p>
        <ul>
          {nearestCities.map((city) => {
            const { id, name, main } = city;
            const { temp, temp_min, temp_max } = main;
            return (
              <li key={id}>
                <Link
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
      <div className="app">
        <MapComponent
          selectedSpot={selectedSpot}
          setSelectedSpot={setSelectedSpot}
        />
        <div className="controls">
          <button
            disabled={!selectedSpot}
            className="search-btn"
            onClick={handleFetch}
          >
            Search
          </button>
          {renderCityList()}
        </div>
      </div>
    </>
  );
};
