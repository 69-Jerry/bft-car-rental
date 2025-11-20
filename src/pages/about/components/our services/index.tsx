import { Play } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Construction Service Card */}
          <div className="relative overflow-hidden group h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* <Image
              src={services[0].image || "/placeholder.svg"}
              alt="Construction Services"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            /> */}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              {/* Orange Banner */}
              <div className="space-y-4">
                <div className="bg-orange-500 p-6 w-fit max-w-xs">
                  <h3 className="text-white font-bold text-xl mb-2"></h3>
                  <p className="text-white text-sm"></p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="space-y-4">
                {/* Badge */}
                <div className="flex items-center gap-2 text-white">
                  <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                    <span className="text-orange-500 text-xs">✓</span>
                  </div>
                  <span className="text-sm font-semibold"></span>
                </div>

                {/* Button */}
                <button className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 flex items-center gap-2 transition-colors">
                  <Play size={16} fill="currentColor" />
                </button>

                {/* Website */}
                <p className="text-white text-xs"></p>
              </div>
            </div>
          </div>

          {/* Car Rental Service Card */}
          <div className="relative overflow-hidden group h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* <Image
              src={services[1].image || "/placeholder.svg"}
              alt="Car Rental Services"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            /> */}
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/70 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              {/* Title */}
              <h3 className="text-orange-500 font-bold text-2xl md:text-3xl w-fit">
                CAR RENTAL
                <br />
                SERVICES
              </h3>

              {/* Car Image Frame - Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-xs">
                {/* <div className="border-4 border-orange-500 rounded-lg overflow-hidden">
                  <Image
                    src={services[1].image || "/placeholder.svg"}
                    alt="Car"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div> */}
              </div>

              {/* Contact Info */}
              <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500 rounded p-4 space-y-2">
                <p className="text-orange-500 font-bold text-sm">
                  CONTACT US :
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Names */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-900"></h4>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-900"></h4>
          </div>
        </div>
      </div>
    </section>
  );
}
