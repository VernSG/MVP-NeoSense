"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Wind, Thermometer, Droplets, Eye } from "lucide-react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-sm text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});

// Air quality data for East Kalimantan cities
const airQualityData = [
  {
    city: "Samarinda",
    lat: -0.5017,
    lng: 117.1536,
    aqi: 52,
    pm25: 19.9,
    status: "Moderate",
    temperature: 25,
    humidity: 95,
    windSpeed: 3.9,
    visibility: 10,
    color: "#FFFF00", // Yellow for Moderate
    description: "Capital city of East Kalimantan Province",
    population: "827,994",
    mainPollutant: "PM2.5",
    trend: "stable",
  },
  {
    city: "Bontang",
    lat: 0.1344,
    lng: 117.4758,
    aqi: 45,
    pm25: 15.2,
    status: "Good",
    temperature: 24,
    humidity: 90,
    windSpeed: 4.2,
    visibility: 12,
    color: "#00E400", // Green for Good
    description: "Industrial city known for petrochemical plants",
    population: "178,917",
    mainPollutant: "PM10",
    trend: "improving",
  },
  {
    city: "Balikpapan",
    lat: -1.2379,
    lng: 116.8289,
    aqi: 38,
    pm25: 12.8,
    status: "Good",
    temperature: 26,
    humidity: 88,
    windSpeed: 3.5,
    visibility: 11,
    color: "#00E400", // Green for Good
    description: "Major oil refining center and port city",
    population: "688,318",
    mainPollutant: "NO2",
    trend: "stable",
  },
];

const AirQualityMapSection = () => {
  const [selectedCity, setSelectedCity] = useState(airQualityData[0]);

  const handleCitySelect = (city: (typeof airQualityData)[0]) => {
    setSelectedCity(city);
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-600";
    if (aqi <= 100) return "text-yellow-600";
    if (aqi <= 150) return "text-orange-600";
    return "text-red-600";
  };

  const getAQIBgColor = (aqi: number) => {
    if (aqi <= 50) return "bg-green-100";
    if (aqi <= 100) return "bg-yellow-100";
    if (aqi <= 150) return "bg-orange-100";
    return "bg-red-100";
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Air Quality Map
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-time air quality monitoring across East Kalimantan's major
            cities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-[500px] overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  East Kalimantan Air Quality
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-[420px]">
                <LeafletMap
                  cities={airQualityData}
                  onCitySelect={handleCitySelect}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* City Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Selected City AQI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{selectedCity.city}</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`${getAQIBgColor(
                    selectedCity.aqi
                  )} rounded-lg p-6 text-center mb-4`}
                >
                  <div
                    className={`text-4xl font-bold ${getAQIColor(
                      selectedCity.aqi
                    )} mb-2`}
                  >
                    {selectedCity.aqi}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    US AQI • {selectedCity.status}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    PM2.5 {selectedCity.pm25} μg/m³
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-gray-500 mb-2">
                    {selectedCity.description}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Temperature</span>
                    </div>
                    <span className="font-medium">
                      {selectedCity.temperature}°C
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Humidity</span>
                    </div>
                    <span className="font-medium">
                      {selectedCity.humidity}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">Wind Speed</span>
                    </div>
                    <span className="font-medium">
                      {selectedCity.windSpeed} km/h
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">Visibility</span>
                    </div>
                    <span className="font-medium">
                      {selectedCity.visibility} km
                    </span>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Population:</span>
                      <span className="font-medium">
                        {selectedCity.population}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-gray-500">Main Pollutant:</span>
                      <span className="font-medium">
                        {selectedCity.mainPollutant}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-gray-500">Trend:</span>
                      <span
                        className={`font-medium capitalize ${
                          selectedCity.trend === "improving"
                            ? "text-green-600"
                            : selectedCity.trend === "worsening"
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {selectedCity.trend}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* City List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">All Cities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {airQualityData.map((city) => (
                  <div
                    key={city.city}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedCity.city === city.city
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedCity(city)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{city.city}</div>
                        <div className="text-sm text-gray-500">
                          {city.status}
                        </div>
                      </div>
                      <div
                        className={`text-xl font-bold ${getAQIColor(city.aqi)}`}
                      >
                        {city.aqi}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Health Impact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Health Impact & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">
                    Good (0-50 AQI)
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Air quality is considered satisfactory, and air pollution
                    poses little or no risk.
                  </p>
                  <p className="text-xs text-gray-500">
                    ✓ Ideal for outdoor activities
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-700">
                    Moderate (51-100 AQI)
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Air quality is acceptable for most people. However,
                    sensitive individuals may experience minor issues.
                  </p>
                  <p className="text-xs text-gray-500">
                    ⚠ Sensitive individuals should consider limiting prolonged
                    outdoor exertion
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AirQualityMapSection;
