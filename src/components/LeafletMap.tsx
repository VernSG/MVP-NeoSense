"use client";

import React, { useEffect, useRef, useState } from "react";

interface LeafletMapProps {
  cities: Array<{
    city: string;
    lat: number;
    lng: number;
    aqi: number;
    pm25: number;
    status: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
    visibility: number;
    color: string;
    description: string;
    population: string;
    mainPollutant: string;
    trend: string;
  }>;
  onCitySelect: (city: any) => void;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ cities, onCitySelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || isInitialized)
      return;

    // Check if map container already has a Leaflet instance
    if ((mapRef.current as any)._leaflet_id) {
      return;
    }

    // Import and initialize Leaflet with CSS
    Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css")])
      .then(([L]) => {
        // Fix for default markers in Next.js
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

        // Custom marker creation (IQAir style)
        const createCustomMarker = (city: any) => {
          const getMarkerColor = (aqi: number) => {
            if (aqi <= 50) return "#00E400"; // Good - Green
            if (aqi <= 100) return "#FFFF00"; // Moderate - Yellow
            if (aqi <= 150) return "#FF7E00"; // Unhealthy for Sensitive - Orange
            if (aqi <= 200) return "#FF0000"; // Unhealthy - Red
            if (aqi <= 300) return "#8F3F97"; // Very Unhealthy - Purple
            return "#7E0023"; // Hazardous - Maroon
          };

          return L.divIcon({
            html: `
            <div style="
              background: ${getMarkerColor(city.aqi)};
              border: 2px solid white;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              color: #333;
              box-shadow: 0 3px 10px rgba(0,0,0,0.3);
              cursor: pointer;
              transition: transform 0.2s ease;
            " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
              ${city.aqi}
            </div>
          `,
            className: "aqi-marker",
            iconSize: [50, 50],
            iconAnchor: [25, 25],
            popupAnchor: [0, -25],
          });
        };

        try {
          // Double-check before creating map
          if (!mapRef.current || (mapRef.current as any)._leaflet_id) {
            return;
          }

          // Create map with better options
          const map = L.map(mapRef.current, {
            center: [-0.5, 117],
            zoom: 8,
            zoomControl: true,
            attributionControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true,
            preferCanvas: false,
          });
          mapInstanceRef.current = map;

          // Add high-quality tile layer (similar to IQAir)
          L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
              subdomains: "abcd",
              maxZoom: 20,
              minZoom: 1,
            }
          ).addTo(map);

          // Add markers
          cities.forEach((city) => {
            const marker = L.marker([city.lat, city.lng], {
              icon: createCustomMarker(city),
            }).addTo(map);

            // Add popup with IQAir-like styling
            const getMarkerColor = (aqi: number) => {
              if (aqi <= 50) return "#00E400";
              if (aqi <= 100) return "#FFFF00";
              if (aqi <= 150) return "#FF7E00";
              if (aqi <= 200) return "#FF0000";
              if (aqi <= 300) return "#8F3F97";
              return "#7E0023";
            };

            marker.bindPopup(
              `
            <div style="padding: 16px; min-width: 280px; font-family: system-ui;">
              <div style="text-align: center; margin-bottom: 16px;">
                <h3 style="margin: 0 0 4px 0; color: #1f2937; font-size: 20px; font-weight: 600;">${
                  city.city
                }</h3>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">${
                  city.description
                }</p>
              </div>
              
              <div style="background: ${getMarkerColor(
                city.aqi
              )}; padding: 16px; border-radius: 12px; margin-bottom: 16px; text-align: center;">
                <div style="font-size: 36px; font-weight: bold; color: #1f2937; margin-bottom: 4px;">${
                  city.aqi
                }</div>
                <div style="font-size: 14px; color: #1f2937; font-weight: 600; margin-bottom: 2px;">${
                  city.status
                }</div>
                <div style="font-size: 11px; color: #374151;">US AQI • PM2.5 ${
                  city.pm25
                } μg/m³</div>
              </div>
              
              <div style="background: #f9fafb; padding: 12px; border-radius: 8px; font-size: 12px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">🌡️ Temp:</span>
                    <span style="font-weight: 500;">${city.temperature}°C</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">💧 Humidity:</span>
                    <span style="font-weight: 500;">${city.humidity}%</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">💨 Wind:</span>
                    <span style="font-weight: 500;">${
                      city.windSpeed
                    } km/h</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">👁️ Visibility:</span>
                    <span style="font-weight: 500;">${city.visibility} km</span>
                  </div>
                </div>
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb; font-size: 10px; color: #6b7280;">
                  Population: ${city.population} • Main pollutant: ${
                city.mainPollutant
              }
                </div>
              </div>
            </div>
          `,
              {
                maxWidth: 320,
                className: "modern-popup",
              }
            );

            // Add click event
            marker.on("click", () => {
              onCitySelect(city);
            });
          });

          // Set view to fit all markers
          const group = L.featureGroup(
            cities.map((city) => L.marker([city.lat, city.lng]))
          );
          map.fitBounds(group.getBounds().pad(0.1));

          setIsInitialized(true);
        } catch (error) {
          console.error("Error creating map:", error);
        }
      })
      .catch((error) => {
        console.error("Error loading Leaflet:", error);
      });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.warn("Error removing map:", error);
        } finally {
          mapInstanceRef.current = null;
        }
      }

      // Clear the _leaflet_id from the container
      if (mapRef.current && (mapRef.current as any)._leaflet_id) {
        delete (mapRef.current as any)._leaflet_id;
      }

      setIsInitialized(false);
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default LeafletMap;
