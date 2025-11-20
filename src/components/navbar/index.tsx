import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ChevronDown,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) =>
    currentPath === path
      ? "text-orange-400 underline underline-offset-4"
      : "text-white hover:text-orange-400";

  const services = [
    { label: "Car Rental", to: "/car-rental" },
    { label: "Estate Services", to: "/estate-services" },
    { label: "Luxury Vehicles", to: "/luxury-vehicles" },
  ];

  return (
    <nav className="w-full">
      {/* Top Info Bar */}
      <div className="bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a
              href="mailto:info.mybftservices@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info.mybftservices@gmail.com</span>
            </a>

            <a
              href="tel:+233302524020"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+233 302 524 020</span>
            </a>
          </div>

          {/* Social Icons + Language */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
              EN <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#00235A]">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                  BFT
                </div>
                <span className="text-white font-bold text-lg hidden sm:inline">
                  Car Rental & Estate Services
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={isActive("/")}>
                HOME
              </Link>

              <Link to="/about" className={isActive("/about")}>
                ABOUT
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link to="/services"
                  className={`${
                    services.some((s) => s.to === currentPath)
                      ? "text-orange-400 underline underline-offset-4"
                      : "text-white hover:text-orange-400"
                  } flex items-center gap-1`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  SERVICES
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {isServicesOpen && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        to={service.to}
                        className={`block px-4 py-2 transition-colors ${
                          currentPath === service.to
                            ? "text-orange-600 bg-orange-50"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className={isActive("/contact")}>
                CONTACT
              </Link>

              <Link to="/team" className={isActive("/team")}>
                TEAM
              </Link>

              <Link to="/sales" className={isActive("/sales")}>
                SALES
              </Link>

              <Link to="/gallery" className={isActive("/gallery")}>
                GALLERY
              </Link>

              <Link to="/blog" className={isActive("/blog")}>
                BLOG
              </Link>

              {/* ⭐ ACTIVE GET IN TOUCH */}
              <Link
                to="/get-in-touch"
                className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                  currentPath === "/get-in-touch"
                    ? "bg-orange-600 text-white"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 px-4 pb-4">
            <Link to="/" className={isActive("/")}>
              HOME
            </Link>

            <Link to="/about" className={isActive("/about")}>
              ABOUT
            </Link>

            {/* Mobile Services */}
            <button
              className={`w-full text-left flex items-center justify-between ${isActive(
                "/car-rental"
              )}`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              SERVICES
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.label}
                    to={service.to}
                    className={isActive(service.to)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/contact" className={isActive("/contact")}>
              CONTACT
            </Link>
            <Link to="/team" className={isActive("/team")}>
              TEAM
            </Link>
            <Link to="/sales" className={isActive("/sales")}>
              SALES
            </Link>
            <Link to="/gallery" className={isActive("/gallery")}>
              GALLERY
            </Link>
            <Link to="/blog" className={isActive("/blog")}>
              BLOG
            </Link>

            {/* ⭐ Mobile GET IN TOUCH */}
            <Link to="/get-in-touch" className={isActive("/get-in-touch")}>
              GET IN TOUCH
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
