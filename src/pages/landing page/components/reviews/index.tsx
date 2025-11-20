import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Nana Hema",
    location: "UK",
    text: "Amazing ! You guys are doing very well. Keep up the good work. Will definitely recommend BFT to everyone in my sphere of contact coming from the UK to Ghana",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    location: "USA",
    text: "Exceptional service! The team was professional and responsive. Highly recommend BFT for all your car rental and estate needs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "Canada",
    text: "Great experience working with BFT. They provided excellent solutions tailored to our needs. Will definitely use their services again.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    location: "Australia",
    text: "Outstanding professionalism and dedication. BFT exceeded our expectations in every way. Highly satisfied with their work.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
  },
];

export function CustomerReviews() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[current];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#003d7a] mb-16">
          CUSTOMERS REVIEW
        </h2>

        {/* Review Card */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Customer Photo with Quote Mark */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <img
                src={review.image || "/placeholder.svg"}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl">
                "
              </div>
            </div>
          </div>

          {/* Customer Name and Location */}
          <h3 className="text-2xl font-bold text-[#003d7a] mb-1">
            {review.name}
          </h3>
          <p className="text-gray-500 text-sm mb-6">{review.location}</p>

          {/* Review Text */}
          <p className="text-gray-600 text-center mb-6 leading-relaxed">
            {review.text}
          </p>

          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="fill-[#FF8C00] text-[#FF8C00]"
              />
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={prev}
            className="p-2 text-gray-400 hover:text-[#FF8C00] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Dots */}
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-[#FF8C00]" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 text-gray-400 hover:text-[#FF8C00] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
