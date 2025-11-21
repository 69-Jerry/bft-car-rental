
import { Trophy, Users, Sparkles } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Trophy,
      title: "Efficiency",
      description:
        "We understand that our clients live busy lives, and time is of the essence. That's why we strive to provide efficient services to them",
    },
    {
      icon: Users,
      title: "Quality",
      description:
        "We pride ourselves on the quality of our services. We only offer well-maintained cars for rental, and our real estate properties are of the highest quality.",
    },
    {
      icon: Sparkles,
      title: "Customer Service",
      description:
        "At BFT, we put our customers first. We are dedicated to providing excellent customer service and ensuring that our clients are satisfied with our services.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003d7a] mb-4">WHY CHOOSE US</h2>
          {/* Decorative underline */}
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
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
