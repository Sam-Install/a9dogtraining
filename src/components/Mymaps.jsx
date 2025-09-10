// MyMap.js
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMaps = () => {
  const latitude = -4.346454702468715;
  const longitude = 39.53898941885635;
  const position = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: '100%', height: '400px' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>A9 Dog Training – our location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMaps;
