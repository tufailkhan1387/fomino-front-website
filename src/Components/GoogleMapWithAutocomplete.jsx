import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const GoogleMapWithAutocomplete = ({ onPlaceSelect }) => {
  const [address, setAddress] = useState('');

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      onPlaceSelect(results[0], latLng);
    } catch (error) {
      console.error('Error selecting place:', error);
    }
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={(value) => setAddress(value)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
           <div className='relative'>
           <input
              {...getInputProps({
                placeholder: 'Enter a location',
                className: 'location-search-input py-3 w-full px-8',
              })}
            />
            <div className='absolute right-3 top-4'>
              <img src='images/location.png' />
            </div>
            <div className='absolute left-1 top-3'>
              <img src='images/location1.png' />
            </div>
           </div>
            <div className="autocomplete-dropdown-container w-full">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                 
                  
                };
                return (
                  <div
                  className='w-[155%] p-3'
                    {...getSuggestionItemProps(suggestion, {
                      style,
                    })}
                    
                  >
                    <div className='flex items-center gap-x-3'>
                    <img src='images/Group 10575.png' />
                    <span className>{suggestion.description}</span>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {/* Additional components for displaying Google Map */}
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDoVmHrVkO68EObrVfhWrzgbAHHPQ9McMM&libraries=places`}
        async
        defer
      ></script>
    </div>
  );
};

export default GoogleMapWithAutocomplete;
