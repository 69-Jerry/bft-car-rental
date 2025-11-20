"use client";

import { ArrowRight } from "lucide-react";
import { Navbar } from "../../components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "../../components/footer";

const services = [
  {
    id: 1,
    title: "Rental Agency",
    description:
      "Finding the perfect rental property can be a time-consuming and overwhelming task. At BFT, we understand the challenges of searching for a home, which is why we are here to make the process easy for you. We bridge the gap between home seekers and property owners.",
    image: "/rental-agency-service.jpg",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Property Sales",
    description:
      "If you have properties such as land and houses that you're looking to sell, BFT is here to make the process easy and efficient. With our extensive client base and expertise, we can help you sell your property quickly and seamlessly within a maximum of 3 months.",
    image: "/property-sales-service.jpg",
    icon: "🏢",
  },
  {
    id: 3,
    title: "Car Rental",
    description:
      "Looking for reliable and hassle-free car rental services in Ghana? BFT Car Rental is your trusted partner for all your car rental needs. Whether for business trips, private tours, weddings, or airport pick-up and drop-off, we have you covered.",
    image: "/car-rental-service.jpg",
    icon: "🚗",
  },
  {
    id: 4,
    title: "Fleet Management",
    description:
      "Looking to venture into the transport business? BFT offers comprehensive fleet management services that allow you to reap the full benefits of the transport industry while focusing on your core day-to-day activities with our expertise.",
    image: "/fleet-management-service.jpg",
    icon: "🚛",
  },
  {
    id: 5,
    title: "Construction",
    description:
      "BFT is your most reliable partner for construction works. We have a pool of experienced artisans who specialize in various aspects of construction. From home reconstruction to building new houses from scratch, we are ready to assist you.",
    image: "/construction-service.jpg",
    icon: "🏗️",
  },
  {
    id: 6,
    title: "Logistics Services",
    description:
      "When it comes to moving your goods from the port or warehouse to your shop, factory, or to customers across the country, BFT has a proven track record. We transport all kinds of goods, both perishable and non-perishable, reliably.",
    image: "/logistics-service.jpg",
    icon: "📦",
  },
  {
    id: 7,
    title: "Property Management",
    description:
      "To manage your property while you are abroad or ensure regular maintenance, BFT Property Management is your trusted solution. We specialize in property upkeep, maintenance, garden care, plumbing, and more with expertise and dedication.",
    image: "/property-management-service.jpg",
    icon: "🔧",
  },
  {
    id: 8,
    title: "Landscaping",
    description:
      "Looking to enhance the physical environment of your house, office, or church? BFT Landscaping creates beautiful landscapes for homes, hotels, businesses, and churches. We specialize in lawn establishment, hedge trimming, and vibrant flower planting.",
    image: "/landscaping-service.jpg",
    icon: "🌿",
  },
];

export function AllServices() {
  return (
    <section className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003d7a] mb-6 font-poppins">
            ALL OUR SERVICES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            BFT Car Rental & Estate Services offers a comprehensive range of
            solutions tailored to meet all your transportation, property, and
            business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                {/* <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#003d7a] mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-[#FF8C00] font-semibold hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative Grid Layout - 2 columns */}
        <div className="mt-20 pt-16 border-t border-gray-200 mb-10">
          <h3 className="text-3xl font-bold text-[#003d7a] mb-12 text-center font-serif">
            Detailed Service Overview
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={`detailed-${service.id}`}
                className="flex gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:border-[#FF8C00] transition-colors duration-300"
              >
                {/* Image */}
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                  {/* <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="text-lg font-bold text-[#003d7a] font-serif">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
