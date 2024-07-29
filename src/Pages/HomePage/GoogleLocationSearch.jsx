// @ts-nocheck
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { MdLocationOn } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

const GoogleLocationSearch = () => {
  const [address, setAddress] = useState("");

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = (selectedAddress) => {
    geocodeByAddress(selectedAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="relative">
          <input
            {...getInputProps({
              placeholder: "Choose a delivery address",
              className: "location-search-input",
              style: {
                width: "400px",
                height: "50px",
                padding: "0px 50px",
                outline: "none",
                backgroundColor: "#F8F8F8",
              },
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? { backgroundColor: "lightgray", cursor: "pointer",}
                : { backgroundColor: "#ffffff", cursor: "pointer" };
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

          <MdLocationOn className="absolute top-3 left-4 text-2xl text-redColor" />
          <BiCurrentLocation className="absolute top-3 left-[360px] text-2xl text-[#00000099]" />
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default GoogleLocationSearch;
