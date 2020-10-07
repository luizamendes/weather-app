import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ selectedSpot, setSelectedSpot }) => {
  const handleClick = (e) => {
    setSelectedSpot(e.latlng);
  };

  return (
    <Map
      center={{
        lat: -22.9035,
        lng: -43.2096,
      }}
      zoom={12}
      onClick={handleClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedSpot && (
        <Marker
          position={[selectedSpot.lat, selectedSpot.lng]}
          icon={LocationIcon}
        />
      )}
    </Map>
  );
};

export { MapComponent };
