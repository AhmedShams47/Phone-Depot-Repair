"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Dispatch custom event when hover state changes
    console.log('Dispatching headerHover event:', isHovered);
    const event = new CustomEvent('headerHover', { detail: { isHovered } });
    window.dispatchEvent(event);
  }, [isHovered]);

  return (
    <header 
      className="relative z-50 bg-gradient-to-b from-[#e0e0e0] to-[#d4d4d4] rounded-b-[20px] md:rounded-b-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover State - Search Bar, Logo, Tagline */}
      <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-32 sm:max-h-28 md:max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-[1800px] mx-auto px-3 py-3 sm:px-6 sm:py-4 md:px-12 lg:px-16 md:py-4">
          {/* Mobile/Tablet Layout - Stacked */}
          <div className="flex md:hidden flex-col items-center gap-3">
            {/* Logo */}
            <Link href="/" className="block hover:scale-105 transition-transform">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/main-logo.png"
                  alt="Logo"
                  fill
                  className="object-contain drop-shadow-lg cursor-pointer"
                />
              </div>
            </Link>
            
            {/* Search Bar */}
            <div className="w-full max-w-md">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search devices..."
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white/80 backdrop-blur-sm border-none outline-none text-black placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex items-center justify-between gap-6 lg:gap-8">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Discover trending devices now..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 backdrop-blur-sm border-none outline-none text-black placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Main Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block hover:scale-105 transition-transform">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                  <Image
                    src="/main-logo.png"
                    alt="Logo"
                    fill
                    className="object-contain drop-shadow-lg cursor-pointer"
                  />
                </div>
              </Link>
            </div>

            {/* Tagline */}
            <div className="flex-1 max-w-md text-right">
              <h2 className="text-lg lg:text-xl xl:text-2xl font-serif font-normal text-black">
                Your Phone, We Care
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Default State */}
      <div className="max-w-[1800px] mx-auto px-4 py-3 sm:px-8 sm:py-4 md:px-12 lg:px-16 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-12">
        {/* Left - Accessories */}
        <div className="flex-shrink-0">
          <Link href="/accessories" className="hover:scale-105 transition-transform">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-black hover:text-gray-600">Accessories</h1>
          </Link>
        </div>

        {/* Center - Samsung, Search, Apple */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-50 flex-1 justify-center">
          {/* Samsung Logo */}
          <Link href="/samsung" className="hover:scale-105 transition-transform">
            <Image
              src="/samsung.png"
              alt="Samsung"
              width={100}
              height={32}
              className="object-contain sm:w-[120px] sm:h-[38px] md:w-[140px] md:h-[44px]"
            />
          </Link>

          {/* Search Icon - Only this hides */}
          <button 
            className={`bg-black rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all shadow-lg ${isHovered ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* Apple Logo */}
          <Link href="/apple" className="hover:scale-110 transition-transform">
            <Image
              src="/apple.png"
              alt="Apple"
              width={90}
              height={32}
              className="object-contain sm:w-[105px] sm:h-[37px] md:w-[120px] md:h-[42px]"
            />
          </Link>
        </div>

        {/* Right - Help & Support */}
        <div className="flex-shrink-0">
          <Link href="/contact" className="flex items-center gap-2 sm:gap-2.5 hover:scale-105 transition-transform group">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden shadow-md">
              <Image
                src="/help.jpg"
                alt="Help"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg font-medium text-black group-hover:text-gray-700 transition-colors whitespace-nowrap">
              help & support
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

