import { Calendar } from "lucide-react";

export function Footer() {
  const newsItems = [
    {
      id: 1,
      date: "JANUARY 10, 2024",
      title: "MAXIMIZE YOUR REAL ESTATE INVESTMENT WITH",
      image: "/real-estate-investment.png",
    },
    {
      id: 2,
      date: "JANUARY 10, 2024",
      title: "FIND YOUR DREAM HOME WITH BFT",
      image: "/dream-home.jpg",
    },
    {
      id: 3,
      date: "JANUARY 10, 2024",
      title: "SELL YOUR PROPERTY QUICKLY AND HASSLE-FREE",
      image: "/sell-property.jpg",
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
    <footer className="bg-blue-950 text-white py-16">
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
              fleet efficiently, navigate transport logistics seamlessly, or
              explore real estate opportunities, we have you covered.
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

          {/* News & Updates Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">News & Updates</h3>
            <div className="space-y-4">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 pb-4 border-b border-gray-700"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs flex items-center gap-1 mb-1">
                      <Calendar size={12} /> {item.date}
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
              <svg
                className="w-full h-auto"
                viewBox="0 0 1000 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World map background */}
                <rect width="1000" height="600" fill="#1e3a8a" />

                {/* Simplified world map continents */}
                <g fill="#8b4513" opacity="0.4">
                  {/* North America */}
                  <ellipse cx="200" cy="200" rx="80" ry="100" />
                  {/* South America */}
                  <ellipse cx="280" cy="380" rx="50" ry="80" />
                  {/* Europe */}
                  <ellipse cx="500" cy="150" rx="60" ry="50" />
                  {/* Africa */}
                  <ellipse cx="550" cy="350" rx="70" ry="90" />
                  {/* Asia */}
                  <ellipse cx="700" cy="250" rx="120" ry="100" />
                  {/* Australia */}
                  <ellipse cx="800" cy="450" rx="50" ry="50" />
                </g>

                {/* Location pins */}
                <g>
                  {/* Pin 1 - North America */}
                  <circle
                    cx="200"
                    cy="180"
                    r="12"
                    fill="#ff6b35"
                    opacity="0.8"
                  />
                  <circle cx="200" cy="180" r="8" fill="#ff8c42" />

                  {/* Pin 2 - Europe */}
                  <circle
                    cx="520"
                    cy="130"
                    r="12"
                    fill="#ff6b35"
                    opacity="0.8"
                  />
                  <circle cx="520" cy="130" r="8" fill="#ff8c42" />

                  {/* Pin 3 - Africa */}
                  <circle
                    cx="580"
                    cy="320"
                    r="12"
                    fill="#ff6b35"
                    opacity="0.8"
                  />
                  <circle cx="580" cy="320" r="8" fill="#ff8c42" />

                  {/* Pin 4 - Asia */}
                  <circle
                    cx="750"
                    cy="220"
                    r="12"
                    fill="#ff6b35"
                    opacity="0.8"
                  />
                  <circle cx="750" cy="220" r="8" fill="#ff8c42" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright ©2024 mybftservice.com. All Rights Reserved | Developed by Monty Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}

// Clock icon component
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
