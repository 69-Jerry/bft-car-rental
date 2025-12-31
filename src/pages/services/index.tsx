import { ArrowRight } from "lucide-react";
import { Hero } from "./components/hero";

import RentalAgencyImg from "../../assets/images/pexels-ivan-s-8962228.jpg";
import PropertySalesImg from "../../assets/images/pexels-pavel-danilyuk-7937753.jpg";
import CarRentalImg from "../../assets/images/pexels-pixabay-164634.jpg";
import FleetManagementImg from "../../assets/images/pexels-sadi-hockmuller-2055469670-29205860.jpg";
import ConstructionImg from "../../assets/images/pexels-quang-nguyen-vinh-222549-2138126.jpg";
import LogisticsImg from "../../assets/images/Logistics Transport Freight Shipping Cargo Import Export Customs_.jpeg";
import PropertyManagementImg from "../../assets/images/pexels-kindelmedia-7578977.jpg";
import LandscapingImg from "../../assets/images/pexels-pixabay-158028.jpg";

import { PricingStats } from "./components/stats";

const services = [
  {
    id: 1,
    title: "Rental Agency",
    description:
      "Finding the right rental home can be stressful and time-consuming. BFT bridges the gap between property owners and tenants, helping you secure comfortable accommodation at the right location and price.",
    image: RentalAgencyImg,
    icon: "🏠",
  },
  {
    id: 2,
    title: "Property Sales",
    description:
      "Selling land or a house in Ghana? We help property owners sell quickly and efficiently through our large client base. We aim to have your property sold within a maximum of 3 months.",
    image: PropertySalesImg,
    icon: "🏢",
  },
  {
    id: 3,
    title: "Car Rental",
    description:
      "Need a car for weddings, business, airport pickup, or private travel? BFT provides reliable car rental services across Ghana with well-maintained cars and professional drivers.",
    image: CarRentalImg,
    icon: "🚗",
  },
  {
    id: 4,
    title: "Fleet Management",
    description:
      "Own transport vehicles but can’t manage daily operations? We handle supervision, tracking, and profit optimization so you enjoy returns without stress.",
    image: FleetManagementImg,
    icon: "🚛",
  },
  {
    id: 5,
    title: "Construction",
    description:
      "From renovations to full building projects, BFT provides skilled contractors and artisans for all construction needs. Even if you lack funds, we help you start your project the right way.",
    image: ConstructionImg,
    icon: "🏗️",
  },
  {
    id: 6,
    title: "Logistics Services",
    description:
      "Transport your goods from ports, warehouses, and factories to any destination across Ghana. We handle all logistics for both perishable and non-perishable items.",
    image: LogisticsImg,
    icon: "📦",
  },
  {
    id: 7,
    title: "Property Management",
    description:
      "Stay abroad stress-free while we manage and maintain your property — including electricals, plumbing, gardening, and routine upkeep.",
    image: PropertyManagementImg,
    icon: "🔧",
  },
  {
    id: 8,
    title: "Landscaping",
    description:
      "We design and maintain beautiful landscapes for homes, hotels, churches, and businesses — lawns, flowers, hedges, and more.",
    image: LandscapingImg,
    icon: "🌿",
  },
];

export default function AllServices() {
  return (
    <section
      aria-label="BFT Car Rental & Estate Services in Ghana – Full Service List"
      className="min-h-screen bg-background flex flex-col"
    >
      <Hero />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 mt-32">
          {/* ⭐ SEO H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003d7a] mb-6 font-poppins">
            All Our Services – Car Rental, Estate, Logistics & Construction in
            Ghana
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            BFT Car Rental & Estate Services provides fully integrated solutions
            in transportation, real estate, fleet operations, logistics, and
            property maintenance across Ghana.
          </p>
        </div>

        {/* ==== SERVICES GRID ==== */}
        <h2 className="sr-only">Service Categories Offered by BFT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service offered by BFT Car Rental & Estate Services`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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

                <button className="flex items-center gap-2 text-[#FF8C00] font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ==== DETAILED GRID ==== */}
        <div className="mt-20 pt-16 border-t border-gray-200 mb-10">
          <h3 className="text-3xl font-bold text-[#003d7a] mb-12 text-center font-serif">
            Detailed Service Overview
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={`detailed-${service.id}`}
                className="flex gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:border-[#FF8C00] transition-all"
              >
                {/* Small Image */}
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} full description and details`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">{service.icon}</span>
                    <h4 className="text-lg font-bold text-[#003d7a] font-serif">
                      {service.title}
                    </h4>
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

      <PricingStats />
    </section>
  );
}
