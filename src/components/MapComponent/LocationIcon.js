import L from 'leaflet';
import icon from '../../assets/map-marker-alt-solid.svg';

export const LocationIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: [17, 35],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
});
