import { FaMapLocationDot } from "react-icons/fa6";
import worldmap from "../../assets/world.svg";

// Import Diaspora Images
import Kakum from "../../assets/images/Sunrise @ Kakum National Park GH (1).jpeg";
import Labadi from "../../assets/images/labadi.jpeg";
import Mole from "../../assets/images//Mole National Park, Northern Region.jpeg";

// Clock icon component (kept as-is)
function Clock(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function Footer() {
  const newsItems = [
    {
      id: 1,
      date: "Central Region",
      title: "Kakum National Park",
      image: Kakum,
    },
    {
      id: 2,
      date: "Accra",
      title: "Labadi Beach",
      image: Labadi,
    },
    {
      id: 3,
      date: "Savannah Region - Damongo",
      title: "Mole National Park",
      image: Mole,
    },
  ];

  const services = [
    "CAR RENTAL",
    "CONSTRUCTION",
    "FLEET MANAGEMENT",
    "LANDSCAPING",
    "LOGISTICS SERVICES",
    "PROPERTY MANAGEMENT",
    "PROPERTY SALES",
  ];

  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At BFT Car Rental & Estate Services, we offer a comprehensive
              range of services designed to cater to all your mobility and
              property needs. Whether you're looking to rent a car, manage your
              fleet, handle logistics, or explore real estate, we are here to help you.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Clock size={16} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase">Opening Hours</h4>
                <p className="text-gray-300 text-sm">24/7 Hours</p>
              </div>
            </div>
          </div>

          {/* Our Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-300 text-sm hover:text-orange-500 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Diaspora Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Diaspora</h3>
            <div className="space-y-4">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 pb-4 border-b border-gray-700"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1">
                    <p className="text-gray-400 text-xs flex items-center gap-1 mb-1">
                      <FaMapLocationDot size={18} color="white" /> {item.date}
                    </p>

                    <h4 className="text-white text-sm font-bold leading-tight hover:text-orange-500 transition-colors cursor-pointer">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Footprints Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Our Footprints</h3>

            <div className="relative bg-blue-900 rounded p-2">
              <img
                className="w-full h-auto"
                src={worldmap}
                alt="World Map"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright ©2024 mybftservice.com. All Rights Reserved |
            Developed by Monty Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
