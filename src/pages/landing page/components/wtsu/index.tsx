import wcu from "../../../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg";
export function WhyTrustUs() {
  const values = [
    {
      title: "EXCELLENCE",
      description:
        "We are committed to delivering excellence in everything we do",
    },
    {
      title: "CUSTOMER SATISFACTION",
      description: "Our customers are at the heart of everything we do",
    },
    {
      title: "INTEGRITY",
      description:
        "We uphold the highest standards of integrity and ethics in all our interactions.",
    },
    {
      title: "RELIABILITY",
      description:
        "Trust is the foundation of our business. We understand the importance of delivering reliable services and solutions that our customers can depend on.",
    },
    {
      title: "PROFESSIONALISM",
      description:
        "Our team of experts is dedicated to maintaining the highest level of professionalism",
    },
    {
      title: "COLLABORATION",
      description: "We believe in the power of collaboration and teamwork",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${wcu})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Content */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-5xl lg:text-6xl font-light text-white text-balance">
              WHY TRUST US
            </h2>

            {/* Values list */}
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

            {/* Read More Button */}
            <button className="mt-8 bg-[#C85A3A] hover:bg-[#B34A2A] transition-colors duration-300 text-white font-bold px-12 py-3 w-fit">
              READ MORE
            </button>
          </div>

          {/* Right column - Decorative element */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            <div className="relative w-64 h-64">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-4 border-[#FF8C00] opacity-30" />

              {/* Inner animated circle */}
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
