import { Facebook, Twitter, Instagram } from "lucide-react";

import member1 from "../../../assets/images/member3f7ef.jpg";
import member2 from "../../../assets/images/WhatsApp-Image-2024-10-10-at-4.14.31-PM-1-e1728577678111.jpeg";
import member3 from "../../../assets/images/Helenaf7ef.jpg";
import member4 from "../../../assets/images/salesf7ef.png";
import member5 from "../../../assets/images/jerry.jpeg";
import member6 from "../../../assets/images/WhatsApp-Image-2024-10-09-at-7.10.33-PM-e1728559972952.jpeg";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "BISMARK FIIFI TETTEH",
    position: "MANAGING DIRECTOR",
    image: member1,
  },
  {
    id: 2,
    name: "ELOLO",
    position: "ACCOUNTANT/OPERATIONS",
    image: member2,
  },
  {
    id: 3,
    name: "HELENA OPOKU",
    position: "ADMINISTRATOR",
    image: member3,
  },
  {
    id: 4,
    name: "ABIGAIL",
    position: "SALES & MARKETING",
    image: member4,
  },
  {
    id: 5,
    name: "JERRY",
    position: "IT MANAGER",
    image: member5,
  },
  {
    id: 6,
    name: "BEATRICE",
    position: "RECEPTIONIST",
    image: member6,
  },
];

export function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">
            BFT CAR RENTALS & ESTATE SERVICES
          </p>
          <h2 className="text-5xl font-bold text-blue-950 mb-12">OUR TEAM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <div className="flex justify-center gap-4 mb-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">
                    <Instagram size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-semibold text-sm">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
