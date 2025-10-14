import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function ContactPage() {
  return (
    <SmoothScrollProvider>
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/background-2.png)" }}
      >
        <Header />
        
        {/* Main Content */}
        <div className="min-h-screen">
          {/* Logo and Tagline Section */}
          <div className="text-center pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-900 mb-8 sm:mb-12 px-4">
              Your Phone, We Care
            </h1>
            
            {/* Help Me Icon */}
            <div className="flex justify-center mb-8 sm:mb-12 px-4">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                <Image 
                  src="/helpme.svg" 
                  alt="Help & Support" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Contact Us Button */}
            <div className="mb-8 sm:mb-12 lg:mb-16 px-4">
              <Link href="/contact-form">
                <button className="bg-gradient-to-b from-blue-600 to-blue-800 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          
          {/* Support Section */}
          <div className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                  <Image 
                    src="/CTA-For-Contact.png" 
                    alt="Handled with Care at Phone Depot & Repair - Your trusted source for repair" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information Section */}
          <div className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-b from-[#e0e0e0] to-[#d4d4d4] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
                  Phone Depot & Repair
                </h2>
                
                {/* About Us */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">About Us</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    At Phone Depot & Repair, we believe every device deserves the best care-because staying connected matters. Based in Oklahoma City, our mission is to provide fast, reliable, and friendly repair services for your most essential technology.
                  </p>
                </div>
                
                {/* Contact Information */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    <li>• Office Address: 3205 SW 29th St, Oklahoma City OK 73119</li>
                    <li>• Phone: +1 (347) 553-077</li>
                    <li>• Email: samiulkarim07@gmail.com</li>
                  </ul>
                </div>
                
                {/* What We Do */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">What We Do</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    We offer a full range of phone and device repair services designed to get you back on track with minimal disruption. Our expert technicians handle:
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    <li>• Screen replacement for all major brands and models</li>
                    <li>• Battery replacement to restore full-day performance</li>
                    <li>• Charging port repairs for reliable connections</li>
                    <li>• Software troubleshooting to fix glitches or crashes</li>
                    <li>• Water damage repair, rescuing devices from the unexpected</li>
                  </ul>
                </div>

                {/* Customer Support Channels */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Customer Support Channels</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    We make it simple to reach us:
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    <li>• Use our online contact form for quick inquiries or to book a service</li>
                    <li>• Call during business hours for immediate assistance</li>
                    <li>• Email for in-depth technical or support questions</li>
                    <li>• Optional: Our live chat or chatbot (coming soon) offers help 24/7, so answers are never far away</li>
                  </ul>
                </div>

                {/* The Answers You Need */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">The Answers You Need</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Visit our FAQ section for common questions about pricing, repair options, turnaround times, and the wide variety of devices and brands we support. Our team is always happy to explain and ensure you understand each step of the service.
                  </p>
                </div>

                {/* Our Community & Reputation */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Community & Reputation</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Visit our FAQ section for common questions about pricing, repair options, turnaround times, and the wide variety of devices and brands we support. Our team is always happy to explain and ensure you understand each step of the service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
