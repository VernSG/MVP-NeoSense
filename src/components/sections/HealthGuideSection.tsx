"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShieldCheck,
  Droplets,
  Wind,
  Home,
  Sprout,
  Users,
  Activity,
  AlertCircle,
  Heart,
  Baby,
  Shirt,
  Timer,
  Sun,
  Moon,
  TreePine,
  Recycle,
  MessageSquare,
  School,
  Building2,
  Car,
} from "lucide-react";

// Static health guide data
interface GuideItem {
  icon: string;
  title: string;
  description: string;
  tips: string[];
  iconColor: string;
  bgColor: string;
}

interface GuideCategory {
  id: string;
  label: string;
  description: string;
  items: GuideItem[];
}

const GUIDE_DATA: GuideCategory[] = [
  {
    id: "personal",
    label: "Pencegahan Diri",
    description: "Langkah-langkah praktis untuk melindungi diri Anda dari polusi udara",
    items: [
      {
        icon: "ShieldCheck",
        title: "Penggunaan Masker N95/KN95",
        description: "Masker berkualitas tinggi dapat menyaring hingga 95% partikel berbahaya termasuk PM2.5. Sangat penting digunakan saat AQI melebihi 100.",
        tips: [
          "Pastikan masker pas di wajah tanpa celah",
          "Ganti masker setiap 8 jam penggunaan atau jika terasa lembab",
          "Simpan masker bersih dalam wadah tertutup",
          "Hindari menyentuh bagian dalam masker",
        ],
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        icon: "Activity",
        title: "Jadwal Aktivitas Outdoor",
        description: "Pilih waktu yang tepat untuk beraktivitas di luar ruangan. Kualitas udara biasanya lebih baik di pagi hari sebelum lalu lintas padat.",
        tips: [
          "Cek AQI sebelum berolahraga di luar ruangan",
          "Hindari aktivitas berat saat AQI > 150",
          "Pilih rute jauh dari jalan raya yang sibuk",
          "Gunakan aplikasi pemantau kualitas udara real-time",
        ],
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        icon: "Droplets",
        title: "Hidrasi dan Nutrisi",
        description: "Menjaga tubuh tetap terhidrasi membantu sistem pernapasan membersihkan partikel polutan. Konsumsi makanan kaya antioksidan untuk melindungi sel-sel tubuh.",
        tips: [
          "Minum minimal 8 gelas air putih per hari",
          "Konsumsi buah-buahan kaya vitamin C (jeruk, kiwi, pepaya)",
          "Tambahkan sayuran hijau dalam menu harian",
          "Hindari makanan yang meningkatkan inflamasi",
        ],
        iconColor: "text-cyan-600",
        bgColor: "bg-cyan-100",
      },
      {
        icon: "Heart",
        title: "Pemantauan Kesehatan Berkala",
        description: "Lakukan pemeriksaan kesehatan rutin, terutama fungsi paru-paru dan jantung. Deteksi dini masalah kesehatan dapat mencegah komplikasi serius.",
        tips: [
          "Lakukan spirometri tahunan untuk cek fungsi paru",
          "Monitor tekanan darah secara berkala",
          "Konsultasi segera jika ada gejala sesak napas persisten",
          "Simpan catatan riwayat kesehatan respirasi Anda",
        ],
        iconColor: "text-red-600",
        bgColor: "bg-red-100",
      },
      {
        icon: "Baby",
        title: "Perlindungan Kelompok Rentan",
        description: "Anak-anak, lansia, dan ibu hamil lebih rentan terhadap dampak polusi udara. Perlindungan ekstra sangat diperlukan untuk kelompok ini.",
        tips: [
          "Batasi waktu bermain anak di luar saat AQI tinggi",
          "Gunakan air purifier di kamar anak dan lansia",
          "Ibu hamil hindari area dengan polusi tinggi",
          "Konsultasi dokter untuk suplemen antioksidan yang aman",
        ],
        iconColor: "text-pink-600",
        bgColor: "bg-pink-100",
      },
      {
        icon: "Shirt",
        title: "Pakaian dan Perlengkapan Pelindung",
        description: "Pakaian yang tepat dapat memberikan lapisan perlindungan tambahan dari polutan udara, terutama saat berada di luar ruangan dalam waktu lama.",
        tips: [
          "Gunakan pakaian lengan panjang saat AQI tinggi",
          "Cuci pakaian dan mandi setelah beraktivitas di luar",
          "Gunakan kacamata untuk melindungi mata dari partikel",
          "Ganti baju segera setelah tiba di rumah",
        ],
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
      },
    ],
  },
  {
    id: "indoor",
    label: "Udara Dalam Ruangan",
    description: "Strategi untuk menjaga kualitas udara di rumah dan tempat kerja",
    items: [
      {
        icon: "Wind",
        title: "Air Purifier dan Filtrasi",
        description: "Air purifier dengan filter HEPA dapat menghilangkan 99.97% partikel berukuran 0.3 mikron, termasuk PM2.5, bakteri, dan alergen.",
        tips: [
          "Pilih purifier dengan CADR sesuai ukuran ruangan",
          "Tempatkan di ruangan yang paling sering digunakan",
          "Ganti filter sesuai jadwal yang direkomendasikan",
          "Jalankan purifier 24/7 saat kualitas udara luar buruk",
        ],
        iconColor: "text-sky-600",
        bgColor: "bg-sky-100",
      },
      {
        icon: "Home",
        title: "Ventilasi dan Sirkulasi Udara",
        description: "Sistem ventilasi yang baik mencegah akumulasi polutan dalam ruangan. Namun, perlu disesuaikan dengan kondisi udara luar.",
        tips: [
          "Tutup jendela dan pintu saat AQI luar > 100",
          "Gunakan exhaust fan di dapur dan kamar mandi",
          "Buka jendela di pagi hari saat udara lebih bersih",
          "Periksa dan bersihkan AC filter secara berkala",
        ],
        iconColor: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      {
        icon: "Sprout",
        title: "Tanaman Pembersih Udara",
        description: "Beberapa tanaman hias dapat menyerap polutan dan meningkatkan kualitas udara dalam ruangan secara alami.",
        tips: [
          "Tempatkan Spider Plant untuk menyerap formaldehida",
          "Gunakan Peace Lily untuk filter benzena dan amonia",
          "Sansevieria menghasilkan oksigen di malam hari",
          "Rawat 2-3 tanaman per 100 kaki persegi ruangan",
        ],
        iconColor: "text-emerald-600",
        bgColor: "bg-emerald-100",
      },
      {
        icon: "Timer",
        title: "Kontrol Sumber Polusi Indoor",
        description: "Banyak aktivitas rumah tangga yang menghasilkan polutan. Identifikasi dan minimalkan sumber polusi dalam ruangan.",
        tips: [
          "Hindari merokok di dalam rumah",
          "Gunakan produk pembersih ramah lingkungan",
          "Ventilasi yang baik saat memasak",
          "Hindari penggunaan lilin dan dupa berlebihan",
        ],
        iconColor: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      {
        icon: "Sun",
        title: "Manajemen Kelembaban",
        description: "Kelembaban yang tepat (40-60%) mencegah pertumbuhan jamur dan tungau debu, yang dapat memperburuk kualitas udara dalam ruangan.",
        tips: [
          "Gunakan dehumidifier di ruangan lembab",
          "Perbaiki kebocoran air segera",
          "Jemur pakaian di luar atau ruangan berventilasi",
          "Monitor kelembaban dengan hygrometer",
        ],
        iconColor: "text-yellow-600",
        bgColor: "bg-yellow-100",
      },
      {
        icon: "Moon",
        title: "Kualitas Udara Kamar Tidur",
        description: "Kualitas udara saat tidur sangat penting karena kita menghabiskan sepertiga hidup di kamar tidur. Udara bersih mendukung tidur berkualitas.",
        tips: [
          "Jalankan air purifier sepanjang malam",
          "Cuci seprai dan sarung bantal setiap minggu",
          "Hindari karpet tebal yang menyimpan debu",
          "Jaga suhu kamar sejuk (18-22°C)",
        ],
        iconColor: "text-violet-600",
        bgColor: "bg-violet-100",
      },
    ],
  },
  {
    id: "community",
    label: "Tindakan Komunitas",
    description: "Aksi kolektif untuk mengurangi polusi dan meningkatkan kesadaran masyarakat",
    items: [
      {
        icon: "TreePine",
        title: "Program Penghijauan Urban",
        description: "Penanaman pohon di area perkotaan dapat mengurangi polusi udara hingga 25%. Pohon menyerap CO2 dan partikel polutan sambil menghasilkan oksigen.",
        tips: [
          "Ikuti program penanaman pohon komunitas",
          "Pilih spesies pohon yang cocok untuk daerah tropis",
          "Rawat pohon yang sudah ditanam secara berkelanjutan",
          "Target minimal 10,000 pohon per tahun di kota Anda",
        ],
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        icon: "Car",
        title: "Transportasi Ramah Lingkungan",
        description: "Mengurangi penggunaan kendaraan pribadi dapat secara signifikan menurunkan emisi gas buang yang menjadi penyumbang utama polusi udara perkotaan.",
        tips: [
          "Gunakan transportasi publik atau carpooling",
          "Bersepeda atau jalan kaki untuk jarak dekat",
          "Dukung pengembangan infrastruktur sepeda",
          "Kampanyekan car-free day bulanan di komunitas",
        ],
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        icon: "School",
        title: "Edukasi dan Kesadaran Publik",
        description: "Meningkatkan pemahaman masyarakat tentang dampak polusi udara dan cara mengatasinya adalah kunci perubahan jangka panjang.",
        tips: [
          "Adakan workshop tentang kualitas udara di sekolah",
          "Buat kampanye media sosial #UdaraBersih",
          "Distribusikan materi edukasi di komunitas",
          "Libatkan tokoh masyarakat sebagai duta lingkungan",
        ],
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      {
        icon: "Building2",
        title: "Advokasi Kebijakan Lingkungan",
        description: "Tekanan dari masyarakat dapat mendorong pemerintah dan industri untuk menerapkan standar lingkungan yang lebih ketat.",
        tips: [
          "Kirim petisi untuk regulasi emisi industri",
          "Hadiri forum publik tentang lingkungan",
          "Monitor implementasi kebijakan yang sudah ada",
          "Laporkan pelanggaran lingkungan ke otoritas",
        ],
        iconColor: "text-red-600",
        bgColor: "bg-red-100",
      },
      {
        icon: "Recycle",
        title: "Pengurangan Limbah dan Pembakaran",
        description: "Pembakaran sampah adalah sumber utama polusi udara di banyak komunitas. Pengelolaan limbah yang baik dapat mengurangi emisi berbahaya.",
        tips: [
          "Kampanyekan larangan pembakaran sampah",
          "Promosikan program 3R (Reduce, Reuse, Recycle)",
          "Dukung bank sampah komunitas",
          "Edukasi tentang kompos organik rumah tangga",
        ],
        iconColor: "text-teal-600",
        bgColor: "bg-teal-100",
      },
      {
        icon: "Users",
        title: "Kelompok Pemantau Kualitas Udara",
        description: "Membentuk kelompok citizen science untuk memantau dan melaporkan kualitas udara lokal dapat mengisi kesenjangan data resmi.",
        tips: [
          "Bentuk kelompok pemantau udara di lingkungan",
          "Gunakan sensor portable untuk pengukuran",
          "Bagikan data melalui platform online",
          "Koordinasi dengan pemerintah lokal",
        ],
        iconColor: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      {
        icon: "MessageSquare",
        title: "Jaringan Komunikasi Darurat",
        description: "Sistem peringatan dini untuk episode polusi tinggi dapat menyelamatkan nyawa dengan memberi waktu masyarakat untuk bersiap.",
        tips: [
          "Buat grup WhatsApp/Telegram komunitas",
          "Bagikan alert AQI tinggi secara real-time",
          "Koordinasi tindakan darurat bersama",
          "Siapkan jalur komunikasi dengan puskesmas",
        ],
        iconColor: "text-amber-600",
        bgColor: "bg-amber-100",
      },
    ],
  },
];

// Icon mapping
const iconMap: Record<string, any> = {
  ShieldCheck,
  Droplets,
  Wind,
  Home,
  Sprout,
  Users,
  Activity,
  AlertCircle,
  Heart,
  Baby,
  Shirt,
  Timer,
  Sun,
  Moon,
  TreePine,
  Recycle,
  MessageSquare,
  School,
  Building2,
  Car,
};

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

export default function HealthGuideSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <AlertCircle className="w-4 h-4" />
            Panduan Kesehatan & Penanggulangan
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Health Guide
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Panduan komprehensif untuk melindungi diri, keluarga, dan komunitas dari dampak polusi udara.
            Ambil langkah nyata untuk hidup lebih sehat.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 bg-white p-2 rounded-xl shadow-lg h-auto gap-2">
              {GUIDE_DATA.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-4 text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {GUIDE_DATA.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                {/* Category Description */}
                <div className="text-center mb-12">
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Guide Items Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.items.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    
                    return (
                      <motion.div key={index} variants={itemVariants}>
                        <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <CardHeader>
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`${item.bgColor} p-4 rounded-2xl ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="text-slate-600 leading-relaxed">
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                                Tips Praktis:
                              </h4>
                              <ul className="space-y-2">
                                {item.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mari Bersama Ciptakan Udara Lebih Bersih
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Setiap tindakan kecil berkontribusi pada perubahan besar. Mulai dari diri sendiri, 
                  lindungi keluarga, dan ajak komunitas untuk peduli kualitas udara.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                    Download Panduan Lengkap
                  </button>
                  <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-white/20">
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
