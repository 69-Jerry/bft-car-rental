

import { Facebook, Mail, Twitter, Instagram, Youtube } from "lucide-react"
import { Link } from "react-router-dom"


export function SocialMediaConnect() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      bgColor: "bg-[#1877F2]",
    },
    {
      name: "Google+",
      icon: Mail,
      href: "#",
      bgColor: "bg-[#EA4335]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      bgColor: "bg-black",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      bgColor: "bg-[#E1306C]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      bgColor: "bg-[#FF0000]",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading with decorative underline */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#003d7a] mb-8">Connect With Us On Our Social Media</h2>

        {/* Decorative dots and line */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-2 h-2 rounded-full bg-[#4169E1]"></span>
          <span className="w-2 h-2 rounded-full bg-[#4169E1]"></span>
          <span className="w-2 h-2 rounded-full bg-[#4169E1]"></span>
          <div className="w-12 h-1 bg-[#4169E1]"></div>
        </div>

        {/* Social media icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.name}
                to={social.href}
                className={`${social.bgColor} rounded-full p-4 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                aria-label={social.name}
              >
                <Icon size={32} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
