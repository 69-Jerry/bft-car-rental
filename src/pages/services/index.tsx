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
      "Finding the perfect rental property can be a time-consuming and overwhelming task, especially when you have a busy schedule. At BFT, we understand the challenges of searching for a home, which is why we are here to make the process easy for you. As a rental agency, we bridge the gap between home seekers and property owners, helping you find comfortable accommodation at your desired location and an affordable fee.",
    image: RentalAgencyImg,
    icon: "🏠",
  },
  {
    id: 2,
    title: "Property Sales",
    description:
      "If you have properties such as land and houses that you're looking to sell, BFT Car Rental & Estate Services is here to make the process easy and efficient for you. With our extensive client base and expertise in property sales, we can help you sell your property quickly and seamlessly. We understand the importance of a timely sale, and our promise is to have your property sold within a maximum of 3 months",
    image: PropertySalesImg,
    icon: "🏢",
  },
  {
    id: 3,
    title: "Car Rental",
    description:
      "Looking for a reliable and hassle-free car rental services in Ghana? Look no further than BFT Car Rental. We are your trusted partner for all your car rental needs, whether it's for business trips, private tours, weddings, or airport pick-up and drop-off. With a wide range of car options and well-trained drivers, we are committed to providing you with a comfortable and enjoyable journey to your desired destination.",
    image: CarRentalImg,
    icon: "🚗",
  },
  {
    id: 4,
    title: "Fleet Management",
    description:
      "Are you looking to venture into the transport business but concerned about managing and monitoring the activities of your drivers? Look no further than BFT Car Rental & Estate Services. We offer comprehensive fleet management services that allow you to reap the full benefits of the transport industry while focusing on your core day-to-day activities. With our expertise and dedicated team, we take charge of managing your fleet, ensuring smooth operations and maximizing your returns.",
    image: FleetManagementImg,
    icon: "🚛",
  },
  {
    id: 5,
    title: "Construction",
    description:
      "BFT Car Rental & Estate Services is your most reliable partner when it comes to construction works. We have a pool of experienced artisans who specialize in various aspects of construction. Whether you need to reconstruct your home, build a new house from scratch, or have land but lack the necessary funds to start construction, BFT is ready to assist you every step of the way. Contact us today for further information and let us bring your construction projects to life.",
    image: ConstructionImg,
    icon: "🏗️",
  },
  {
    id: 6,
    title: "Logistics Services",
    description:
      "When it comes to moving your goods from the port or warehouse to your shop, factory, or to customers across the country, BFT Car Rental & Estate Services has a proven track record of providing reliable transport logistics services. With a diverse fleet of trucks and a commitment to excellence, we are your trusted partner for transporting all kinds of goods, both perishable and non-perishable, to your desired location.",
    image: LogisticsImg,
    icon: "📦",
  },
  {
    id: 7,
    title: "Property Management",
    description:
      "To manage your property while you are abroad or ensuring that your estate receives regular and reliable maintenance services, BFT Property Management is your trusted solution. We specialize in comprehensive property management services, including property upkeep, maintenance, and overseeing essential tasks such as garden maintenance, lighting, plumbing, and more. With our expertise and dedication, we ensure that your property is well-maintained and in optimal condition, providing you with peace of mind.",
    image: PropertyManagementImg,
    icon: "🔧",
  },
  {
    id: 8,
    title: "Landscaping",
    description:
      "Looking to enhance the physical environment of your house, office, or church, look no further than BFT Landscaping. We are experts in creating beautiful and captivating landscapes for homes, hotels, businesses, and churches. Our team specializes in all aspects of landscaping and gardening, from establishing lush lawns to trimming hedges and planting vibrant flowers. With our expertise and commitment to excellence, we can give your surroundings an outstanding look that will leave a lasting impression.",
    image: LandscapingImg,
    icon: "🌿",
  },
];

export default function AllServices() {
  return (
    <section className="min-h-screen bg-background flex flex-col">
      <Hero />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 mt-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003d7a] mb-6 font-poppins">
            ALL OUR SERVICES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            BFT Car Rental & Estate Services provides a full range of
            transportation, property, and business solutions.
          </p>
        </div>

        {/* ==== SERVICES GRID ==== */}
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
                  alt={service.title}
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
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
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
      <PricingStats />
    </section>
  );
}
