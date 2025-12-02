import { Trophy, Users, Sparkles } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Trophy,
      title: "Efficiency",
      description:
        "We understand the value of time. BFT ensures fast, efficient, and hassle-free services across our car rental, logistics, and estate operations.",
    },
    {
      icon: Users,
      title: "Quality",
      description:
        "We offer well-maintained vehicles, reliable logistics support, and high-quality real estate services — ensuring premium value for every client.",
    },
    {
      icon: Sparkles,
      title: "Customer Service",
      description:
        "Our customers come first. We deliver professional and friendly support, making your experience smooth whether renting a car or accessing estate services.",
    },
  ]

  return (
    <section
      aria-label="Why choose BFT Car Rental and Estate Services in Ghana"
      className="py-20 px-4 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          {/* ⭐ Improved SEO Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#003d7a] mb-4">
            Why Choose BFT Car Rental & Estate Services
          </h2>

          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#003d7a]"></div>
            <div className="w-2 h-2 rounded-full bg-[#003d7a]"></div>
            <div className="w-2 h-2 rounded-full bg-[#003d7a]"></div>
            <div className="w-16 h-1 bg-[#003d7a] rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">

                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="w-28 h-28 rounded-full bg-[#FF5E14] flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
