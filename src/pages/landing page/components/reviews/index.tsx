import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import LOCAL images
import review1 from "../../../../assets/images/testimonia1.jpg";
import review2 from "../../../../assets/images/testimonia2.jpg";
import review3 from "../../../../assets/images/testimonia3.jpg";
import review4 from "../../../../assets/images/testimonia4.jpg";

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
    name: "Nana Kofi",
    location: "Student, UG, LEGON",
    text:
      "Amazing ! You guys are doing very well. Keep up the good work. Will definitely recommend BFT...",
    image: review1,
    rating: 5,
  },
  {
    id: 2,
    name: "Roberta John",
    location: "USA",
    text:
      "Exceptional service! The team was professional and responsive...",
    image: review2,
    rating: 5,
  },
  {
    id: 3,
    name: "Melissa Uza",
    location: "Canada",
    text:
      "Great experience working with BFT...",
    image: review3,
    rating: 5,
  },
  {
    id: 4,
    name: "Nana Hema",
    location: "UK",
    text:
      "Outstanding professionalism and dedication...",
    image: review4,
    rating: 5,
  },
];

export function CustomerReviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#003d7a] mb-16">
          CUSTOMERS REVIEW
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl">
                "
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#003d7a] mb-1">{review.name}</h3>
          <p className="text-gray-500 text-sm mb-6">{review.location}</p>

          <p className="text-gray-600 text-center mb-6 leading-relaxed">
            {review.text}
          </p>

          <div className="flex justify-center gap-1 mb-8">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={24} className="fill-[#FF8C00] text-[#FF8C00]" />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button onClick={prev} className="p-2 text-gray-400 hover:text-[#FF8C00]">
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-[#FF8C00]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="p-2 text-gray-400 hover:text-[#FF8C00]">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
