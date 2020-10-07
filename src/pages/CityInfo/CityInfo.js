import React, { useEffect, useState } from "react";
import "./index.css";

export const CityInfo = () => {
  const [place, setPlace] = useState("");
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  const queryString = window.location.search;

  useEffect(() => {
    const urlParams = new URLSearchParams(queryString);
    setMaxTemp(urlParams.get("max"));
    setMinTemp(urlParams.get("min"));
    setPlace(urlParams.get("place"));
    setCurrentTemp(urlParams.get("current"));
  }, [queryString]);

  return (
    <>
      <h2>Temperature at: {place}</h2>
      <p>Current temperature: {currentTemp}</p>
      <p>Maximum temperature: {maxTemp}</p>
      <p>Minimum temperature: {minTemp}</p>
    </>
  );
};
