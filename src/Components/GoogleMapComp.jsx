// @ts-nocheck
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
export default function GoogleMapComp() {
  const mapContainerStyle = {
    width: "100%",
    height: "200px",
  };

  const center = {
    lat: 18.52043,
    lng: 73.856743,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCYC3-gTg2XJFIeo9fura6PoNuQzzPeBlc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
