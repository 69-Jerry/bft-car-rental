import Snowfall from "react-snowfall";
import { Hero } from "./components/hero";
import { CustomerReviews } from "./components/reviews";
import { PricingStats } from "./components/stats";
import { OurTeam } from "./components/team";
import { WhyTrustUs } from "./components/wtsu";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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

      {/* Hero Section (Hero component contains the actual H1) */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section Label */}
          <p className="text-[#FF5E14] font-semibold text-sm tracking-wide mb-8">
            ABOUT US
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ⭐ H1 moved to Hero; using H2 here */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                Your Trusted Car Rental & Estate Service Partners in Accra
              </h2>
            </div>

            <div>
              <p className="text-[#00235A] text-lg leading-relaxed">
                BFT Car Rental & Estate Services provides reliable car rentals, 
                fleet & transport logistics, and professional estate services 
                across Accra and Ghana. Whether you need a vehicle for business, 
                travel, or property assistance, our team ensures a seamless and trusted experience.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">

            <p className="text-[#FF5E14] font-semibold text-sm tracking-wide mb-8">
              OUR SERVICES
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
              What We Offer at BFT Car Rental & Estate Services
            </h2>

            <p className="text-[#00235A] text-lg max-w-3xl">
              We specialise in car rentals, transport logistics, fleet management, 
              and estate/property services — providing reliable and efficient support 
              tailored to your needs.
            </p>

          </div>
        </section>
      </section>

      <WhyTrustUs />
      <PricingStats />
      <OurTeam />
      <CustomerReviews />

    </div>
  );
};

export default LandingPage;
