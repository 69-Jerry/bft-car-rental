import wcu from "../../../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg";

export function WhyTrustUs() {
  const values = [
    {
      title: "EXCELLENCE",
      description:
        "We deliver excellence across all our car rental, logistics, and estate services to ensure the best customer experience.",
    },
    {
      title: "CUSTOMER SATISFACTION",
      description:
        "Our customers are at the heart of every decision we make, and we strive to exceed expectations with every service.",
    },
    {
      title: "INTEGRITY",
      description:
        "We uphold the highest standards of integrity and ethics in all interactions, ensuring transparency and trust.",
    },
    {
      title: "RELIABILITY",
      description:
        "We provide dependable car rental, logistics, and property services that our clients can always rely on.",
    },
    {
      title: "PROFESSIONALISM",
      description:
        "Our trained team maintains top-tier professionalism across all service areas, from rentals to estate management.",
    },
    {
      title: "COLLABORATION",
      description:
        "We believe in teamwork — partnering with clients to deliver solutions that truly meet their needs.",
    },
  ];

  return (
    <section
      aria-label="Why Trust BFT Car Rental & Estate Services"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${wcu})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-8">

            {/* ⭐ Improved SEO-friendly heading */}
            <h2 className="text-5xl lg:text-6xl font-light text-white text-balance">
              Why Trust BFT Car Rental & Estate Services in Accra
            </h2>

            {/* Values */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#FF8C00]">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-100 leading-relaxed max-w-md">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <a href="services" className="mt-8 bg-[#C85A3A] hover:bg-[#B34A2A] transition-colors duration-300 text-white font-bold px-12 py-3 w-fit">
              READ MORE
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            <div className="relative w-64 h-64">
              
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-4 border-[#FF8C00] opacity-30" />

              {/* Inner circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-b from-[#FFA500] to-[#FF8C00] opacity-60 animate-pulse" />

              {/* Center accent */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#FFB84D] to-[#FFA500] rounded-full opacity-40 blur-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
