"use client";

import { useState } from "react";

// Import images
import Kakum from "../../assets/images/Sunrise @ Kakum National Park GH (1).jpeg";
import CapeCoast from "../../assets/images/Cape Coast Castle.jpeg";
import Mole from "../../assets/images/Mole National Park, Northern Region.jpeg";
import KNM from "../../assets/images/@alitcandle - Photo 28 - On our final day in….jpeg";
import Labadi from "../../assets/images/La-beach.jpeg";
import Ada from "../../assets/images/Ada Foah, where the Volta River meets the Atlantic….jpeg";
import Nzulezu from "../../assets/images/Nzulezu Stilt Village floating above Lake Tadane….jpeg";
import Wli from "../../assets/images/Wli Falls.jpeg";
import Afadjato from "../../assets/images/The best views comes after the hardest climb….jpeg";
import Elmina from "../../assets/images/Cape Coast Castle.jpeg";
import Busua from "../../assets/images/Busua Beach.jpeg";
import PagaCrocodile from "../../assets/images/30+ Things to see and do in Ghana.jpeg";
import Larabanga from "../../assets/images/Photo of Larabanga Mosque taken in December 2014_.jpeg";
import ShaiHills from "../../assets/images/Hiking 🥾.jpeg";
import Aburi from "../../assets/images/Aburi Botanical Gardens , Ghana.jpeg";
import KintampoFalls from "../../assets/images/kintampo waterfalls.jpeg";
import BotiFalls from "../../assets/images/Boti Falls is a 30m-high waterfall within the Boti….jpeg";
import Atwea from "../../assets/images/Sanje Waterfalls, Udzungwa Mountains, Tanzania.jpeg";
import TafiMonkeySanctuary from "../../assets/images/monkysanc.jpeg";
import KumasiMuseum from "../../assets/images/Manhyia Palace Museum (2025) - All You Need to Know BEFORE You Go (with Reviews).jpeg";

import { Hero } from "./hero";

interface Attraction {
  id: number;
  name: string;
  region: string;
  location: string;
  description: string;
  image: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "Kakum National Park",
    region: "Central",
    location: "Central Region",
    description:
      "Famous for its rainforest canopy walkway, offering breathtaking views and a thrilling adventure for nature lovers visiting Ghana.",
    image: Kakum,
  },
  {
    id: 2,
    name: "Cape Coast Castle",
    region: "Central",
    location: "Cape Coast",
    description:
      "A UNESCO World Heritage site, rich with deep history of the transatlantic slave trade and cultural significance.",
    image: CapeCoast,
  },
  {
    id: 3,
    name: "Mole National Park",
    region: "Savannah",
    location: "Damongo",
    description:
      "Ghana’s biggest wildlife reserve with elephants, antelopes, baboons, and stunning savannah landscapes.",
    image: Mole,
  },
  {
    id: 4,
    name: "Kwame Nkrumah Mausoleum",
    region: "Greater Accra",
    location: "Accra",
    description:
      "Historic memorial park and museum honouring Ghana’s first president, Dr. Kwame Nkrumah.",
    image: KNM,
  },
  {
    id: 5,
    name: "Labadi Beach",
    region: "Greater Accra",
    location: "Accra",
    description:
      "Accra’s most popular beach — ideal for entertainment, music, food, and horseback riding.",
    image: Labadi,
  },
  {
    id: 6,
    name: "Ada Foah",
    region: "Greater Accra",
    location: "Ada",
    description:
      "A serene getaway where the Volta River meets the ocean — perfect for water sports, relaxation, and boat cruises.",
    image: Ada,
  },
  {
    id: 7,
    name: "Nzulezu Village on Stilts",
    region: "Western",
    location: "Jomoro",
    description:
      "A unique stilt village built entirely over water — accessible by canoe and rich in cultural heritage.",
    image: Nzulezu,
  },
  {
    id: 8,
    name: "Wli Waterfalls",
    region: "Volta",
    location: "Hohoe",
    description:
      "The tallest waterfall in Ghana, surrounded by lush forest and scenic mountain trails.",
    image: Wli,
  },
  {
    id: 9,
    name: "Mount Afadja (Afadjato)",
    region: "Volta",
    location: "Gbledi",
    description: "Ghana's highest mountain — a rewarding hiking and sightseeing adventure.",
    image: Afadjato,
  },
  {
    id: 10,
    name: "Elmina Castle",
    region: "Central",
    location: "Elmina",
    description:
      "A historic castle overlooking the ocean, known for emotional guided tours detailing the transatlantic slave trade.",
    image: Elmina,
  },
  {
    id: 11,
    name: "Busua Beach",
    region: "Western",
    location: "Busua",
    description:
      "A beautiful beach ideal for swimming, surfing, and peaceful relaxation.",
    image: Busua,
  },
  {
    id: 12,
    name: "Paga Crocodile Pond",
    region: "Upper East",
    location: "Paga",
    description:
      "A unique sacred pond where friendly crocodiles coexist peacefully with humans.",
    image: PagaCrocodile,
  },
  {
    id: 13,
    name: "Larabanga Mosque",
    region: "Savannah",
    location: "Larabanga",
    description:
      "Ghana’s oldest mosque, built in 1421, showcasing remarkable Sudano-Sahelian architecture.",
    image: Larabanga,
  },
  {
    id: 14,
    name: "Shai Hills Resource Reserve",
    region: "Greater Accra",
    location: "Shai Hills",
    description:
      "A beautiful reserve with wildlife, caves, and hiking trails — perfect for adventurers.",
    image: ShaiHills,
  },
  {
    id: 15,
    name: "Aburi Botanical Gardens",
    region: "Eastern",
    location: "Aburi",
    description:
      "A peaceful nature getaway ideal for picnics, guided tours, and photography.",
    image: Aburi,
  },
  {
    id: 16,
    name: "Kintampo Waterfalls",
    region: "Bono East",
    location: "Kintampo",
    description:
      "A majestic multi-layered waterfall surrounded by natural rock formations.",
    image: KintampoFalls,
  },
  {
    id: 17,
    name: "Boti Falls",
    region: "Eastern",
    location: "Boti",
    description:
      "Twin waterfalls with scenic hiking trails, often described as the ‘male and female falls’.",
    image: BotiFalls,
  },
  {
    id: 18,
    name: "Atwea Mountains",
    region: "Ashanti",
    location: "Atwea",
    description:
      "A spiritual and scenic mountain known for prayer camps and panoramic views.",
    image: Atwea,
  },
  {
    id: 19,
    name: "Tafi Monkey Sanctuary",
    region: "Volta",
    location: "Tafi-Atome",
    description: "A protected forest home to friendly Mona monkeys — great for family visits.",
    image: TafiMonkeySanctuary,
  },
  {
    id: 20,
    name: "Manhyia Palace Museum",
    region: "Ashanti",
    location: "Kumasi",
    description:
      "A cultural museum showcasing Ashanti royal history and artifacts.",
    image: KumasiMuseum,
  },
];

export default function DiasporaPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(attractions.length / itemsPerPage);

  const currentItems = attractions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Hero />

      <section
        aria-label="Ghana tourist attractions and places to visit"
        className="py-20 bg-gray-50 min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-6 mt-10">

          {/* ⭐ Strong SEO H1 */}
          <h1 className="text-4xl font-bold text-center text-[#003d7a] mb-6">
            Explore Ghana — Top Tourist Attractions & Places to Visit
          </h1>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Discover Ghana’s rich culture, breathtaking landscapes, wildlife parks,
            serene beaches, historical monuments, and natural wonders across all 
            16 regions.
          </p>

          {/* ⭐ SEO-friendly H2 before the grid */}
          <h2 className="sr-only">List of tourist attractions in Ghana</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentItems.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition group"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={place.image}
                    alt={`${place.name} in ${place.location}, ${place.region} Region, Ghana`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003d7a] mb-1">
                    {place.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {place.location}, {place.region} Region
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {place.description}
                  </p>

                  <a
                    href="tel:+233XXXXXXXXX"
                    className="block text-center bg-[#FF8C00] text-white py-2 rounded-lg font-semibold hover:bg-[#e67a00] transition"
                  >
                    Call to Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === index + 1
                    ? "bg-[#003d7a] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
