"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const textRef = useRef(null);
  const primeRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Phone image animation
      gsap.fromTo(phoneRef.current,
        { x: -100, opacity: 0, rotationY: -20 },
        { 
          x: 0, 
          opacity: 1, 
          rotationY: 0, 
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: phoneRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text animation
      gsap.fromTo(textRef.current,
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Prime image animation
      gsap.fromTo(primeRef.current,
        { scale: 0.5, opacity: 0, rotation: 10 },
        { 
          scale: 1, 
          opacity: 1, 
          rotation: 0, 
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: primeRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Reviews animation
      gsap.fromTo(reviewsRef.current,
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-2.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left - Phone Image */}
          <div ref={phoneRef} className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
            <div className="bg-gradient-to-br from-gray-800 to-black rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <div className="relative w-[240px] h-[290px] sm:w-[280px] sm:h-[340px] md:w-[320px] md:h-[380px] lg:w-[360px] lg:h-[430px] xl:w-[380px] xl:h-[450px]">
                <Image
                  src="/s23-ultra.png"
                  alt="Samsung Galaxy S23 Ultra"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div ref={textRef} className="flex-1 text-center md:text-left w-full md:max-w-2xl px-2 sm:px-4 md:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.5)] sm:[text-shadow:_3px_3px_6px_rgb(0_0_0_/_0.5)]">
              Experience Innovation and Power with the Samsung Galaxy S23 Ultra - The Ultimate Flagship Smartphone
            </h2>
          </div>
        </div>

        {/* Prime Image - Centered Below - Much Larger */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
          <div ref={primeRef} className="relative w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[350px] lg:w-[850px] lg:h-[425px] xl:w-[1000px] xl:h-[500px]">
            <Image
              src="/prime.png"
              alt="Prime"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>


        {/* Apple Products Section */}
        <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                Apple Products
              </h2>
              <p className="text-white text-base sm:text-lg drop-shadow-lg">
                Latest iPhone models
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {/* Apple Product 1 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      iPhone 15 Pro Max 256GB
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/15 1.png"
                      alt="iPhone 15 Pro Max"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Apple Product 2 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      iPhone 15 Pro Max 256GB SIM Card
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/Iphone 15 pro nax. 2.png"
                      alt="iPhone 15 Pro Max"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Apple Product 3 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      iPhone 15 Pro Max 256GB Used
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/15_pro 2.png"
                      alt="iPhone 15 Pro Max Used"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Apple Product 4 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      iPhone 14 Pro Max 256GB
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/14_pro_max- 2.png"
                      alt="iPhone 14 Pro Max"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Samsung Products Section */}
        <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                Samsung Products
              </h2>
              <p className="text-white text-base sm:text-lg drop-shadow-lg">
                Latest Galaxy models and accessories
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {/* Samsung Product 1 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      Galaxy S24 Ultra 256GB
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/Galaxy S24 Ultra 256GB 1.png"
                      alt="Galaxy S24 Ultra"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Samsung Product 2 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      Galaxy S22 Ultra 128GB
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/Galaxy S22 Ultra 128GB 1.png"
                      alt="Galaxy S22 Ultra"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Samsung Product 3 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      Galaxy S22 Ultra 256GB
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/Galaxy S22 Ultra 256GB 1.png"
                      alt="Galaxy S22 Ultra"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Samsung Product 4 */}
              <div className="bg-center bg-no-repeat rounded-4xl sm:rounded-4xl shadow-lg hover:shadow-xl transition-shadow p-3 sm:p-4 lg:p-6 text-center flex flex-col h-full" style={{ 
                backgroundImage: "url(/card-bg.svg)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}>
                <div className="flex flex-col flex-grow">
                  <div className="mb-4 sm:mb-5">
                    <h3 className="bg-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm leading-tight">
                      Galaxy S23 Plus 256GB
                    </h3>
                  </div>
                  <div className="relative w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    <Image 
                      src="/Galaxy S23 Ultra 256GB 1.png"
                      alt="Galaxy S23 Plus"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Link href="/contact-form">
                      <button className="text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#414548' }}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <div ref={reviewsRef} className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Review Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                Exceptional service and user-friendly design! Highly recommended.
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  PS
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Priya Sharma</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">Product Manager</p>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Decent features, but the lack of customization options is disappointing.
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  NG
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Nisha Gupta</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Data Analyst</p>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Reviewer Avatar & Date */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    S
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sophia Carter</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">on Mar 12, 2024</p>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Title */}
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Amazing Experience!</h3>
              
              {/* Review Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                I couldn't be happier with my purchase. The quality is exceptional, and the support team was incredibly helpful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

