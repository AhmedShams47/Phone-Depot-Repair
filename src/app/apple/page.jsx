import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function ApplePage() {
  const iphones = [
    {
      model: "iPhone 16 Pro Max 256GB",
      imageUrl: "/iphone-16-pro-max.png",
      isNew: true
    },
    {
      model: "iPhone 16 Pro Max 256GB Desert Titanium",
      imageUrl: "/iPhone_12_Pro_Max 2.png",
      isNew: false
    },
    {
      model: "iPhone 16 Pro Max 512GB",
      imageUrl: "/iPhone_12_Pro_Max 3.png",
      isNew: true
    },
    {
      model: "iPhone 16 Plus 256GB",
      imageUrl: "/iPhone 16 Plus 256GB 1.png",
      isNew: true
    },
    {
      model: "iPhone 16 Plus 128GB Pink",
      imageUrl: "/iPhone 16 Plus 128GB Pink 1.png",
      isNew: false
    },
    {
      model: "iPhone 15 Pro Max 256GB",
      imageUrl: "/Iphone 15 pro nax. 2.png",
      isNew: true
    },
    {
      model: "iPhone 15 Pro Max 256GB SIM Card Slot",
      imageUrl: "/15_pro 2.png",
      isNew: false
    },
    {
      model: "iPhone 15 Pro Max 256GB Used",
      imageUrl: "/15 1.png",
      isNew: false
    },
    {
      model: "iPhone 14 Pro Max 256GB",
      imageUrl: "/14_pro_max- 2.png",
      isNew: false
    },
    {
      model: "iPhone 14 Plus 256GB SIM Card Slot",
      imageUrl: "/iPhone_13_PRO_MAX 1.png",
      isNew: false
    },
    {
      model: "iPhone 13 Pro Max 128GB",
      imageUrl: "/iPhone_13- 1.png",
      isNew: false
    },
    {
      model: "iPhone 13 Pro Max 256GB",
      imageUrl: "/iPhone_13_PRO- 1.png",
      isNew: false
    },
    {
      model: "iPhone 13 Pro 128GB",
      imageUrl: "/iPhone_12_Pro_Max 7.png",
      isNew: false
    },
    {
      model: "iPhone 12 Pro Max 128GB",
      imageUrl: "/iPhone_12_Pro_Max 5.png",     
      isNew: false
    },
    {
      model: "iPhone 12 Pro 128GB",
      imageUrl: "/iPhone_12_Pro_Max 6.png",
      isNew: false
    },
    {
      model: "iPhone 12 Pro 256GB",
      imageUrl: "/iPhone_12_pro- 2.png",
      isNew: false
    },
    {
      model: "iPhone 12 64GB",
      imageUrl: "/iPhone 12 64GB 1.png",
      isNew: false
    },
    {
      model: "iPhone 8 Plus 64GB",
      imageUrl: "/iPhone 8 Plus 64GB 1.png",
      isNew: false
    }
  ];

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#8a8a8a]">
        <Header />
        <div 
          className="w-full py-8 sm:py-10 lg:py-12 bg-cover bg-center bg-no-repeat -mt-8 mb-6"
          style={{ backgroundImage: "url(/background-2.png)" }} 
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {iphones.map((iphone, index) => (
            <div 
              key={index} 
              className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full"
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
                
                <div className="mt-auto">
                  <Link href="/contact-form">
                    <button className="w-full text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl hover:opacity-80 transition-all duration-200 font-medium text-xs sm:text-xs shadow-sm" style={{ backgroundColor: '#414548' }}>
                      Learn More
                    </button>
                  </Link>
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
