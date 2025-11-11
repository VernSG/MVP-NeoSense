"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Factory,
  Ship,
  Car,
  Mountain,
  Waves,
  Truck,
  Zap,
  Flame,
  BookOpen,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

interface LocalContextSectionProps {
  selectedCity: string;
}

const cityEducationData = {
  bontang: {
    name: "Bontang",
    description:
      "Industrial port city known for petrochemical and fertilizer production",
    majorSources: [
      {
        icon: Factory,
        title: "Petrochemical Industry",
        description:
          "Major fertilizer and chemical plants contribute to SO2 and NOx emissions",
        impact: "High",
        timePattern: "Peak emissions during production cycles (evening shifts)",
      },
      {
        icon: Waves,
        title: "Marine Haze",
        description:
          "Sea salt particles and marine-sourced pollutants from coastal location",
        impact: "Medium",
        timePattern: "Worse during high tide and monsoon seasons",
      },
      {
        icon: Ship,
        title: "Port Activities",
        description:
          "Cargo ships and marine traffic contribute to particulate matter",
        impact: "Medium",
        timePattern: "Consistent throughout day, peak during loading/unloading",
      },
    ],
    seasonalFactors: [
      "Southwest monsoon (May-September) brings cleaner air from ocean",
      "Northeast monsoon (November-March) can trap pollutants",
      "Dry season increases particulate matter concentration",
      "Industrial maintenance shutdowns typically occur in January-February",
    ],
    healthImpacts: {
      primary: "Respiratory irritation from industrial emissions",
      secondary: "Eye irritation from petrochemical compounds",
      vulnerable: "Workers in petrochemical sector, coastal communities",
    },
  },
  samarinda: {
    name: "Samarinda",
    description: "Provincial capital and coal mining hub of East Kalimantan",
    majorSources: [
      {
        icon: Mountain,
        title: "Coal Mining Dust",
        description:
          "Open-pit coal mines and coal processing create significant particulate matter",
        impact: "Very High",
        timePattern: "Peak during dry season and windy conditions",
      },
      {
        icon: Car,
        title: "Urban Transportation",
        description:
          "Heavy traffic congestion and older vehicle fleet increase emissions",
        impact: "High",
        timePattern: "Rush hours: 7-9 AM and 5-7 PM on weekdays",
      },
      {
        icon: Flame,
        title: "Biomass Burning",
        description: "Agricultural burning and forest fires during dry season",
        impact: "High",
        timePattern: "Seasonal peaks in July-October (dry season)",
      },
    ],
    seasonalFactors: [
      "Dry season (June-September) sees highest coal dust levels",
      "Forest fire season significantly worsens air quality",
      "Rainy season (October-May) helps wash pollutants from air",
      "Harmattan winds can carry pollutants from neighboring areas",
    ],
    healthImpacts: {
      primary: "Coal dust-related respiratory issues",
      secondary: "Cardiovascular stress from fine particulates",
      vulnerable: "Mining communities, children in urban areas",
    },
  },
  balikpapan: {
    name: "Balikpapan",
    description:
      "Major oil refining center and busiest port in East Kalimantan",
    majorSources: [
      {
        icon: Zap,
        title: "Oil Refinery Complex",
        description:
          "Large-scale petroleum refining operations release various pollutants",
        impact: "Very High",
        timePattern:
          "Continuous operations with maintenance shutdowns quarterly",
      },
      {
        icon: Ship,
        title: "Port & Marine Traffic",
        description:
          "Busiest port in region with heavy shipping and cargo operations",
        impact: "High",
        timePattern: "24/7 operations, peak activity during business hours",
      },
      {
        icon: Truck,
        title: "Heavy Vehicle Traffic",
        description:
          "Freight trucks and industrial vehicles serving port and refineries",
        impact: "High",
        timePattern: "Peak during cargo loading: 6 AM-6 PM",
      },
    ],
    seasonalFactors: [
      "Southeast trade winds can trap pollutants against mountains",
      "Port activity increases during palm oil export season (March-August)",
      "Refinery maintenance typically scheduled during low-demand periods",
      "Monsoon rains provide temporary relief but increase humidity",
    ],
    healthImpacts: {
      primary: "Chronic exposure to refinery emissions",
      secondary: "Increased asthma rates in port-adjacent communities",
      vulnerable: "Port workers, residents in industrial zones",
    },
  },
};

const impactColors = {
  "Very High": "text-red-600 bg-red-100",
  High: "text-orange-600 bg-orange-100",
  Medium: "text-yellow-600 bg-yellow-100",
  Low: "text-green-600 bg-green-100",
};

export default function LocalContextSection({
  selectedCity,
}: LocalContextSectionProps) {
  const currentData =
    cityEducationData[selectedCity as keyof typeof cityEducationData] ||
    cityEducationData.bontang;

  return (
    <section className="py-24" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Local Environmental Context
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Understanding pollution sources and patterns in {currentData.name}{" "}
            for better environmental awareness.
          </p>
        </motion.div>

        {/* City Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          key={`${selectedCity}-overview`}
          className="mb-16"
        >
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                About {currentData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-zinc-700 leading-relaxed">
                {currentData.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          key={`${selectedCity}-tabs`}
        >
          <Tabs defaultValue="sources" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sources">Pollution Sources</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal Patterns</TabsTrigger>
              <TabsTrigger value="health">Health Impacts</TabsTrigger>
            </TabsList>

            <TabsContent value="sources">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {currentData.majorSources.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <source.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-xl">
                            {source.title}
                          </CardTitle>
                        </div>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            impactColors[
                              source.impact as keyof typeof impactColors
                            ]
                          }`}
                        >
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {source.impact} Impact
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-zinc-600 mb-4 leading-relaxed">
                          {source.description}
                        </CardDescription>
                        <div className="bg-zinc-50 p-3 rounded-lg">
                          <p className="text-sm text-zinc-700">
                            <strong>Peak Times:</strong> {source.timePattern}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="seasonal">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Seasonal Air Quality Patterns
                  </CardTitle>
                  <CardDescription>
                    How weather and seasonal activities affect air quality in{" "}
                    {currentData.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentData.seasonalFactors.map((factor, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-zinc-700 leading-relaxed">
                          {factor}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="health">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-white border-0 shadow-lg border-l-4 border-l-red-400">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center text-red-700">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Primary Health Risks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 leading-relaxed">
                      {currentData.healthImpacts.primary}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg border-l-4 border-l-orange-400">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center text-orange-700">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Secondary Effects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 leading-relaxed">
                      {currentData.healthImpacts.secondary}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg border-l-4 border-l-yellow-400">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center text-yellow-700">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Vulnerable Groups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 leading-relaxed">
                      {currentData.healthImpacts.vulnerable}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Socio-Economic Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  Building Sustainable Socio-Economic Future
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
                  By empowering communities with actionable air quality data,
                  AeroSense fosters healthier populations, directly supporting
                  local economic productivity and reducing the socio-economic
                  burden of respiratory illnesses. Clean air initiatives lead to{" "}
                  <strong className="text-emerald-700">
                    reduced healthcare costs
                  </strong>
                  ,
                  <strong className="text-blue-700">
                    {" "}
                    increased workforce productivity
                  </strong>
                  , and
                  <strong className="text-purple-700">
                    {" "}
                    sustainable urban development
                  </strong>{" "}
                  across East Kalimantan.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-1">
                      -25%
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      Healthcare Costs
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-1">
                      +18%
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      Productivity
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600 mb-1">
                      +32%
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      Tourism Appeal
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
