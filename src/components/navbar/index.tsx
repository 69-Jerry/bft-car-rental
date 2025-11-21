import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "../../assets/images/cropped-cropped-logo_1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "text-orange-500" : "hover:text-orange-500";

  const services = [
    { label: "CAR RENTAL", to: "services" },
    { label: "CONSTRUCTION", to: "services" },
    { label: "FLEET MANAGEMENT", to: "services" },
    { label: "LANDSCAPING", to: "services" },
    { label: "LOGISTICS SERVICES", to: "services" },
    { label: "PROPERTY MANAGEMENT", to: "services" },
    { label: "FPROPERTY SALES", to: "services" },
  ];

  return (
    <>
      {/* ----------- MOBILE TOP BAR ----------- */}
      <div className="w-full bg-[#F3F8FF] py-2 flex flex-col items-center md:hidden relative">
        <div className="flex items-center gap-2 text-[#00306B] font-semibold text-sm">
          <Phone className="w-4 h-4" />
          <span>+233 302 524 020</span>
        </div>

        <div className="flex gap-4 mt-2 text-[#00306B]">
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
        </div>

        <div className="absolute right-4 top-2 text-[#00306B] font-semibold">
          EN ▼
        </div>
      </div>

      {/* ----------- MOBILE MAIN NAVBAR ----------- */}
      <nav className="w-full bg-white py-3 px-4 flex items-center justify-between md:hidden shadow-sm">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 object-contain" />
        </Link>

        <button
          className="bg-[#F26722] p-3 rounded-md"
          onClick={() => setOpen(true)}
        >
          <Menu className="text-white w-6 h-6" />
        </button>
      </nav>

      {/* ----------- DESKTOP HEADER TOP BAR ----------- */}
      <div className="hidden md:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a
              href="mailto:info.mybftservices@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Mail className="w-4 h-4" /> info.mybftservices@gmail.com
            </a>

            <a
              href="tel:+233302524020"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Phone className="w-4 h-4" /> +233 302 524 020
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-gray-600">
              <a
                href="https://web.facebook.com/BFTcarRentalAndEstateServices/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
              </a>

              <a
                href="https://x.com/mybftservices_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/mybftservices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 hover:text-pink-600 cursor-pointer" />
              </a>

              <a
                href="linkedin.com/company/109558763/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-4 h-4 hover:text-red-600 cursor-pointer" />
              </a>
            </div>

            <span className="flex items-center gap-1 text-sm">
              EN <ChevronDown className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* ----------- DESKTOP NAVBAR ----------- */}

      <div className="hidden md:block bg-[#00235A]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} className="h-14 object-contain" />
          </Link>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center gap-10 text-white font-semibold text-sm">
            <Link to="/" className={isActive("/")}>
              HOME
            </Link>
            <Link to="about" className={isActive("/about")}>
              ABOUT
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="services"
                className="flex items-center gap-1 hover:text-orange-500"
              >
                SERVICES <ChevronDown className="w-4 h-4" />
              </Link>

              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-md rounded w-48 py-2 text-gray-700 z-50">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="contact" className={isActive("/contact")}>
              CONTACT
            </Link>
            <Link to="team" className={isActive("/team")}>
              TEAM
            </Link>
            <Link to="sales" className={isActive("/sales")}>
              SALES
            </Link>
            <Link to="#" className={isActive("#")}>
              GALLERY
            </Link>
            <Link to="/diaspora" className={isActive("/diaspora")}>
              DIASPORA
            </Link>
          </div>

          {/* Get in Touch Button */}
          <Link
            to="/contact"
            className="bg-orange-500 px-5 py-2 rounded text-white text-sm font-semibold hover:bg-orange-600 whitespace-nowrap"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      {/* ----------- MOBILE SLIDE MENU ----------- */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-80 h-full bg-white p-5 shadow-xl overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
              <img src={Logo} className="h-10" />
            </div>

            <ul className="space-y-4 text-sm font-semibold text-[#00306B]">
              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="about" onClick={() => setOpen(false)}>
                  ABOUT
                </Link>
              </li>

              {/* Services Accordion */}
              <div>
                <Link
                  to="services"
                  className="flex justify-between w-full"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  SERVICES{" "}
                  <ChevronDown
                    className={`w-4 h-4 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="block"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <li>
                <Link to="contact" onClick={() => setOpen(false)}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="team" onClick={() => setOpen(false)}>
                  TEAM
                </Link>
              </li>
              <li>
                <Link to="sales" onClick={() => setOpen(false)}>
                  SALES
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => setOpen(false)}>
                  GALLERY
                </Link>
              </li>
              <li>
                <Link to="/diaspora" onClick={() => setOpen(false)}>
                  DIASPORA
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <h2 className="font-bold text-[#00306B] text-lg mb-4">
                Contact Info
              </h2>

              <p className="text-sm">📍 17 Ataa Avenue, Madina, Accra Ghana</p>
              <p className="mt-3 text-sm">📞 +233 302 524 020</p>
              <p className="mt-3 text-sm">✉️ info.mybftservices@gmail.com</p>

              <Link
                to="/get-in-touch"
                className="mt-5 w-full block bg-[#F26722] text-white text-center py-2 rounded"
              >
                GET IN TOUCH
              </Link>

              <div className="flex gap-3 mt-4 justify-center text-[#00306B]">
                <Facebook className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
