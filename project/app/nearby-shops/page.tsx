"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Marker type
interface Marker {
  lat: number;
  lng: number;
  popup?: string;
}

const NearbyShopsPage: React.FC = () => {
  useEffect(() => {
    // Import Leaflet dynamically
    import("leaflet").then((L) => {
      const map = L.map("map").setView([9.9312, 76.2673], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Example markers
      const markers: Marker[] = [
        { lat: 9.935, lng: 76.265, popup: "Crop Center 1" },
        { lat: 9.928, lng: 76.270, popup: "Crop Center 2" },
      ];

      markers.forEach((marker) => {
        L.marker([marker.lat, marker.lng])
          .addTo(map)
          .bindPopup(marker.popup || "");
      });
    });
  }, []);

  return <div id="map" style={{ height: "800px", width: "100%" }} />;
};

export default NearbyShopsPage;
