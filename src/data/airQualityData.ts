/**
 * Consolidated Air Quality Data for East Kalimantan Cities
 * Single source of truth for all AQI, meteorological, and recommendation data
 */

export interface CityData {
  id: string;
  name: string;
  province: string;
  lat: number;
  lng: number;
  aqi: number;
  pm25: number;
  pm10?: number;
  status: "Good" | "Moderate" | "Unhealthy" | "Unhealthy for Sensitive Groups" | "Very Unhealthy" | "Hazardous";
  statusColor: string;
  color: string; // Hex color for map markers
  bgColor: string;
  borderColor: string;
  dotColor: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  healthRisk: string;
  cigarettes: number;
  mainPollutant: string;
  trend: "improving" | "stable" | "worsening";
  image: string;
  description: string;
  population: string;
  recommendation: string;
  generalAdvice: string;
  localContext: string;
  activities: {
    icon: string;
    title: string;
    advice: string;
    status: "good" | "caution" | "warning" | "danger";
    description: string;
  }[];
  healthTips: string[];
}

/**
 * Unified city data array - Single source of truth
 * Data is consistent across all components
 */
export const CITIES_DATA: CityData[] = [
  {
    // Bontang - Good Air Quality (AQI 45)
    id: "bontang",
    name: "Bontang",
    province: "East Kalimantan",
    lat: 0.1344,
    lng: 117.4758,
    aqi: 45,
    pm25: 12.5,
    pm10: 15.2,
    status: "Good",
    statusColor: "text-emerald-600",
    color: "#00E400", // Green for Good
    bgColor: "from-emerald-500/10 to-green-600/20",
    borderColor: "border-emerald-500/30",
    dotColor: "bg-emerald-500",
    temperature: 28,
    humidity: 75,
    windSpeed: 15,
    visibility: 12.8,
    healthRisk: "Low",
    cigarettes: 0.6,
    mainPollutant: "PM10",
    trend: "improving",
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Industrial city known for petrochemical plants",
    population: "178,917",
    recommendation: "Perfect conditions for outdoor activities",
    generalAdvice: "Air quality is satisfactory, and air pollution poses little or no risk. Enjoy your outdoor activities!",
    localContext: "Bontang's air quality is influenced by industrial emissions from petrochemical plants and marine haze from nearby coastal areas.",
    activities: [
      {
        icon: "Activity",
        title: "Outdoor Exercise",
        advice: "All outdoor activities are safe",
        status: "good",
        description: "Perfect conditions for running, cycling, and all forms of outdoor exercise.",
      },
      {
        icon: "Users",
        title: "Sensitive Groups",
        advice: "No restrictions necessary",
        status: "good",
        description: "Children, elderly, and people with respiratory conditions can enjoy normal outdoor activities.",
      },
      {
        icon: "Wind",
        title: "Windows & Ventilation",
        advice: "Keep windows open for fresh air",
        status: "good",
        description: "Natural ventilation is encouraged. Fresh air circulation is beneficial.",
      },
    ],
    healthTips: [
      "Great day for outdoor activities and exercise",
      "Natural ventilation recommended for indoor spaces",
      "Air quality is optimal for all population groups",
      "Monitor conditions during evening industrial peak hours",
    ],
  },
  {
    // Samarinda - Moderate Air Quality (AQI 78)
    id: "samarinda",
    name: "Samarinda",
    province: "East Kalimantan",
    lat: -0.5017,
    lng: 117.1536,
    aqi: 78,
    pm25: 25.8,
    pm10: 35,
    status: "Moderate",
    statusColor: "text-yellow-600",
    color: "#FFFF00", // Yellow for Moderate
    bgColor: "from-yellow-500/10 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    dotColor: "bg-yellow-500",
    temperature: 31,
    humidity: 82,
    windSpeed: 8,
    visibility: 8.5,
    healthRisk: "Moderate",
    cigarettes: 1.2,
    mainPollutant: "PM2.5",
    trend: "stable",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Capital city of East Kalimantan Province",
    population: "827,994",
    recommendation: "Sensitive groups should limit outdoor exposure",
    generalAdvice: "Air quality is acceptable for most people, but sensitive individuals may experience minor respiratory issues.",
    localContext: "Samarinda experiences elevated pollution from coal mining dust, transportation emissions, and seasonal burning activities.",
    activities: [
      {
        icon: "Activity",
        title: "Outdoor Exercise",
        advice: "Moderate intensity activities are okay",
        status: "caution",
        description: "Reduce prolonged or heavy outdoor activities if you experience symptoms.",
      },
      {
        icon: "Users",
        title: "Sensitive Groups",
        advice: "Consider reducing outdoor activities",
        status: "warning",
        description: "Children, elderly, and people with respiratory conditions should limit outdoor exposure.",
      },
      {
        icon: "Wind",
        title: "Windows & Ventilation",
        advice: "Keep windows closed during peak hours",
        status: "caution",
        description: "Use air purifiers indoors and limit natural ventilation during high pollution periods.",
      },
    ],
    healthTips: [
      "Stay hydrated and monitor air quality regularly",
      "Consider wearing N95 masks outdoors if sensitive",
      "Keep rescue medications accessible for those with asthma",
      "Industrial emissions peak during evening hours",
    ],
  },
  {
    // Balikpapan - Unhealthy Air Quality (AQI 125)
    id: "balikpapan",
    name: "Balikpapan",
    province: "East Kalimantan",
    lat: -1.2379,
    lng: 116.8289,
    aqi: 125,
    pm25: 45.2,
    pm10: 60.5,
    status: "Unhealthy",
    statusColor: "text-red-600",
    color: "#FF0000", // Red for Unhealthy
    bgColor: "from-red-500/10 to-orange-600/20",
    borderColor: "border-red-500/30",
    dotColor: "bg-red-500",
    temperature: 29,
    humidity: 88,
    windSpeed: 4,
    visibility: 5.2,
    healthRisk: "High",
    cigarettes: 2.1,
    mainPollutant: "PM2.5",
    trend: "stable",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Major oil refining center and port city",
    population: "688,318",
    recommendation: "Avoid outdoor activities, wear N95 masks",
    generalAdvice: "Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects.",
    localContext: "Balikpapan's air quality is significantly impacted by port activities, oil refinery emissions, and heavy vehicle traffic.",
    activities: [
      {
        icon: "Activity",
        title: "Outdoor Exercise",
        advice: "Avoid outdoor activities",
        status: "danger",
        description: "Avoid strenuous outdoor activities. Consider postponing outdoor events.",
      },
      {
        icon: "Users",
        title: "Sensitive Groups",
        advice: "Avoid all outdoor activities",
        status: "danger",
        description: "Children, elderly, and people with heart/lung conditions should stay indoors.",
      },
      {
        icon: "Shield",
        title: "Protection Measures",
        advice: "Wear N95 masks when outdoors",
        status: "warning",
        description: "Use high-efficiency air filtration and consider postponing outdoor events.",
      },
    ],
    healthTips: [
      "Mandatory mask use for all outdoor activities",
      "Keep windows and doors closed at all times",
      "Run air purifiers continuously",
      "Port and refinery emissions peak during night shifts",
    ],
  },
];

/**
 * Helper function to get city data by ID
 */
export function getCityById(cityId: string): CityData | undefined {
  return CITIES_DATA.find(city => city.id === cityId);
}

/**
 * Helper function to get city data by name
 */
export function getCityByName(cityName: string): CityData | undefined {
  return CITIES_DATA.find(city => city.name.toLowerCase() === cityName.toLowerCase());
}

/**
 * Get all city IDs
 */
export function getCityIds(): string[] {
  return CITIES_DATA.map(city => city.id);
}

/**
 * Get all city names
 */
export function getCityNames(): string[] {
  return CITIES_DATA.map(city => city.name);
}
