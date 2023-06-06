import React, { FC } from 'react';
import { GoogleMapComponentProps } from './types';
import { MapView, SearchBar } from './components';

const GoogleMapComponent: FC<GoogleMapComponentProps> = ({ mapCenter, updateCenter }) => {
    return (
        <div id='googleMap'>
            <SearchBar updateMapCenter={updateCenter} />
            <div style={{ paddingTop: 20 }} />
            <MapView mapCenter={mapCenter} />
        </div>
    )
};

export { GoogleMapComponent };