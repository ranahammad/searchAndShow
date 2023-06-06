import { Map, Marker } from 'google-maps-react';

export const MapView = ({mapCenter}) => (
    <Map google={window.google}
        initialCenter={mapCenter}
        center={mapCenter} >
        <Marker mapCenter={mapCenter} />
    </Map>
);