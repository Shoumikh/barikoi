import React from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Marker, useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Geocoder.css';

function Geocoder({ setLat, setLng }) {
  const ctrl = new MapboxGeocoder({
    accessToken: 'pk.eyJ1Ijoiam9obmRvZTJlbWFpbCIsImEiOiJja3o3OG9tY3owMXZvMnBycDM5bzBwNXlyIn0.a0v4orDUMi0Pk_qk9UqaCw',
    marker: false,
    collapsed: false,
    position: 'top-left',
  });

  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    setLng(coords[0]);
    setLat(coords[1]);
  });
  return null;
}

export default Geocoder;
