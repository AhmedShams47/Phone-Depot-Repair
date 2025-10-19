import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function SamsungPage() {
  const samsungPhones = [
    {
      model: "Galaxy Z Fold 6 1TB",
      imageUrl: "/Galaxy Z Fold 6 1TB 1.png",
      isNew: true
    },
    {
      model: "Galaxy S25 Ultra 512GB",
      imageUrl: "/Galaxy S25 Ultra 512GB 1.png",
      isNew: true
    },
    {
      model: "Galaxy Z Fold 5 256GB",
      imageUrl: "/Galaxy Z Fold 5 256GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy S24 Ultra 256GB",
      imageUrl: "/Galaxy S24 Ultra 256GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy S23 Ultra 256GB",
      imageUrl: "/Galaxy S23 Ultra 256GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy Z Flip 5 256GB",
      imageUrl: "/Galaxy Z Flip 5 256GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy S22 Ultra 128GB",
      imageUrl: "/Galaxy S22 Ultra 128GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy S22 Ultra 256GB",
      imageUrl: "/Galaxy S22 Ultra 256GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy S23 Plus 256GB",
      imageUrl: "/S23Plus--- 2.png",
      isNew: false
    },
    {
      model: "Galaxy S23 FE",
      imageUrl: "/s23_fe 1.png",
      isNew: false
    },
    {
      model: "Galaxy S23 128GB",
      imageUrl: "/s23_fe 2.png",
      isNew: false
    },
    {
      model: "Galaxy S21 Plus",
      imageUrl: "/s21_plus- 1.png",
      isNew: false
    },
    {
      model: "Galaxy S22 Plus",
      imageUrl: "/s22_plus- 1.png",
      isNew: false
    },
    {
      model: "Galaxy S20 Ultra 128GB",
      imageUrl: "/Galaxy S20 ultra 128GB 1.png",
      isNew: false
    },
    {
      model: "Galaxy S20 Plus 128GB",
      imageUrl: "/S20_ULTRA- 2.png",
      isNew: false
    },
    {
      model: "Galaxy A54 Revvel Pro 5G",
      imageUrl: "/Galaxy A54 Revvel Pro 5G 1.png",
      isNew: false
    },
    {
      model: "Galaxy A14 Revvel 5G",
      imageUrl: "/Galaxy A14 Revvel 5G 1.png",
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
          {samsungPhones.map((phone, index) => (
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
                    {phone.model}
                  </h3>
                </div>
                <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                  <Image 
                    src={phone.imageUrl}
                    alt={phone.model}
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
