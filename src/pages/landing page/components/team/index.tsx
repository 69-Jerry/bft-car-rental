"use client"

import { Facebook, Twitter, Instagram } from "lucide-react"


interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "BISMARK FIIFI TETTEH",
    position: "MANAGING DIRECTOR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "ELOLO",
    position: "ACCOUNTANT/OPERATIONS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "HELENA OPOKU",
    position: "ADMINISTRATOR",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
]

export function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">BFT CAR RENTALS & ESTATE SERVICES</p>
          <h2 className="text-5xl font-bold text-blue-950 mb-12">OUR TEAM</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-80 bg-gray-200">
                {/* <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" /> */}
              </div>

              {/* Info Container */}
              <div className="p-6 text-center">
                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-blue-950 mb-1">{member.name}</h3>

                {/* Position */}
                <p className="text-orange-500 font-semibold text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
