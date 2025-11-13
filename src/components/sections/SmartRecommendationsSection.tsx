"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Home,
  Heart,
  Users,
  Wind,
  AlertTriangle,
  CheckCircle,
  Activity,
  Clock,
  MapPin,
} from "lucide-react";
import { CITIES_DATA, getCityById } from "@/data/airQualityData";

interface SmartRecommendationsProps {
  selectedCity: string;
}

// Icon mapping for activities
const iconMap: Record<string, any> = {
  Activity,
  Users,
  Wind,
  Shield,
  Home,
};

// Status colors mapping based on AQI status
const getStatusColors = (status: string) => {
  if (status === "Good") {
    return {
      bg: "bg-green-50/80",
      border: "border-green-300",
      text: "text-green-900",
      icon: "text-green-700",
    };
  } else if (status === "Moderate") {
    return {
      bg: "bg-yellow-50/80",
      border: "border-yellow-300",
      text: "text-yellow-900",
      icon: "text-yellow-700",
    };
  } else {
    return {
      bg: "bg-red-50/90",
      border: "border-red-300",
      text: "text-red-900",
      icon: "text-red-700",
    };
  }
};

const activityStatusIcons = {
  good: CheckCircle,
  caution: AlertTriangle,
  warning: AlertTriangle,
  danger: AlertTriangle,
};

const activityStatusColors = {
  good: "text-green-600 bg-green-50",
  caution: "text-yellow-600 bg-yellow-50",
  warning: "text-orange-600 bg-orange-50",
  danger: "text-red-600 bg-red-50",
};

export default function SmartRecommendationsSection({
  selectedCity,
}: SmartRecommendationsProps) {
  const currentData = getCityById(selectedCity) || CITIES_DATA[0];
  const colorScheme = getStatusColors(currentData.status);

  return (
    <section className="py-24" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Smart Health Recommendations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Personalized advice and precautions based on current air quality
            conditions.
          </p>
        </motion.div>

        {/* Current Status Alert */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          key={`${selectedCity}-alert`}
          className="mb-12"
        >
          <Card className={`bg-white shadow-xl ${colorScheme.border} border-2`}>
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <AlertTriangle
                    className={`h-8 w-8 ${colorScheme.icon} mt-1 flex-shrink-0`}
                  />
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold ${colorScheme.text} mb-3 tracking-tight`}
                    >
                      Current Status: {currentData.status}
                    </h3>
                    <p
                      className={`${colorScheme.text} text-base leading-relaxed`}
                    >
                      {currentData.generalAdvice}
                    </p>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <div className="text-5xl font-black text-slate-900 mb-1">
                    {currentData.aqi}
                  </div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    AQI Score
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          key={`${selectedCity}-activities`}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-zinc-900 mb-8 text-center">
            Activity Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentData.activities.map((activity, index) => {
              const StatusIcon =
                activityStatusIcons[
                  activity.status as keyof typeof activityStatusIcons
                ];
              const statusColor =
                activityStatusColors[
                  activity.status as keyof typeof activityStatusColors
                ];
              const ActivityIcon = iconMap[activity.icon] || Activity;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <ActivityIcon className="h-6 w-6 text-zinc-700" />
                        <CardTitle className="text-lg">
                          {activity.title}
                        </CardTitle>
                      </div>
                      <div
                        className={`flex items-center space-x-2 px-3 py-2 rounded-full ${statusColor}`}
                      >
                        <StatusIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {activity.advice}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-600 leading-relaxed">
                        {activity.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Health Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          key={`${selectedCity}-tips`}
          className="mb-16"
        >
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-3" />
                Health Tips & Precautions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentData.healthTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-50"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{tip}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Local Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          key={`${selectedCity}-context`}
        >
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                Local Environmental Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {currentData.localContext}
              </p>
              <div className="mt-4 flex items-center text-sm text-zinc-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>
                  Data updated every hour • Recommendations refresh
                  automatically
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
