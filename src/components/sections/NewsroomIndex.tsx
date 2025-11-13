"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Static news data
interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  imageSrc: string;
  slug: string;
  description: string;
  readTime: string;
}

const NEWS_DATA: NewsArticle[] = [
  {
    id: 1,
    title: "East Kalimantan Air Quality Reaches Critical Levels Due to Industrial Emissions",
    date: "November 10, 2025",
    category: "Environment",
    categoryColor: "bg-green-100/80 text-green-800",
    imageSrc: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=800&fit=crop",
    slug: "east-kalimantan-air-quality-critical",
    description: "Recent studies show alarming trends in PM2.5 levels across major cities. Authorities recommend immediate protective measures for vulnerable populations.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "New Air Quality Monitoring Stations Deployed in Samarinda",
    date: "November 8, 2025",
    category: "Technology",
    categoryColor: "bg-blue-100/80 text-blue-800",
    imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    slug: "new-monitoring-stations-samarinda",
    description: "Advanced IoT sensors will provide real-time data on air pollutants, helping residents make informed decisions about outdoor activities.",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Health Impact Study: Children in Balikpapan Show Increased Respiratory Issues",
    date: "November 5, 2025",
    category: "Health",
    categoryColor: "bg-red-100/80 text-red-800",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    slug: "health-impact-study-balikpapan-children",
    description: "Pediatric hospitals report 30% increase in asthma cases. Local health department issues guidelines for schools and parents.",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Government Announces Green Initiative to Reduce Coal Mining Dust",
    date: "November 3, 2025",
    category: "Policy",
    categoryColor: "bg-purple-100/80 text-purple-800",
    imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    slug: "government-green-initiative-coal-mining",
    description: "New regulations require mining companies to implement dust suppression systems and regular monitoring protocols.",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Community Action: Bontang Residents Launch Urban Tree Planting Campaign",
    date: "November 1, 2025",
    category: "Community",
    categoryColor: "bg-teal-100/80 text-teal-800",
    imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    slug: "bontang-tree-planting-campaign",
    description: "Local volunteers aim to plant 10,000 trees across the city to improve air quality and create green spaces for future generations.",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Expert Analysis: Seasonal Patterns in East Kalimantan Air Quality",
    date: "October 28, 2025",
    category: "Research",
    categoryColor: "bg-amber-100/80 text-amber-800",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    slug: "seasonal-patterns-air-quality-analysis",
    description: "Scientists identify key weather patterns and industrial cycles that influence pollution levels throughout the year.",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "Smart City Solutions: AI-Powered Air Quality Forecasting System Launched",
    date: "October 25, 2025",
    category: "Innovation",
    categoryColor: "bg-indigo-100/80 text-indigo-800",
    imageSrc: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&h=600&fit=crop",
    slug: "ai-powered-air-quality-forecasting",
    description: "New predictive system uses machine learning to forecast air quality 48 hours in advance, enabling proactive health measures.",
    readTime: "5 min read",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NewsroomIndex() {
  const featuredArticle = NEWS_DATA[0];
  const regularArticles = NEWS_DATA.slice(1);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Newsroom
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Latest updates on air quality, health research, and environmental initiatives across East Kalimantan
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Featured Article - Spans 2 columns on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href={`/newsroom/${featuredArticle.slug}`}>
              <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 lg:h-96 w-full overflow-hidden">
                  <Image
                    src={featuredArticle.imageSrc}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${featuredArticle.categoryColor}`}
                    >
                      <Tag className="w-3 h-3" />
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 leading-relaxed mb-4">
                    {featuredArticle.description}
                  </CardDescription>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Regular Articles Grid */}
          {regularArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Link href={`/newsroom/${article.slug}`}>
                <Card className="group h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${article.categoryColor}`}
                      >
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3">
                      {article.description}
                    </CardDescription>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-1 transition-all">
                      Read more
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
            Load More Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
