"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Thermometer, Droplets, Eye, AlertCircle } from "lucide-react";
import { CITIES_DATA, getCityById } from "@/data/airQualityData";

interface AQIHeroSectionProps {
  selectedCity: string;
}

export default function AQIHeroSection({ selectedCity }: AQIHeroSectionProps) {
  const currentData = getCityById(selectedCity) || CITIES_DATA[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src={currentData.image}
          alt={`${currentData.name} cityscape`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${currentData.bgColor}`} />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Column - Main AQI Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            key={selectedCity}
            className="text-left"
          >
            {/* City Header */}
            <div className="mb-8">
              <p className="text-slate-300 text-lg font-medium tracking-wide mb-2">
                Air Quality Index
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
                {currentData.name}
              </h1>
            </div>

            {/* Main AQI Card */}
            <Card className={`bg-slate-800/80 backdrop-blur-md border ${currentData.borderColor} shadow-2xl mb-8`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-6xl lg:text-8xl font-black text-white tracking-tight">
                      {currentData.aqi}
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className={`w-3 h-3 rounded-full ${currentData.dotColor}`} />
                      <span className={`text-lg font-semibold ${currentData.statusColor}`}>
                        {currentData.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Wind className="w-8 h-8 text-slate-400 mb-2" />
                    <p className="text-slate-400 text-sm">Live Data</p>
                  </div>
                </div>
                
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {currentData.recommendation}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Health Impact Widget */}
            <Card className="bg-slate-800/60 backdrop-blur-md border-slate-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Health Impact</h3>
                    <p className="text-slate-400 text-sm">Daily exposure equivalent</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🚬</span>
                      <span className="text-2xl font-bold text-white">{currentData.cigarettes}</span>
                    </div>
                    <p className="text-slate-400 text-xs">cigarettes/day</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Environmental Data */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            key={`${selectedCity}-stats`}
            className="space-y-6"
          >
            {/* PM2.5 Highlight */}
            <Card className="bg-slate-800/80 backdrop-blur-md border-slate-700 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">PM2.5 Concentration</h3>
                  <AlertCircle className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">{currentData.pm25}</span>
                  <span className="text-slate-400 text-lg mb-1">μg/m³</span>
                </div>
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${currentData.statusColor} bg-white/10`}>
                  Risk Level: {currentData.healthRisk}
                </div>
              </CardContent>
            </Card>

            {/* Environmental Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/60 backdrop-blur-md border-slate-700">
                <CardContent className="p-4">
                  <Thermometer className="h-5 w-5 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{currentData.temperature}°C</div>
                  <div className="text-xs text-slate-400">Temperature</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 backdrop-blur-md border-slate-700">
                <CardContent className="p-4">
                  <Droplets className="h-5 w-5 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{currentData.humidity}%</div>
                  <div className="text-xs text-slate-400">Humidity</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 backdrop-blur-md border-slate-700">
                <CardContent className="p-4">
                  <Wind className="h-5 w-5 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{currentData.windSpeed}</div>
                  <div className="text-xs text-slate-400">km/h Wind</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 backdrop-blur-md border-slate-700">
                <CardContent className="p-4">
                  <Eye className="h-5 w-5 text-purple-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{currentData.visibility}</div>
                  <div className="text-xs text-slate-400">km Visibility</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
