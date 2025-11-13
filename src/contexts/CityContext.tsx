"use client";

import React, { createContext, useContext, useState } from "react";

interface CityContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function useCityContext() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCityContext must be used within CityProvider");
  }
  return context;
}

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState("bontang");

  const value = React.useMemo(
    () => ({ selectedCity, setSelectedCity }),
    [selectedCity]
  );

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
}
