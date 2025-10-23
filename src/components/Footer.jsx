import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#e0e0e0] to-[#d4d4d4] rounded-t-[20px] md:rounded-t-[30px] shadow-[0_-20px_50px_rgba(0,0,0,0.6)] -mt-12">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10">
        {/* Top Section - Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-6">
          <Link href="/" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm md:text-base font-medium">
            Home
          </Link>
          
          <Link href="#" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm md:text-base font-medium">
            Accessories
          </Link>
          
          <Link href="/samsung" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm md:text-base font-medium">
            Samsung
          </Link>
          
          <Link href="/apple" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm md:text-base font-medium">
            Apple
          </Link>
          
          <Link href="/contact" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm md:text-base font-medium">
            Help & Support
          </Link>
        </div>

        {/* Middle Section - Tagline */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-black">
            Your Phone, We Care
          </h2>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12 mb-4 sm:mb-6">
          {/* Phone Number */}
          <a href="tel:+14059564687" className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium">+1 (405) 956-4687</span>
          </a>

          {/* Email */}
          <a href="mailto:phonedepot717@gmail.com" className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium">phonedepot717@gmail.com</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/14059564687" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium">WhatsApp</span>
          </a>
        </div>

        {/* Business Name */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 text-black">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-sm sm:text-base md:text-lg font-medium">Phone Depot & Repair</span>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center border-t border-gray-400 pt-4">
          <p className="text-black text-xs sm:text-sm">
            © 2025 Phone Depot & Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
