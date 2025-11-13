# NeoSense - Air Quality Monitoring System MVP

Aplikasi monitoring kualitas udara real-time untuk East Kalimantan dengan fokus pada kesehatan masyarakat dan edukasi lingkungan.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Dokumentasi Routes](#dokumentasi-routes)
- [State Project Saat Ini](#state-project-saat-ini)
- [Kekurangan & Ruang Kembang](#kekurangan--ruang-kembang)
- [Setup & Running](#setup--running)

---

## ✨ Fitur Utama

1. **Dashboard AQI Real-time**
   - Monitoring kualitas udara 3 kota: Bontang, Samarinda, Balikpapan
   - Visualisasi AQI dengan warna dan status kesehatan
   - Tren AQI dalam 7 hari dengan chart interaktif

2. **Peta Interaktif**
   - Leaflet map dengan marker kota
   - Informasi real-time saat hover
   - Responsif untuk mobile & desktop

3. **Newsroom**
   - 7 artikel berita tentang kualitas udara
   - Kategori: Environment, Technology, Health, Policy, Community, Research, Innovation
   - Halaman detail artikel dengan konten lengkap
   - Grid layout responsif dengan featured article

4. **Health Guide**
   - 3 tab panduan kesehatan: Personal Protection, Indoor Air, Community Action
   - 19 panduan dengan 76 tips praktis
   - Icon integration dengan Lucide React
   - Easily expandable content structure

5. **Smart Recommendations**
   - Rekomendasi aktivitas berdasarkan AQI
   - Health risk assessment
   - Cigarette equivalent indicator

6. **Responsive Design**
   - Mobile-first approach
   - Tailwind CSS untuk styling
   - Framer Motion untuk animasi smooth
   - shadcn/ui components untuk UI consistency

---

## 🛠 Tech Stack

**Frontend Framework:**
- Next.js 16.0.1 (App Router, SSR/SSG)
- React 19.2.0
- TypeScript 5.0

**Styling & UI:**
- Tailwind CSS 4.0
- Framer Motion 12.23.24 (animations)
- shadcn/ui (Card, Tabs, Button components)
- Lucide React 0.553.0 (icons)

**Maps & Charts:**
- Leaflet 1.9.4 (interactive maps)
- Recharts 2.15.4 (data visualization)

**State Management:**
- React Context API (city selection)
- React Hooks (useState, useContext, useMemo)

**Build & Dev Tools:**
- Node.js LTS
- npm/yarn/pnpm
- PostCSS 4.0
- Webpack (Next.js bundler)

---

## 📁 Struktur Project

```
src/
├── app/                              # Next.js App Router pages
│   ├── page.tsx                     # Root page → redirect /city
│   ├── layout.tsx                   # Root layout + Header
│   ├── globals.css                  # Global Tailwind styles
│   ├── city/
│   │   ├── layout.tsx              # City route layout (Sidebar + CityProvider)
│   │   └── page.tsx                # Main AQI dashboard page
│   ├── newsroom/
│   │   ├── page.tsx                # Newsroom listing
│   │   └── [slug]/
│   │       └── page.tsx            # Dynamic article detail
│   └── health-guide/
│       └── page.tsx                # Health guide page
│
├── components/                       # React components
│   ├── Sidebar.tsx                 # City navigation sidebar
│   ├── LeafletMap.tsx              # Leaflet map wrapper
│   └── sections/
│       ├── Header.tsx              # Page navigation header
│       ├── FooterSection.tsx       # Footer component
│       ├── HeroSection.tsx         # AQI hero display
│       ├── AQITrendChart.tsx       # 7-day trend chart
│       ├── DashboardSection.tsx    # Dashboard widgets
│       ├── AirQualityMapSection.tsx # Map visualization
│       ├── LocalContextSection.tsx # Contextual info
│       ├── SmartRecommendationsSection.tsx # Activity recommendations
│       ├── FeaturesSection.tsx     # Features showcase
│       ├── NewsroomIndex.tsx       # News article grid
│       ├── ArticleDetail.tsx       # Article detail content
│       ├── HealthGuideSection.tsx  # Health guide tabs
│       └── MapWrapper.tsx          # Map section wrapper
│   └── ui/
│       ├── button.tsx              # Base button component
│       ├── card.tsx                # Base card component
│       ├── chart.tsx               # Recharts wrapper
│       └── tabs.tsx                # Tabs component
│
├── contexts/                        # React Context & Hooks
│   └── CityContext.tsx             # City selection state management
│
├── data/                            # Static data sources
│   └── airQualityData.ts           # Consolidated AQI data
│       - CITIES_DATA array (3 cities)
│       - Helper functions: getCityById(), getCityByName()
│       - CityData interface definition
│
└── lib/
    └── utils.ts                     # Utility functions
        - cn() for Tailwind class merging
```

---

## 🗺 Dokumentasi Routes

### Public Routes (Tersedia untuk semua pengguna)

| Route | Component | Fitur |
|-------|-----------|-------|
| `/` | `page.tsx` | Redirect ke `/city` |
| `/city` | `city/page.tsx` | **Main Dashboard** - AQI real-time, trend, map, recommendations |
| `/newsroom` | `newsroom/page.tsx` | **Newsroom Hub** - 7 artikel dalam grid layout |
| `/newsroom/[slug]` | `newsroom/[slug]/page.tsx` | **Article Detail** - Artikel lengkap dengan share button |
| `/health-guide` | `health-guide/page.tsx` | **Health Education** - 3 tab dengan 19 panduan |

### Layout Hierarchy

```
layout.tsx (root)
├── Header (page navigation)
├── /city
│   ├── layout.tsx (CityProvider + Sidebar)
│   └── page.tsx (dashboard content)
├── /newsroom
│   ├── Header (same)
│   ├── NewsroomIndex
│   └── Footer
├── /newsroom/[slug]
│   ├── Header
│   ├── ArticleDetail
│   └── Footer
└── /health-guide
    ├── Header
    ├── HealthGuideSection
    └── Footer
```

### Navigation Structure

**Header Navigation (semua pages):**
- Home → `/city`
- Newsroom → `/newsroom`
- Health Guide → `/health-guide`

**Sidebar Navigation (/city only):**
- Bontang → mengset context city ke "bontang"
- Samarinda → mengset context city ke "samarinda"
- Balikpapan → mengset context city ke "balikpapan"

---

## 📊 State Project Saat Ini

### ✅ Completed Features

| Feature | Status | Details |
|---------|--------|---------|
| **Data Consolidation** | ✅ | CITIES_DATA di `src/data/airQualityData.ts` |
| **AQI Dashboard** | ✅ | Real-time AQI dengan 3 kota (Bontang/Samarinda/Balikpapan) |
| **Interactive Map** | ✅ | Leaflet map dengan markers & info popups |
| **Trend Chart** | ✅ | 7-day AQI trend menggunakan Recharts |
| **Smart Recommendations** | ✅ | Activity suggestions berdasarkan AQI level |
| **City Context** | ✅ | React Context API untuk city selection |
| **Newsroom** | ✅ | 7 artikel statis dengan grid layout |
| **Article Detail** | ✅ | Full-page artikel dengan 2 artikel lengkap |
| **Health Guide** | ✅ | 3 tabs dengan 19 panduan & 76 tips |
| **Responsive Design** | ✅ | Mobile-first Tailwind CSS layout |
| **Animations** | ✅ | Framer Motion scroll triggers & stagger effects |
| **Image Configuration** | ✅ | Unsplash images configured in next.config.ts |

### 📊 Data Structure

**Cities Available:**
```typescript
- Bontang: AQI 45 (Good), PM2.5: 10 µg/m³
- Samarinda: AQI 78 (Moderate), PM2.5: 28 µg/m³
- Balikpapan: AQI 125 (Unhealthy), PM2.5: 52 µg/m³
```

**Article Structure:**
- 7 news articles dengan kategori & metadata
- 2 full-length articles di ArticleDetail (East Kalimantan Air Quality Crisis, Expert Analysis)
- Related articles section

**Health Guide Structure:**
- Personal Protection (6 panduan)
- Indoor Air Quality (7 panduan)
- Community Action (6 panduan)
- Total: 19 panduan dengan 76 actionable tips

### Performance Metrics

- Next.js 16 dengan App Router (modern framework)
- TypeScript strict mode untuk type safety
- Optimized images dari Unsplash
- Responsive design tested di mobile/tablet/desktop

---

## ⚠️ Kekurangan & Ruang Kembang

### 🔴 Critical Missing Features

#### 1. **Data Integration (Priority: CRITICAL)**
   - ❌ Real API integration - saat ini semua data statis
   - ❌ Backend server/database untuk weather API
   - ❌ Real-time AQI updates
   - 📝 **Action Items:**
     - Integrate dengan air quality API (WAQI, IQAir, atau local provider)
     - Setup backend (Node.js/Python) untuk data aggregation
     - Implement WebSocket untuk real-time updates
     - Add caching strategy (Redis/ISR)

#### 2. **User Authentication & Personalization**
   - ❌ User login/registration system
   - ❌ User preferences & saved locations
   - ❌ Notification preferences
   - 📝 **Action Items:**
     - Implement NextAuth.js untuk authentication
     - Add database schema untuk users
     - Create preference management panel
     - Implement push notifications

#### 3. **Advanced Features**
   - ❌ Search functionality di newsroom
   - ❌ Pagination untuk news articles
   - ❌ Comments/discussion section
   - ❌ User-submitted content/tips
   - 📝 **Action Items:**
     - Add full-text search (Meilisearch/Algolia)
     - Implement pagination component
     - Setup comment moderation system
     - Create UGC submission form

### 🟡 Medium Priority Improvements

#### 4. **Content Expansion**
   - ❌ Lebih banyak artikel (saat ini: 7)
   - ❌ Video content
   - ❌ Infografis & data visualization
   - ❌ Multi-language support (ID/EN/Arab)
   - 📝 **Action Items:**
     - CMS integration (Strapi/Sanity) untuk article management
     - Add video hosting (YouTube embed atau self-hosted)
     - Create infographic library
     - i18n implementation (next-i18next)

#### 5. **SEO & Analytics**
   - ❌ Meta tags optimization
   - ❌ Schema markup untuk structured data
   - ❌ Google Analytics integration
   - ❌ Performance monitoring
   - 📝 **Action Items:**
     - Add next-seo package
     - Implement JSON-LD schema
     - Setup Google Analytics 4
     - Add Sentry untuk error tracking

#### 6. **Mobile App**
   - ❌ Native iOS/Android app
   - ❌ PWA offline support
   - ❌ Home screen widget
   - 📝 **Action Items:**
     - Implement workbox PWA
     - Add manifest.json
     - Service worker untuk offline pages
     - React Native untuk iOS/Android

### 🟢 Nice-to-Have Features

#### 7. **Advanced Analytics**
   - ❌ AQI prediction/forecasting
   - ❌ Historical data trends (monthly/yearly)
   - ❌ Comparison tools antar kota
   - 📝 **Action Items:**
     - Machine learning model untuk forecasting
     - Expand database dengan historical data
     - Add advanced charting (Apache ECharts)

#### 8. **Community Features**
   - ❌ Air quality reporting by users
   - ❌ Community discussion forum
   - ❌ Event/seminar listings
   - ❌ Leaderboard untuk environmental initiatives
   - 📝 **Action Items:**
     - Add crowdsourced data module
     - Setup forum (Discourse/custom)
     - Event management system
     - Gamification (points, badges)

#### 9. **Integration & Partners**
   - ❌ Social media sharing optimization
   - ❌ Government agency integration
   - ❌ NGO partnership tools
   - ❌ API untuk third-party developers
   - 📝 **Action Items:**
     - OpenGraph meta tags
     - REST API endpoint
     - Developer documentation
     - Rate limiting & API keys

#### 10. **DevOps & Deployment**
   - ❌ CI/CD pipeline (GitHub Actions)
   - ❌ Docker containerization
   - ❌ Environment-specific configs
   - ❌ Monitoring & uptime checker
   - 📝 **Action Items:**
     - GitHub Actions workflow
     - Dockerfile setup
     - .env.example documentation
     - Vercel/AWS deployment

### 🏗 Architecture Improvements

#### Code Quality
- ✅ TypeScript strict mode
- ⚠️ Need unit tests (Jest/Vitest)
- ⚠️ Need E2E tests (Playwright/Cypress)
- ⚠️ Need storybook untuk component docs

#### Performance Optimization
- ✅ Image optimization (next/image)
- ✅ Code splitting (dynamic imports)
- ⚠️ Need database query optimization
- ⚠️ Need caching strategy
- ⚠️ Need performance monitoring

#### Security
- ✅ TypeScript type safety
- ⚠️ Need CORS configuration
- ⚠️ Need rate limiting
- ⚠️ Need input validation/sanitization
- ⚠️ Need security headers (HSTS, CSP)

### 💡 Recommended Implementation Roadmap

**Phase 1 (MVP Current - 1-2 minggu):**
- ✅ Static content & layouts (DONE)
- ⚠️ Deploy to Vercel
- ⚠️ Setup monitoring & error tracking

**Phase 2 (MVP Enhancement - 2-3 minggu):**
- API integration dengan air quality provider
- Database setup untuk users & preferences
- Implement search di newsroom

**Phase 3 (Growth - 1-2 bulan):**
- User authentication & personalization
- CMS untuk article management
- Analytics & SEO optimization

**Phase 4 (Scale - 2-3 bulan):**
- Mobile app (PWA + native)
- Advanced features (forecasting, communities)
- API untuk developers

---

## ⚙️ Setup & Running

### Prerequisites
```bash
Node.js 18+ (LTS recommended)
npm, yarn, pnpm, atau bun
```

### Installation
```bash
# Clone repository
git clone https://github.com/VernSG/MVP-NeoSense.git
cd MVP-NeoSense

# Install dependencies
npm install
# atau
yarn install
pnpm install
bun install
```

### Development
```bash
# Start development server (with Webpack bundler)
npm run dev

# Open browser
http://localhost:3000
```

### Build & Production
```bash
# Build untuk production
npm run build

# Start production server
npm start
```

### Environment Variables
```bash
# .env.local (jika ada API keys nanti)
NEXT_PUBLIC_API_URL=http://localhost:3000
# etc
```

---

## 📝 File & Component Reference

### Key Data Files
- `src/data/airQualityData.ts` - Single source of truth untuk AQI data

### Key Components
- `Header.tsx` - Page navigation (Home, Newsroom, Health Guide)
- `Sidebar.tsx` - City selector untuk /city route
- `HeroSection.tsx` - AQI hero display
- `AQITrendChart.tsx` - 7-day trend visualization
- `AirQualityMapSection.tsx` - Leaflet map dengan markers
- `SmartRecommendationsSection.tsx` - Activity recommendations
- `NewsroomIndex.tsx` - News article grid
- `ArticleDetail.tsx` - Full article content
- `HealthGuideSection.tsx` - Health guide dengan tabs

### Utility Functions
- `getCityById(id)` - Get city data by ID
- `getCityByName(name)` - Get city data by name
- `cn()` - Merge Tailwind classes

---

## 🚀 Next Steps

1. **API Integration** → Real-time AQI data
2. **Database Setup** → User data & preferences
3. **Authentication** → User accounts & login
4. **Testing** → Unit & E2E tests
5. **Deployment** → Vercel/AWS setup
6. **Monitoring** → Analytics & error tracking

---

## 📄 License

MIT License - Bebas untuk digunakan

---

**Last Updated:** November 13, 2025
**Maintainer:** VernSG
