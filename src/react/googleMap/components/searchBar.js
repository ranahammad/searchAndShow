import { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export const SearchBar = ({ updateMapCenter }) => {
    const [address, setAddress] = useState('');

    const handleAddress = (address) =>
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setAddress(address);
                updateMapCenter(latLng);
            })
            .catch(error => console.error('Error', error));

    return (
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
        </PlacesAutocomplete >
    );
};