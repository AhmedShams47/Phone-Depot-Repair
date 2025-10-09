"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const [headerHovered, setHeaderHovered] = useState(false);
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const bottomImagesRef = useRef(null);

  useEffect(() => {
    const handleHeaderHover = (event) => {
      setHeaderHovered(event.detail.isHovered);
    };

    window.addEventListener('headerHover', handleHeaderHover);
    return () => window.removeEventListener('headerHover', handleHeaderHover);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero section entrance animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power2.out" 
        }
      );

      // Logo animation
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0, rotation: -10 },
        { 
          scale: 1, 
          opacity: 1, 
          rotation: 0, 
          duration: 1, 
          delay: 0.3,
          ease: "back.out(1.7)" 
        }
      );

      // Left card animation
      gsap.fromTo(leftCardRef.current,
        { x: -100, opacity: 0, rotationY: -15 },
        { 
          x: 0, 
          opacity: 1, 
          rotationY: 0, 
          duration: 1.2, 
          delay: 0.5,
          ease: "power2.out" 
        }
      );

      // Right card animation
      gsap.fromTo(rightCardRef.current,
        { x: 100, opacity: 0, rotationY: 15 },
        { 
          x: 0, 
          opacity: 1, 
          rotationY: 0, 
          duration: 1.2, 
          delay: 0.7,
          ease: "power2.out" 
        }
      );

      // Text animations
      gsap.fromTo(leftTextRef.current,
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.6,
          ease: "power2.out" 
        }
      );

      gsap.fromTo(rightTextRef.current,
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.8,
          ease: "power2.out" 
        }
      );

      // Bottom images animation with scroll trigger
      gsap.fromTo(bottomImagesRef.current,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomImagesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden -mt-4 sm:-mt-6 md:-mt-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Top Hero Content */}
        <div className="pt-6 pb-4 px-4 sm:pt-8 sm:pb-6 sm:px-6 md:pt-12 md:pb-8 md:px-12">
          <div className="max-w-[1600px] mx-auto">
            {/* Main Logo at Top */}
            <div ref={logoRef} className={`flex justify-center mb-4 sm:mb-6 md:mb-8 transition-opacity duration-500 ${headerHovered ? 'opacity-0' : 'opacity-100'}`}>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                <Image
                  src="/main-logo.png"
                  alt="Logo"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* iPhone Cards and Text */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
              {/* Left Section - iPhone Card & Text */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-1 w-full">
                <div ref={leftCardRef} className="flex-shrink-0">
                  <div className="bg-black rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-3 sm:p-3.5 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="relative w-[200px] h-[270px] sm:w-[220px] sm:h-[300px] md:w-[280px] md:h-[380px]">
                      <Image
                        src="/iphn-left.jpg"
                        alt="iPhone Left"
                        fill
                        className="object-cover rounded-[15px] sm:rounded-[18px] md:rounded-[20px] drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Left Text */}
                <div ref={leftTextRef} className="flex-1 max-w-full sm:max-w-[300px] md:max-w-[400px] text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-black leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.3)]">
                    Experience Innovation: The Ultimate iPhone 15 Pro Max
                  </h2>
                </div>
              </div>

              {/* Right Section - Text & iPhone Card */}
              <div className="flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 flex-1 justify-end w-full">
                {/* Right Text */}
                <div ref={rightTextRef} className="flex-1 text-center max-w-full sm:max-w-[300px]">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-1 sm:mb-2 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.3)]">
                    iPhone 13 Pro Max 128GB - $499
                    Limited-time deal. Get yours now!
                  </p>
                </div>

                <div ref={rightCardRef} className="flex-shrink-0">
                  <div className="bg-black rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-3 sm:p-3.5 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="relative w-[200px] h-[270px] sm:w-[220px] sm:h-[300px] md:w-[280px] md:h-[380px]">
                      <Image
                        src="/iphone-right.jpg"
                        alt="iPhone Right"
                        fill
                        className="object-cover rounded-[15px] sm:rounded-[18px] md:rounded-[20px] drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom iPhone Mockups */}
        <div className="pt-4 pb-8 px-4 sm:pt-6 sm:pb-12 sm:px-6 md:pt-8 md:pb-16 md:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div ref={bottomImagesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Left Phone Mockup */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[320px] h-[380px] sm:max-w-[400px] sm:h-[450px] md:max-w-[520px] md:h-[550px]">
                  <Image
                    src="/left.png"
                    alt="iPhone App Screen Left"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Right Phone Mockup */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[320px] h-[380px] sm:max-w-[400px] sm:h-[450px] md:max-w-[520px] md:h-[550px]">
                  <Image
                    src="/right.png"
                    alt="iPhone App Screen Right"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
