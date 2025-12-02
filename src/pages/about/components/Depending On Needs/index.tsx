import About from '../../../../assets/images/pexels-expect-best-79873-323780.jpg'

export function DependingOnNeeds() {
  return (
    <section 
      aria-label="About BFT Car Rental and Estate Services"
      className="py-20 px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-70 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={About} 
                alt="BFT Car Rental and Estate Services in Ghana"  
                className="object-fill" 
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-orange-500 font-semibold text-sm tracking-wide mb-2">
              ABOUT US
            </p>

            {/* ⭐ Improved SEO-friendly heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Leading Car Rental & Estate Services in Ghana
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              BFT Car Rental & Estate Services is a trusted company in Ghana 
              offering reliable car rentals, transport logistics, property 
              management, and real estate solutions. With a strong commitment 
              to excellence and customer satisfaction, we deliver reliable, 
              efficient, and personalized services to individuals and businesses 
              across Accra and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
