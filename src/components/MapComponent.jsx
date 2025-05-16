import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';

const customIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function MapComponent({ lat, lng, name, address }) {
    return (
        <div className="w-full h-[400px] mt-4 rounded shadow bg-white text-white">
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={customIcon}>
                    <Popup>
                        <b>{name}</b><br />
                        {address}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
