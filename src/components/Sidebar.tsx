"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { CITIES_DATA } from "@/data/airQualityData";

interface SidebarProps {
  selectedCity: string;
  onCityChange: (cityId: string) => void;
}

export default function Sidebar({ selectedCity, onCityChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700/50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
          AeroSense
        </h1>
        <p className="text-slate-400 text-sm mt-1">Air Quality Monitor</p>
      </div>

      {/* City Navigation */}
      <div className="flex-1 p-6">
        <h2 className="text-slate-300 text-sm font-medium mb-4 uppercase tracking-wider">
          Select City
        </h2>
        <div className="space-y-3">
          {CITIES_DATA.map((city) => (
            <motion.button
              key={city.id}
              onClick={() => {
                onCityChange(city.id);
                setIsOpen(false);
              }}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                selectedCity === city.id
                  ? "bg-slate-700/80 border border-emerald-500/30"
                  : "bg-slate-800/50 hover:bg-slate-700/60 border border-transparent"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-100 font-medium">
                      {city.name}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs">{city.province}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className={`w-3 h-3 rounded-full ${city.dotColor} shadow-lg`}
                    />
                    <span className="text-white font-black text-2xl tracking-tight">
                      {city.aqi}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {city.status}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-slate-700/50">
        <p className="text-slate-500 text-xs">
          Real-time air quality data for East Kalimantan cities
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-slate-900/80 backdrop-blur-md border-slate-700 text-slate-100 hover:bg-slate-800"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 w-80 h-full bg-slate-900/50 backdrop-blur-md border-r border-slate-700/50 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={toggleSidebar}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed left-0 top-0 w-80 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 z-40 lg:hidden"
          >
            <SidebarContent />
          </motion.aside>
        </>
      )}
    </>
  );
}
