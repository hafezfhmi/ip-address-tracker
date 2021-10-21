import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import styles from './Map.module.css';
import { UseinputDataContext } from '../Store/InputDataContext';

// Updating the center position ref:
// https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes
// https://javascript.tutorialink.com/react-leaflet-map-center-not-changing/

function ChangeMapCenter({ center }) {
  const map = useMap();
  map.setView(center);

  return null;
}

const Map = () => {
  const ctx = UseinputDataContext();

  let myIcon = L.icon({
    iconUrl: '/images/icon-location.svg',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
  });

  return (
    <MapContainer
      center={[ctx.data.lat, ctx.data.lng]}
      zoom={13}
      className={styles.mapContainer}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ctx.data.lat, ctx.data.lng]} icon={myIcon}></Marker>

      <ChangeMapCenter center={[ctx.data.lat, ctx.data.lng]} />
    </MapContainer>
  );
};

export default Map;
