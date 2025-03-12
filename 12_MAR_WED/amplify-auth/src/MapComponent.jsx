import React, { useState } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

// AWS Map Configuration
const MAP_NAME = awsExports.geo.defaultMap;
const REGION = awsExports.aws_project_region;
const MAP_URL = `https://maps.geo.${REGION}.amazonaws.com/maps/v0/maps/${MAP_NAME}/tiles/{z}/{x}/{y}`;

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: -122.4194, // Default to San Francisco
    latitude: 37.7749,
    zoom: 10,
  });

  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle={MAP_URL}
      >
        <NavigationControl position="top-left" />
        <Marker longitude={-122.4194} latitude={37.7749} color="red" />
      </Map>
    </div>
  );
};

export default MapComponent;
