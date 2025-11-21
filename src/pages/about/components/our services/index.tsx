import services from "../../../../assets/images/BFT-Construction-Company6bdb-768x768.png";
import services2 from "../../../../assets/images/Car-Rental6bdb-768x768.png";
export function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-4 tracking-wider">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            AT BFT CAR RENTAL & ESTATE SERVICES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We have specialised in providing a comprehensive range of services
            including
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Construction Service Card */}
          <div className="relative overflow-hidden group h-[] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={services}
              alt="Construction Services"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Car Rental Service Card */}
          <div className="relative overflow-hidden group  rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={services2}
              alt="Car Rental Services"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
