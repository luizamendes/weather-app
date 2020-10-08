import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LocationIcon } from './LocationIcon';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ selectedSpot, setSelectedSpot }) => {
  const handleClick = (e) => {
    setSelectedSpot(e.latlng);
  };

  return (
    <Map
      center={{
        lat: -19.48,
        lng: -46.54,
      }}
      zoom={5}
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

MapComponent.propTypes = {
  selectedSpot: PropTypes.objectOf(PropTypes.number),
  setSelectedSpot: PropTypes.func.isRequired,
};

MapComponent.defaultProps = {
  selectedSpot: { lat: 0, lng: 0 },
};

export { MapComponent };
