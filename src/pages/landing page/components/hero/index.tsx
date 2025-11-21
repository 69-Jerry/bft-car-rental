import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../../../../assets/images/pexels-curtis-adams-1694007-4258275.jpg";

// 👉 Add 2 more images when you have them
import hero2 from "../../../../assets/images/pexels-safi-erneste-165511538-18029607.jpg";
import hero3 from "../../../../assets/images/pexels-the-ghazi-2152398165-32570638.jpg";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: hero,
      title: "BFT\nCAR RENTAL &\nESTATE\nSERVICES",
      description:
        "At BFT Car Rental & Estate Services, we are committed to providing our clients with the best possible service. If you are looking for reliable and efficient services, please contact us today.",
    },
    {
      id: 2,
      image: hero2,
      title: "RENT YOUR DREAM CAR",
      description:
        "Choose from our wide range of affordable, luxury, and executive vehicles suitable for all occasions.",
    },
    {
      id: 3,
      image: hero3,
      title: "ESTATE SERVICES MADE EASY",
      description:
        "We provide secure, professional, and reliable estate management services tailored to your needs.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ⭐ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Circles */}
      <div className="absolute left-12 top-20 w-40 h-40 bg-[#FF5E14] rounded-full opacity-90" />
      <div className="absolute left-20 bottom-40 w-24 h-24 bg-[#FF5E14] rounded-full opacity-90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-[90px] text-white text-center whitespace-pre-line mb-6 font-semibold">
          {slide.title}
        </h1>

        <p className="max-w-2xl text-center text-white text-sm md:text-base leading-relaxed mb-8 font-light">
          {slide.description}
        </p>

        <div className="flex flex-col mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="px-12 py-3 bg-[#FF5E14] text-white font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 rounded-2xl">
            CONTACT US
          </button>
          <button className="px-12 py-3 bg-white text-[#00234A] font-semibold text-lg transition-colors duration-300 rounded-2xl">
            ABOUT US
          </button>
        </div>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 transition-colors p-3 rounded"
      >
        <ChevronLeft className="w-6 h-6 text-[#00235A]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 transition-colors p-3 rounded"
      >
        <ChevronRight className="w-6 h-6 text-[#00235A]" />
      </button>
    </div>
  );
}
