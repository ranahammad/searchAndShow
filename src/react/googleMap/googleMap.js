import React, { FC, useState } from 'react';
import { Map, Marker } from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { GoogleApiWrapper } from 'google-maps-react';

// import { GoogleMapComponentProps } from './types';

// const GoogleMapComponent: FC<GoogleMapComponentProps>
const GoogleMapComponent = (props) => {
    const { mapCenter, updateMapCenter } = props;
    const [address, setAddress] = useState('');

    const handleAddress = (address) =>
        geocodeByAddress ? (address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setAddress(address);
                updateMapCenter(latLng);
            })
            .catch(error => console.error('Error', error)) : null;

    return (
        <div id='googleMap'>
            <PlacesAutocomplete
                value={address}
                onChange={add => setAddress(add)}
                onSelect={add => handleAddress(add)}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <div style={{ paddingTop: 20 }} />
            <Map google={window.google}
                initialCenter={mapCenter}
                center={mapCenter} />
        </div>
    );
}

const GoogleMap = GoogleApiWrapper({
    apiKey: ('AIzaSyA1pdqqY2DOsRTAhk4uCXLzWwMeW_5rD78')
})(GoogleMapComponent);

export { GoogleMap };