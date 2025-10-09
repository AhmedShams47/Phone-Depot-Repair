import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#8a8a8a]">
        <Header />
        <Hero />
        <ProductShowcase />
        <Footer />
        <main>
          {/* Your main content goes here */}
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
