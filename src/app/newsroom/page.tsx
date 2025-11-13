import NewsroomIndex from "@/components/sections/NewsroomIndex";
import Header from "@/components/sections/Header";
import FooterSection from "@/components/sections/FooterSection";

export default function Newsroom() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-16">
        <NewsroomIndex />
      </div>
      <FooterSection />
    </main>
  );
}
