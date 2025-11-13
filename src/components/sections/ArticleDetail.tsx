"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, Share, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Static article content data
interface ArticleContent {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  imageSrc: string;
  imageCaption: string;
  content: {
    type: "paragraph" | "heading" | "quote" | "callout" | "list";
    text?: string;
    items?: string[];
    icon?: string;
  }[];
}

const ARTICLE_CONTENT: Record<string, ArticleContent> = {
  "east-kalimantan-air-quality-critical": {
    slug: "east-kalimantan-air-quality-critical",
    title: "East Kalimantan Air Quality Reaches Critical Levels Due to Industrial Emissions",
    author: "Dr. Sarah Chen",
    authorRole: "Environmental Health Researcher",
    date: "November 10, 2025",
    readTime: "5 min read",
    category: "Environment",
    categoryColor: "bg-green-100/80 text-green-800",
    imageSrc: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=800&fit=crop",
    imageCaption: "Industrial facilities in East Kalimantan contribute to elevated pollution levels",
    content: [
      {
        type: "paragraph",
        text: "Recent air quality monitoring data from East Kalimantan reveals alarming trends in PM2.5 concentrations across major urban centers. The provinces three largest cities—Balikpapan, Samarinda, and Bontang—have experienced sustained periods of unhealthy air quality levels, prompting health officials to issue protective guidelines for vulnerable populations.",
      },
      {
        type: "paragraph",
        text: "Over the past month, PM2.5 levels in Balikpapan have consistently exceeded the World Health Organization's recommended 24-hour average of 15 μg/m³, with readings frequently surpassing 45 μg/m³. These elevated levels are primarily attributed to emissions from petrochemical facilities, port operations, and increased vehicular traffic.",
      },
      {
        type: "heading",
        text: "Primary Sources of Air Pollution",
      },
      {
        type: "paragraph",
        text: "Environmental scientists have identified three major contributors to the regions deteriorating air quality. Industrial emissions from petrochemical plants and oil refineries account for approximately 40% of particulate matter pollution. These facilities operate around the clock, releasing a complex mixture of pollutants including sulfur dioxide, nitrogen oxides, and volatile organic compounds.",
      },
      {
        type: "quote",
        text: "We are witnessing a concerning pattern where industrial growth is outpacing environmental safeguards. The health implications for local communities, particularly children and elderly residents, cannot be overstated.",
      },
      {
        type: "paragraph",
        text: "Transportation emissions constitute another significant factor, contributing roughly 30% of total air pollution. The rapid increase in vehicle ownership, coupled with aging diesel trucks used for coal transport, has created persistent pollution hotspots along major transportation corridors. Peak pollution levels typically occur during morning and evening rush hours, with concentrations remaining elevated near busy intersections and highway entrances.",
      },
      {
        type: "callout",
        text: "⚠️ Health Alert: Residents with respiratory conditions, cardiovascular disease, or compromised immune systems should limit outdoor activities when AQI exceeds 100. Children and elderly individuals are particularly vulnerable to air pollution health effects.",
      },
      {
        type: "heading",
        text: "Health Impact Assessment",
      },
      {
        type: "paragraph",
        text: "Local health authorities have documented a measurable increase in respiratory-related hospital visits over the past six months. Pediatric wards in Balikpapan report a 30% surge in asthma-related emergency visits compared to the same period last year. The correlation between elevated PM2.5 levels and health outcomes is becoming increasingly evident in clinical data.",
      },
      {
        type: "paragraph",
        text: "Long-term exposure to particulate matter pollution has been linked to numerous adverse health outcomes, including decreased lung function, increased incidence of respiratory infections, and elevated risk of cardiovascular events. Studies suggest that sustained exposure to PM2.5 levels above 35 μg/m³ can reduce life expectancy by several years.",
      },
      {
        type: "list",
        items: [
          "Immediate respiratory symptoms: coughing, wheezing, shortness of breath",
          "Aggravation of existing heart and lung conditions",
          "Increased susceptibility to respiratory infections",
          "Long-term cardiovascular health impacts",
          "Potential developmental effects in children",
        ],
      },
      {
        type: "heading",
        text: "Government Response and Mitigation Measures",
      },
      {
        type: "paragraph",
        text: "Provincial authorities have announced a comprehensive action plan to address the air quality crisis. The initiative includes mandatory emissions testing for industrial facilities, enhanced vehicle emissions standards, and the deployment of additional real-time air quality monitoring stations throughout the region.",
      },
      {
        type: "paragraph",
        text: "Governor Andi Harun emphasized the governments commitment to balancing economic development with environmental protection. New regulations will require major industrial facilities to install state-of-the-art air filtration systems and implement continuous emissions monitoring. Companies failing to meet the new standards will face substantial penalties and potential operational restrictions.",
      },
      {
        type: "callout",
        text: "💡 Protective Measures: Use N95 or KN95 masks when outdoors during high pollution days, run air purifiers indoors, keep windows closed during peak pollution hours, and monitor local AQI readings through reliable apps.",
      },
      {
        type: "paragraph",
        text: "Community engagement programs are being launched to raise public awareness about air quality issues and protective measures. Schools will receive air quality education materials, and public service announcements will provide real-time pollution updates and health recommendations.",
      },
      {
        type: "heading",
        text: "Looking Forward: Sustainable Solutions",
      },
      {
        type: "paragraph",
        text: "Environmental experts stress that addressing East Kalimantans air quality challenges will require sustained commitment and coordinated action across multiple sectors. Transitioning to cleaner industrial processes, expanding public transportation infrastructure, and implementing green urban planning principles are essential components of a long-term solution.",
      },
      {
        type: "paragraph",
        text: "Regional cooperation between government agencies, industry stakeholders, and civil society organizations will be crucial for developing effective, sustainable approaches to air quality management. The success of these efforts will ultimately determine the health and wellbeing of millions of residents across East Kalimantan.",
      },
    ],
  },
  "new-monitoring-stations-samarinda": {
    slug: "new-monitoring-stations-samarinda",
    title: "New Air Quality Monitoring Stations Deployed in Samarinda",
    author: "Michael Tan",
    authorRole: "Technology Reporter",
    date: "November 8, 2025",
    readTime: "4 min read",
    category: "Technology",
    categoryColor: "bg-blue-100/80 text-blue-800",
    imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
    imageCaption: "Advanced IoT sensors provide real-time air quality data",
    content: [
      {
        type: "paragraph",
        text: "Samarinda has taken a significant step forward in environmental monitoring with the installation of 15 state-of-the-art air quality monitoring stations throughout the city. These advanced IoT-enabled sensors will provide real-time data on multiple air pollutants, enabling residents to make informed decisions about outdoor activities and health precautions.",
      },
      {
        type: "paragraph",
        text: "The new monitoring network represents a significant upgrade from the citys previous system, which relied on just three manual monitoring stations. The enhanced coverage will provide unprecedented visibility into local air quality patterns and pollution sources.",
      },
      {
        type: "heading",
        text: "Advanced Sensor Technology",
      },
      {
        type: "paragraph",
        text: "Each monitoring station is equipped with precision sensors capable of measuring PM2.5, PM10, nitrogen dioxide, sulfur dioxide, ozone, and carbon monoxide levels. The devices transmit data every five minutes to a central server, where sophisticated algorithms process and validate the information before making it publicly available.",
      },
      {
        type: "quote",
        text: "This technology empowers citizens with the information they need to protect their health. Knowledge is the first step toward meaningful change.",
      },
      {
        type: "paragraph",
        text: "The monitoring stations are strategically positioned near schools, hospitals, residential areas, and industrial zones to capture a comprehensive picture of air quality across the city. Solar panels and battery backup systems ensure continuous operation even during power outages.",
      },
      {
        type: "callout",
        text: "📱 Download the AeroSense app to access real-time air quality data from all monitoring stations in your area. Get personalized health recommendations and pollution alerts.",
      },
      {
        type: "heading",
        text: "Public Access and Transparency",
      },
      {
        type: "paragraph",
        text: "All data collected by the monitoring network will be freely accessible to the public through a dedicated web platform and mobile application. The system includes historical data analysis tools, allowing researchers and policymakers to identify long-term trends and evaluate the effectiveness of pollution control measures.",
      },
      {
        type: "paragraph",
        text: "The initiative has been praised by environmental advocates as a model for transparency and public engagement in environmental health issues. Similar monitoring networks are now being planned for other major cities across East Kalimantan.",
      },
    ],
  },
};

export default function ArticleDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Get article data or use default
  const article = ARTICLE_CONTENT[slug] || ARTICLE_CONTENT["east-kalimantan-air-quality-critical"];

  return (
    <article className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/newsroom"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Newsroom
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-50 py-12 lg:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${article.categoryColor}`}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <p className="font-semibold text-slate-900">{article.author}</p>
                <p className="text-sm text-slate-500">{article.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{article.date}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-700">Share:</span>
            <button 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 hover:text-slate-900 text-sm font-medium"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    url: window.location.href,
                  });
                }
              }}
            >
              <Share className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12"
      >
        <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={article.imageSrc}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <p className="text-center text-sm text-slate-500 mt-4 italic">
          {article.imageCaption}
        </p>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="prose prose-lg prose-slate max-w-none">
          {article.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h2 key={index} className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                    {block.text}
                  </h2>
                );
              case "quote":
                return (
                  <blockquote key={index} className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50/50 italic">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      {block.text}
                    </p>
                  </blockquote>
                );
              case "callout":
                return (
                  <Card key={index} className="my-8 border-l-4 border-amber-500 bg-amber-50/50">
                    <CardContent className="p-6">
                      <p className="text-base text-slate-800 leading-relaxed">
                        {block.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              case "list":
                return (
                  <ul key={index} className="space-y-3 my-6 ml-6">
                    {block.items?.map((item, i) => (
                      <li key={i} className="text-lg text-slate-700 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Tags Section */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Air Quality", "East Kalimantan", "Health", "Environment", "Pollution"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50/30 border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {article.author}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {article.authorRole}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Contributing to environmental health research and public awareness initiatives across Southeast Asia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(ARTICLE_CONTENT)
              .filter((a) => a.slug !== article.slug)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/newsroom/${relatedArticle.slug}`}>
                  <Card className="group h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={relatedArticle.imageSrc}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-3 ${relatedArticle.categoryColor}`}>
                        {relatedArticle.category}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-slate-500">{relatedArticle.date}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </motion.div>
    </article>
  );
}
