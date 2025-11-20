import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pavers from "../../../../assets/images/pavers.jpeg";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "BFT\nCAR RENTAL &\nESTATE\nSERVICES",
      description:
        "At BFT Car Rental & Estate Services, we are committed to providing our clients with the best possible service. If you are looking for reliable and efficient services, please contact us today.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pavers})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Orange Circles */}
      <div className="absolute left-12 top-20 w-40 h-40 bg-[#FF5E14] rounded-full opacity-90" />
      <div className="absolute left-20 bottom-40 w-24 h-24 bg-[#FF5E14] rounded-full opacity-90" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white text-center whitespace-pre-line mb-6">
          {slide.title}
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-center text-white text-sm md:text-base leading-relaxed mb-8 font-light">
          {slide.description}
        </p>

        {/* Contact Button */}
        <div className="flex flex-col mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="px-12 py-3 bg-[#FF5E14] text-white font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
            CONTACT US
          </button>
          <button className="px-12 py-3 bg-white text-[#00234A] font-semibold text-lg  transition-colors duration-300">
            ABOUT US
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 transition-colors p-3 rounded"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#00235A]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 transition-colors p-3 rounded"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#00235A]" />
      </button>
    </div>
  );
}
