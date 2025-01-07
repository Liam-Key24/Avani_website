"use client"
import React, { useState } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";

declare global {
  interface Window {
    google: typeof google;
  }
}

const MapComponent = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [origin, setOrigin] = useState("");

  const destination = { lat: 51.5064, lng: -0.2725 }; // Avanti Tapas and Pizzeria coordinates

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const calculateRoute = async () => {
    if (origin === "") {
      alert("Please enter a starting location.");
      return;
    }
    try {
      const directionsService = new google.maps.DirectionsService();
      const result = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(result);
    } catch (error) {
      console.error("Error fetching directions", error);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Enter starting location"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button onClick={calculateRoute} style={{ padding: "0.5rem" }}>
          Get Directions
        </button>
      </div>
      <GoogleMap
        center={destination}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "400px" }}
      >
        <Marker position={destination} />
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
