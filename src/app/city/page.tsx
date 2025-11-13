"use client";

import { useCityContext } from "@/contexts/CityContext";
import AQIHeroSection from "@/components/sections/HeroSection";
import AQITrendChart from "@/components/sections/AQITrendChart";
import SmartRecommendationsSection from "@/components/sections/SmartRecommendationsSection";
import LocalContextSection from "@/components/sections/LocalContextSection";
import AirQualityMapSection from "@/components/sections/MapWrapper";
import FooterSection from "@/components/sections/FooterSection";

export default function City() {
  const { selectedCity } = useCityContext();

  return (
    <>
      <AQIHeroSection selectedCity={selectedCity} />
      <AQITrendChart selectedCity={selectedCity} />
      <SmartRecommendationsSection selectedCity={selectedCity} />
      <LocalContextSection selectedCity={selectedCity} />
      <AirQualityMapSection />
      <FooterSection />
    </>
  );
}
