import React from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet'
import * as L from "leaflet";
import './map.css'
import "leaflet/dist/leaflet.css";

const getMarker = () => {
    const isDose1Available = false
    const isDose2Available = false

    let pinClass = 'pin-oneavailable'
    let pinEffectClass = 'pin-oneavailable-effect'

    if (!(isDose1Available || isDose2Available)) {
        pinClass = 'pin-notavailable'
        pinEffectClass = 'pin-notavailable-effect'
    } else if ((isDose1Available && isDose2Available)) {
        pinClass = "pin";
        pinEffectClass = "pin-effect";
    }
    return new L.divIcon({ html: `<div class="${pinClass}"></div> <div class="${pinEffectClass}"></div>` })
}
const customMarker = new L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// https://opencagedata.com/demo

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const RouteMap = ({ positions }) => {
    const mapCenter = positions[0];
    const zoom = 10

    return (
        <MapContainer zoomControl style={{ overflow: 'hidden', height: '90vh' }} center={mapCenter} zoom={zoom} scrollWheelZoom>
            <ChangeView center={mapCenter} zoom={zoom} />
            <TileLayer
                url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
                accessToken='pk.eyJ1IjoidG1rYXN1biIsImEiOiJlNmZhOTYwNGJlODcxYWE5YjNmYjYzZmJiM2NlZWM4YiJ9.UT41ORairJ1PQ7woCnCH-A'
                id='mapbox/streets-v11'
                tileSize={512}
                zoomOffset={-1}
            />
            <Polyline pathOptions={{ color: 'lime' }} positions={positions} />
            <Marker
                icon={getMarker()}
                position={mapCenter}>
            </Marker>
        </MapContainer>
    )
}

export default RouteMap