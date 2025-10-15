import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function ApplePage() {
  const iphones = [
    {
      model: "iPhone 16 Pro Max 256GB",
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=400&fit=crop&crop=center",
      isNew: true
    },
    {
      model: "iPhone 16 Pro Max 256GB Desert Titanium",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 16 Pro Max 512GB",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=400&fit=crop&crop=center",
      isNew: true
    },
    {
      model: "iPhone 16 Plus 256GB",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=400&fit=crop&crop=center",
      isNew: true
    },
    {
      model: "iPhone 16 Plus 128GB Pink",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 15 Pro Max 256GB",
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=400&fit=crop&crop=center",
      isNew: true
    },
    {
      model: "iPhone 15 Pro Max 256GB SIM Card Slot",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 15 Pro Max 256GB Used",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 14 Pro Max 256GB",
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 14 Plus 256GB SIM Card Slot",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 13 Pro Max 128GB",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 13 Pro Max 256GB",
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 13 Pro 128GB",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 12 Pro Max 128GB",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 12 Pro 128GB",
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 12 Pro 256GB",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 12 64GB",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=400&fit=crop&crop=center",
      isNew: false
    },
    {
      model: "iPhone 8 Plus 64GB",
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=400&fit=crop&crop=center",
      isNew: false
    }
  ];

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#8a8a8a]">
        <Header />
        <div 
          className="w-full py-8 sm:py-10 lg:py-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/background-2.png)" }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {iphones.map((iphone, index) => (
            <div 
              key={index} 
              className="bg-cover bg-center bg-no-repeat rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full"
              style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div className="flex flex-col flex-grow">
                <div className="mb-4 sm:mb-5">
                  <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                    {iphone.model}
                  </h3>
                </div>
                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                  <Image 
                    src={iphone.imageUrl}
                    alt={iphone.model}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <button className="w-full sm:flex-1 text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl hover:opacity-80 transition-all duration-200 font-medium text-xs sm:text-xs shadow-sm" style={{ backgroundColor: '#414548' }}>
                    Buy
                  </button>
                  <button className="w-full sm:flex-1 text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl hover:opacity-80 transition-all duration-200 font-medium text-xs sm:text-xs shadow-sm" style={{ backgroundColor: '#414548' }}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        </div>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
