"use client"

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FaRoute, FaLink, FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa6";

type SavedDirection = {
  origin: string;
  transportMode: string;
  timestamp: number;
};

const MapComponent: React.FC = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [origin, setOrigin] = useState("");
  const [transportMode, setTransportMode] = useState("DRIVING");
  const [savedDirections, setSavedDirections] = useState<SavedDirection[]>([]);
  const [showSavedRoutes, setShowSavedRoutes] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const destination = { lat: 51.50862891330518, lng: -0.2780437011002609 };
  

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    localStorage.removeItem('savedDirections');
    setSavedDirections([]);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('savedDirections');
    if (saved) setSavedDirections(JSON.parse(saved));
  }, []);

  const calculateRoute = async () => {
    if (!origin || !isLoaded) return;
    setShowError(false);

    try {
      const directionsService = new google.maps.DirectionsService();
      const result = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode[transportMode as keyof typeof google.maps.TravelMode],
      });
      setDirectionsResponse(result);
    } catch (error) {
      console.error("Error calculating directions:", error);
      setErrorMessage("Route not found. Please check your starting location.");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const saveDirection = () => {
    if (!origin) return;
    
    const newDirection = {
      origin,
      transportMode,
      timestamp: Date.now(),
    };

    const updatedDirections = [...savedDirections, newDirection].slice(-3);
    setSavedDirections(updatedDirections);
    localStorage.setItem('savedDirections', JSON.stringify(updatedDirections));
  };

  const getGoogleMapsUrl = (origin: string, mode: string) => 
    `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${destination.lat},${destination.lng}&travelmode=${mode.toLowerCase()}`;

  if (!isLoaded) return <div className="text-center">Loading...</div>;

  return (
    <div className="flex flex-col items-center space-y-4 p-4 text-secondary rounded-md">
      <h2 className="text-xl font-bold">Directions to Avanti Acton</h2>

      <div className="w-full max-w-md flex gap-2">
        <input
          type="text"
          placeholder="Enter starting location"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
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

      <div className="flex gap-2">
        <button
          onClick={calculateRoute}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get Directions
        </button>

        {directionsResponse && (
          <button
            onClick={saveDirection}
            className="px-4 py-2 bg-[#C4C7B0] text-secondary rounded-lg hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Save Route
          </button>
        )}
      </div>

      <div className="relative w-full">
        {showError && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
            {errorMessage}
          </div>
        )}
        <GoogleMap
          center={destination}
          zoom={15}
          mapContainerClassName="w-full h-96 rounded-lg shadow-lg"
        >
          <Marker position={destination} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </div>

      {savedDirections.length > 0 && (
        <div className="w-full max-w-md mt-4 overflow-y-auto max-h-48 [&:not(:hover)]:overflow-y-hidden">
          <div 
            className="flex justify-between items-center mb-2 cursor-pointer bg-[#C2C5AA] sticky top-0 p-2 z-10"
            onClick={() => setShowSavedRoutes(!showSavedRoutes)}
          >
            <h3 className="text-lg font-semibold">Saved Routes</h3>
            {showSavedRoutes ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          
          {showSavedRoutes && (
            <div className="space-y-2 overflow-y-auto">
              {savedDirections.map((direction, index) => (
                <div
                  key={direction.timestamp}
                  className="flex justify-between items-center p-2 border rounded-lg hover:bg-tertiary/50"
                >
                  <div>
                    <p className="font-medium">{direction.origin}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(direction.timestamp).toLocaleDateString()} - {direction.transportMode}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setOrigin(direction.origin);
                        setTransportMode(direction.transportMode);
                        calculateRoute();
                      }}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      title="Load Route"
                    >
                      <FaRoute size={16} />
                    </button>
                    <button
                      onClick={() => navigator.clipboard.writeText(getGoogleMapsUrl(direction.origin, direction.transportMode))}
                      className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      title="Copy Google Maps URL"
                    >
                      <FaLink size={16} />
                    </button>
                    <button
                      onClick={() => {
                        const newDirections = savedDirections.filter((_, i) => i !== index);
                        setSavedDirections(newDirections);
                        localStorage.setItem('savedDirections', JSON.stringify(newDirections));
                      }}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                      title="Delete Route"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
