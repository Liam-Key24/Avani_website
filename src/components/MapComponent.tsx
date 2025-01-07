"use client"

import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

declare global {
  interface Window {
    google: typeof google;
  }
}

const MapComponent: React.FC = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [origin, setOrigin] = useState("");
  const [transportMode, setTransportMode] = useState<google.maps.TravelMode | string>("DRIVING");

  const destination = { lat: 51.5098, lng: -0.2691 }; // Coordinates for Avanti Acton Tapas

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const calculateRoute = async () => {
    if (!isLoaded) return;
    if (!origin) {
      alert("Please enter a starting location.");
      return;
    }

    try {
      const directionsService = new window.google.maps.DirectionsService();
      const result = await directionsService.route({
        origin,
        destination,
        travelMode: transportMode as google.maps.TravelMode,
      });
      setDirectionsResponse(result);
    } catch (error) {
      console.error("Error calculating directions:", error);
    }
  };

  if (!isLoaded) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-tertiary text-secondary rounded-md">
      <h2 className="text-xl font-bold"> Directions to Avanti Acton</h2>

      {/* Input for starting location */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter starting location"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Dropdown to select transport mode */}
      <div className="flex items-center space-x-2">
        <label className="font-medium">Mode of Transport:</label>
        <select
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="DRIVING">Driving</option>
          <option value="WALKING">Walking</option>
          <option value="BICYCLING">Bicycling</option>
          <option value="TRANSIT">Transit</option>
        </select>
      </div>

      {/* Button to calculate route */}
      <button
        onClick={calculateRoute}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Get Directions
      </button>

      {/* Google Map */}
      <GoogleMap
        center={destination}
        zoom={15}
        mapContainerClassName="w-full h-96 rounded-lg shadow-lg"
      >
        {/* Marker at destination */}
        <Marker position={destination} />

        {/* Directions Renderer */}
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
