import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../../../../assets/images/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import hero2 from "../../../../assets/images/2025-Toyota-Land-Cruiser-250-004-1440w.jpg";
import hero3 from "../../../../assets/images/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg";
import { Link } from "react-router-dom";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: hero,
      title: "BFT CAR RENTAL & ESTATE SERVICES",
      description:
        "Reliable car rentals, estate management, and professional real-estate support tailored to your needs.",
    },
    {
      id: 2,
      image: hero2,
      title: "RENT YOUR DREAM CAR TODAY",
      description:
        "Choose from a range of luxury, executive, and affordable vehicles for every occasion.",
    },
    {
      id: 3,
      image: hero3,
      title: "TRUSTED ESTATE MANAGEMENT",
      description:
        "We provide secure, efficient, and professional estate services across Ghana.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <header
      className="relative w-full h-screen overflow-hidden"
      aria-label="Homepage hero section showcasing BFT services"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-12 top-20 w-40 h-40 bg-[#FF5E14] rounded-full opacity-90" />
      <div className="absolute left-20 bottom-40 w-24 h-24 bg-[#FF5E14] rounded-full opacity-90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
        
        {/* Main SEO H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-[90px] font-semibold text-center leading-tight">
          {slide.title}
        </h1>

        <p className="max-w-2xl text-center text-sm md:text-base leading-relaxed mt-4 font-light">
          {slide.description}
        </p>

        <div className="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="contact"
            className="px-12 py-3 bg-[#FF5E14] text-white font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 rounded-2xl"
            aria-label="Contact BFT Car Rental & Estate Services"
          >
            CONTACT US
          </Link>

          <Link
            to="about"
            className="px-12 py-3 bg-white text-[#00234A] font-semibold text-lg transition-colors duration-300 rounded-2xl"
            aria-label="Learn more about BFT services"
          >
            ABOUT US
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 transition-colors p-3 rounded"
      >
        <ChevronLeft className="w-6 h-6 text-[#00235A]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 transition-colors p-3 rounded"
      >
        <ChevronRight className="w-6 h-6 text-[#00235A]" />
      </button>
    </header>
  );
}
