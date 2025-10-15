"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export default function AccessoriesPage() {
  return (
    <SmoothScrollProvider>
      <Header />
      
      <main className="min-h-screen relative -mt-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background-2.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content with better readability */}
        <div className="relative z-10 min-h-screen pb-0">
        {/* Hero Section */}
        <div className="pt-20 pb-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Accessories & Devices
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-lg">
              Discover our premium collection of phones, tablets, watches, and accessories
            </p>
          </div>
        </div>


        {/* Accessories Section */}
        <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {/* Product Card 1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop"
                    alt="iPhone 15 Pro"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">iPhone 15 Pro Case</h3>
                <p className="text-gray-600 text-sm mb-3">Latest Apple flagship</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$99</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop"
                    alt="Samsung Galaxy S24"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Galaxy S24 Ultra Case</h3>
                <p className="text-gray-600 text-sm mb-3">Premium Android experience</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$89</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop"
                    alt="iPad Pro"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">iPad Pro 12.9" Case</h3>
                <p className="text-gray-600 text-sm mb-3">Professional tablet</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$1,09</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
                    alt="AirPods Pro"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pixel Watch</h3>
                <p className="text-gray-600 text-sm mb-3">Wireless charge</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$249</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=300&fit=crop"
                    alt="Apple Watch"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple airpod</h3>
                <p className="text-gray-600 text-sm mb-3">Smart companion</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$399</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop"
                    alt="MacBook Pro"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aplle Airpod Pro"</h3>
                <p className="text-gray-600 text-sm mb-3">Professional</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$1,999</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 7 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop"
                    alt="Samsung Galaxy Watch"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">laptop Case</h3>
                <p className="text-gray-600 text-sm mb-3">Smart tracker</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$299</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>

              {/* Product Card 8 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
                    alt="iPhone Accessories"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Cases</h3>
                <p className="text-gray-600 text-sm mb-3">Protection & style</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">$49</span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Footer outside of blurred content */}
      <Footer />
    </SmoothScrollProvider>
  );
}
