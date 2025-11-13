"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AQIHeroSection from "@/components/sections/HeroSection";
import AQITrendChart from "@/components/sections/AQITrendChart";
import SmartRecommendationsSection from "@/components/sections/SmartRecommendationsSection";
import LocalContextSection from "@/components/sections/LocalContextSection";
import AirQualityMapSection from "@/components/sections/MapWrapper";
import FooterSection from "@/components/sections/FooterSection";

export default function City() {
  const [selectedCity, setSelectedCity] = useState("bontang");

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Sidebar selectedCity={selectedCity} onCityChange={handleCityChange} />

      {/* Main Content - offset for sidebar on desktop */}
      <div className="lg:ml-80">
        <AQIHeroSection selectedCity={selectedCity} />
        <AQITrendChart selectedCity={selectedCity} />
        <SmartRecommendationsSection selectedCity={selectedCity} />
        <LocalContextSection selectedCity={selectedCity} />
        <AirQualityMapSection />
        <FooterSection />
      </div>
    </main>
  );
}
