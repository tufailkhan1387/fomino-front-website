import React from 'react'
import GoogleMapWithAutocomplete from "./GoogleMapWithAutocomplete"
export default function GoogleMap() {
    const handlePlaceSelect = (place, latLng) => {
        console.log('Selected Place:', place);
        console.log('LatLng:', latLng);
        // Handle the selected place and its coordinates as needed
    };

    return (
        <div>
            <h1>Google Maps Integration with Autocomplete</h1>
            <GoogleMapWithAutocomplete onPlaceSelect={handlePlaceSelect} />
        </div>
    );
}
