import Navbar from "@/components/Navbar";
import AirQualityMapSection from "@/components/sections/AirQualityMapSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        <AirQualityMapSection />
      </div>
    </div>
  );
}
