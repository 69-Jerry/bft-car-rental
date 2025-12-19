"use client";

import { useState } from "react";

// Property images (temporary placeholders)
import Property1a from "../../assets/images/Car-Rental6bdb-768x768.png";
import Property1b from "../../assets/images/Car-Rental6bdb-768x768.png";
import Property1c from "../../assets/images/Car-Rental6bdb-768x768.png";

import Property2a from "../../assets/images/Car-Rental6bdb-768x768.png";
import Property2b from "../../assets/images/Car-Rental6bdb-768x768.png";

import Property3a from "../../assets/images/Car-Rental6bdb-768x768.png";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { Hero } from "./hero";
import Snowfall from "react-snowfall";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  images: string[];
}

const properties: Property[] = [
  {
    id: 1,
    title: "3-Bedroom Luxury Apartment",
    location: "East Legon, Accra",
    price: "₵2,500,000",
    images: [Property1a, Property1b, Property1c],
  },
  {
    id: 2,
    title: "Modern Office Space",
    location: "Ahodwo, Kumasi",
    price: "₵980,000",
    images: [Property2a, Property2b],
  },
  {
    id: 3,
    title: "4-Bedroom Townhouse",
    location: "Community 25, Tema",
    price: "₵1,750,000",
    images: [Property3a],
  },
];

export default function SalesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      {/* IMAGE VIEWER MODAL */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          aria-label="Image preview modal"
          onClick={() => setPreviewImg(null)}
        >
          <img
            src={previewImg}
            alt="Expanded property image preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}

      <Snowfall
              snowflakeCount={200}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />

      <Hero />

      <section
        className="py-16 bg-gray-50"
        aria-label="Properties for Sale in Ghana"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* SEO Heading */}
          <h1 className="text-3xl font-bold text-center mb-10 text-[#003d7a]">
            Properties for Sale in Ghana
          </h1>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            Explore a curated list of luxury homes, townhouses, and commercial
            properties available for sale across Accra, Kumasi, and Tema.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => {
              const isOpen = activeId === property.id;

              return (
                <Card
                  key={property.id}
                  className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                  aria-label={`${property.title} located in ${property.location}`}
                >
                  {/* Thumbnail */}
                  <div onClick={() => toggle(property.id)}>
                    <img
                      src={property.images[0]}
                      alt={`${property.title} for sale in ${property.location}`}
                      className="w-full h-56 object-cover"
                    />
                  </div>

                  <CardHeader onClick={() => toggle(property.id)}>
                    <CardTitle className="text-xl font-bold text-[#003d7a]">
                      {property.title}
                    </CardTitle>
                    <p className="text-gray-500 text-sm">{property.location}</p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-lg font-semibold text-green-600 mb-3">
                      {property.price}
                    </p>

                    {/* CALL BUTTON */}
                    <a
                      href="tel:+233XXXXXXXXX"
                      className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition mb-4"
                      aria-label={`Call BFT to enquire about ${property.title}`}
                    >
                      Call to Enquire
                    </a>

                    {/* EXPANDED GALLERY */}
                    {isOpen && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          {property.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`Image ${i + 1} of ${property.title}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewImg(img);
                              }}
                              className="h-20 w-full object-cover rounded hover:opacity-80 cursor-pointer"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
