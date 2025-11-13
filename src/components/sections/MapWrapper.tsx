import dynamic from "next/dynamic";

const AirQualityMapSection = dynamic(() => import("./AirQualityMapSection"), {
  ssr: false,
  loading: () => (
    <div className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Air Quality Map
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Loading interactive map...
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-[200px] bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="h-[250px] bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

export default AirQualityMapSection;
