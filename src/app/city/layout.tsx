"use client";

import Sidebar from "@/components/Sidebar";
import { CityProvider, useCityContext } from "@/contexts/CityContext";

function CityLayoutContent({ children }: { children: React.ReactNode }) {
  const { selectedCity, setSelectedCity } = useCityContext();

  return (
    <main className="min-h-screen bg-slate-900">
      <Sidebar selectedCity={selectedCity} onCityChange={setSelectedCity} />

      {/* Main Content - offset for sidebar on desktop */}
      <div className="lg:ml-80">{children}</div>
    </main>
  );
}

export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CityProvider>
      <CityLayoutContent>{children}</CityLayoutContent>
    </CityProvider>
  );
}
