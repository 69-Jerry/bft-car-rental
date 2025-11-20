import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Hero } from "./components/hero";
import { CustomerReviews } from "./components/reviews";
import { PricingStats } from "./components/stats";
import { OurTeam } from "./components/team";
import { WhyTrustUs } from "./components/wtsu";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <p className="text-[#FF5E14] font-semibold text-sm tracking-wide mb-8">
            ABOUT US
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                YOUR TRUSTED PARTNERS
              </h2>
            </div>

            {/* Right Side - Description */}
            <div>
              <p className="text-[#00235A] text-lg leading-relaxed">
                At BFT Car Rental & Estate Services, we offer a comprehensive
                range of services designed to cater to all your mobility and
                property needs. Whether you're looking to rent a car, manage
                your fleet efficiently, navigate transport logistics seamlessly,
                or explore real estate opportunities, we have you covered.
              </p>
            </div>
          </div>
        </div>
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Label */}
            <p className="text-[#FF5E14] font-semibold text-sm tracking-wide mb-8">
              OUR SERVICES
            </p>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
              AT BFT CAR RENTAL & ESTATE SERVICES
            </h2>

            {/* Subheading */}
            <p className="text-[#00235A] text-lg max-w-3xl">
              We have specialised in providing a comprehensive range of services
              including
            </p>
          </div>
        </section>
      </section>
      <WhyTrustUs />
      <PricingStats />
      <OurTeam />
      <CustomerReviews />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
