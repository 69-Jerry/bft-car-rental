import About from '../../../../assets/images/pexels-expect-best-79873-323780.jpg'

export function DependingOnNeeds() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-70 rounded-lg overflow-hidden shadow-lg">
              <img src={About} alt="Modern luxury building"  className="object-fill" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-orange-500 font-semibold text-sm tracking-wide mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            DEPENDING ON
            <br />
            OUR NEEDS
          </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              At BFT Car Rental & Estate Services, we are a leading company in Ghana offering a comprehensive range of
              services to cater to your transportation, property management, and real estate needs. With a strong
              commitment to excellence and customer satisfaction, we strive to provide reliable, efficient, and
              personalized services to individuals and businesses alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
