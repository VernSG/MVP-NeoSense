import HealthGuideSection from "@/components/sections/HealthGuideSection";
import Header from "@/components/sections/Header";
import FooterSection from "@/components/sections/FooterSection";

export default function HealthGuide() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-16">
        <HealthGuideSection />
      </div>
      <FooterSection />
    </main>
  );
}
