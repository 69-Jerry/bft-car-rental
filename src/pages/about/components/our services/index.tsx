import services from "../../../../assets/images/BFT-Construction-Company6bdb-768x768.png";
import services2 from "../../../../assets/images/Car-Rental6bdb-768x768.png";

export function ServicesGrid() {
  return (
    <section 
      aria-label="Services offered by BFT Car Rental & Estate Services"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-4 tracking-wider">
            OUR SERVICES
          </p>

          {/* ⭐ Improved SEO heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Comprehensive Car Rental, Estate & Construction Services in Ghana
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide trusted solutions in car rental, estate services, property support,
            and construction services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Construction Service Card */}
          <div className="relative overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={services}
              alt="Construction and building services by BFT"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* ⭐ Invisible but SEO-useful label */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-md">
              <h3 className="text-white text-xl font-semibold">
                Construction Services
              </h3>
            </div>
          </div>

          {/* Car Rental Service Card */}
          <div className="relative overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={services2}
              alt="Car rental services in Accra provided by BFT"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* ⭐ SEO-Boosted Label */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-md">
              <h3 className="text-white text-xl font-semibold">
                Car Rental Services
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
